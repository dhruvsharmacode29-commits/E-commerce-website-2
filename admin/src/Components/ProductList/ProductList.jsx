import React, { useEffect, useState } from 'react'
import { Trash2, Search, Filter } from 'lucide-react'
const ProductList = () => {

   const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/productlist")
      .then((resp) => resp.json())
      .then((data) => { setAllProducts(data) });
  };

  const remove_Product = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id })
      });
      await fetchInfo();
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className='w-full p-8 mx-auto max-w-7xl'>
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
            Product Inventory
          </h1>
          <p className='mt-2 text-gray-600'>Manage your product catalog ({filteredProducts.length} items)</p>
        </div>

        {/* Search & Filter */}
        <div className='flex gap-3'>
          <div className="relative flex-1 md:w-64">
            <Search className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full py-2 pl-10 pr-4 text-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none'
            />
          </div>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className='px-4 py-2 text-sm font-semibold border-2 border-gray-200 cursor-pointer rounded-xl focus:border-indigo-500 focus:outline-none'
          >
            <option value="all">All Categories</option>
            <option value="mens">Men's</option>
            <option value="womens">Women's</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className='overflow-hidden bg-white border-2 border-gray-200 rounded-2xl'>
        {/* Desktop Table Header */}
        <div className='hidden grid-cols-12 gap-4 p-4 text-sm font-bold text-gray-600 uppercase border-b-2 border-gray-200 bg-gray-50 md:grid'>
          <div className='col-span-1'>Image</div>
          <div className='col-span-4'>Product Name</div>
          <div className='col-span-2'>Category</div>
          <div className='col-span-2'>Original Price</div>
          <div className='col-span-2'>Sale Price</div>
          <div className='col-span-1 text-center'>Action</div>
        </div>

        {/* Products List */}
        <div className='divide-y divide-gray-100 max-h-[600px] overflow-y-auto'>
          {filteredProducts.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-12'>
              <div className='flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full'>
                <Search className='w-8 h-8 text-gray-400' />
              </div>
              <p className='text-lg font-semibold text-gray-600'>No products found</p>
              <p className='text-sm text-gray-400'>Try adjusting your search or filter</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} className='grid items-center grid-cols-1 gap-4 p-4 transition-colors md:grid-cols-12 hover:bg-indigo-50'>
                {/* Product Image */}
                <div className='md:col-span-1'>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className='object-cover w-16 h-16 border-2 border-gray-200 rounded-xl'
                  />
                </div>

                {/* Product Name */}
                <div className='md:col-span-4'>
                  <h3 className='font-semibold text-gray-900 line-clamp-2'>{product.name}</h3>
                  <p className='text-xs text-gray-500'>SKU: #PR{product.id}</p>
                </div>

                {/* Category */}
                <div className='md:col-span-2'>
                  <span className='inline-block px-3 py-1 text-xs font-semibold text-indigo-600 capitalize rounded-full bg-indigo-50'>
                    {product.category}
                  </span>
                </div>

                {/* Old Price */}
                <div className='md:col-span-2'>
                  <span className='text-lg font-bold text-gray-400 line-through'>${product.old_price}</span>
                </div>

                {/* New Price */}
                <div className='md:col-span-2'>
                  <span className='text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
                    ${product.new_price}
                  </span>
                  <span className='block text-xs font-semibold text-green-600'>
                    {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% off
                  </span>
                </div>

                {/* Actions */}
                <div className='flex justify-center md:col-span-1'>
                  <button
                    onClick={() => { remove_Product(product.id) }}
                    className='p-2 text-red-500 transition-all duration-200 rounded-lg hover:bg-red-50 hover:scale-110'
                    title="Delete product"
                  >
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
