import React, { useState } from 'react'
import upload_area from '../../assets/upload_area.svg'
import { Upload, DollarSign, Tag, Image as ImageIcon } from 'lucide-react'
const AddProduct = () => {

   const [image, setImage] = useState(false);
  const [productdetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "mens",
    old_price: "",
    new_price: "",
  });
  const [loading, setLoading] = useState(false);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productdetails, [e.target.name]: e.target.value });
  };

  const add_Product = async () => {
    setLoading(true);
    let responseData;
    let product = productdetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added Successfully! ✓") : alert("Error Occurred");
      });
    }
    setLoading(false);
  };

  return (
    <div className='w-full max-w-5xl p-8 mx-auto'>
      {/* Header */}
      <div className="mb-8">
        <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
          Add New Product
        </h1>
        <p className='mt-2 text-gray-600'>Fill in the details below to add a new product to your store</p>
      </div>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {/* Left Column - Image Upload */}
        <div className='lg:col-span-1'>
          <div className='sticky p-6 space-y-4 bg-white border-2 border-gray-200 top-24 rounded-2xl'>
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className='w-5 h-5 text-indigo-600' />
              <h3 className='text-lg font-bold text-gray-800'>Product Image</h3>
            </div>
            
            <label htmlFor="file-input" className='block'>
              <div className={`relative border-2 border-dashed rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                image ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
              }`}>
                <img 
                  src={image ? URL.createObjectURL(image) : upload_area} 
                  alt="upload" 
                  className='object-contain w-full h-64'
                />
                {!image && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80">
                    <Upload className='w-12 h-12 mb-2 text-gray-400' />
                    <p className='text-sm font-semibold text-gray-600'>Click to upload</p>
                    <p className='text-xs text-gray-400'>PNG, JPG up to 10MB</p>
                  </div>
                )}
              </div>
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden accept="image/*" />
            
            {image && (
              <button 
                onClick={() => setImage(false)}
                className='w-full px-4 py-2 text-sm font-semibold text-red-600 transition-colors border-2 border-red-200 rounded-xl hover:bg-red-50'
              >
                Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className='space-y-6 lg:col-span-2'>
          <div className='p-8 space-y-6 bg-white border-2 border-gray-200 rounded-2xl'>
            {/* Product Name */}
            <div>
              <label className='flex items-center gap-2 mb-2 text-sm font-bold text-gray-700'>
                <Tag className='w-4 h-4' />
                Product Name
              </label>
              <input 
                value={productdetails.name} 
                onChange={changeHandler} 
                type="text" 
                name='name' 
                placeholder='Enter product name'
                className='w-full px-4 py-3 text-gray-700 transition-all duration-200 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100'
              />
            </div>

            {/* Prices */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <label className='flex items-center gap-2 mb-2 text-sm font-bold text-gray-700'>
                  <DollarSign className='w-4 h-4' />
                  Original Price
                </label>
                <input 
                  value={productdetails.old_price} 
                  onChange={changeHandler} 
                  type="number" 
                  name='old_price' 
                  placeholder='$0.00'
                  className='w-full px-4 py-3 text-gray-700 transition-all duration-200 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100'
                />
              </div>

              <div>
                <label className='flex items-center gap-2 mb-2 text-sm font-bold text-gray-700'>
                  <DollarSign className='w-4 h-4 text-green-600' />
                  Sale Price
                </label>
                <input 
                  value={productdetails.new_price} 
                  onChange={changeHandler} 
                  type="number" 
                  name='new_price' 
                  placeholder='$0.00'
                  className='w-full px-4 py-3 text-gray-700 transition-all duration-200 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100'
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Product Category
              </label>
              <select 
                value={productdetails.category} 
                onChange={changeHandler} 
                name="category"
                className='w-full px-4 py-3 text-gray-700 transition-all duration-200 border-2 border-gray-200 cursor-pointer rounded-xl focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100'
              >
                <option value="mens">Men's Fashion</option>
                <option value="womens">Women's Fashion</option>
                <option value="kids">Kids Fashion</option>
              </select>
            </div>

            {/* Price Preview */}
            {productdetails.old_price && productdetails.new_price && (
              <div className='p-4 border-2 border-indigo-100 rounded-xl bg-indigo-50'>
                <p className='mb-2 text-sm font-semibold text-gray-600'>Discount Preview</p>
                <div className='flex items-center gap-4'>
                  <span className='text-2xl font-bold text-gray-400 line-through'>${productdetails.old_price}</span>
                  <span className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
                    ${productdetails.new_price}
                  </span>
                  <span className='px-3 py-1 text-sm font-bold text-green-700 bg-green-100 rounded-full'>
                    {Math.round(((productdetails.old_price - productdetails.new_price) / productdetails.old_price) * 100)}% OFF
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button 
              onClick={() => { add_Product() }}
              disabled={loading || !image || !productdetails.name || !productdetails.old_price || !productdetails.new_price}
              className='w-full py-4 text-lg font-bold text-white transition-all duration-300 transform rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-2xl hover:shadow-indigo-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
            >
              {loading ? (
                <span className='flex items-center justify-center gap-2'>
                  <div className='w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin'></div>
                  Adding Product...
                </span>
              ) : (
                'Add Product to Store'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
