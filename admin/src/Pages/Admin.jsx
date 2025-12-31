// import React from 'react'
// import Sidebar from '../Components/Sidebar/Sidebar'
// import { Route, Routes } from 'react-router-dom'
// import ProductList from '../Components/ProductList/ProductList'
// import UserDetails from '../Components/UserDetails/UserDetails'
// import AddProduct from '../Components/AddProduct/AddProduct'
// import BlogManagement from '../Components/BlogManagement/BlogManagement'  // New Import
// const Admin = () => {
//   return (
//   <div className='flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
//       <Sidebar />
//       <div className='flex-1 overflow-auto'>
//         <Routes>
//           <Route path='/addproduct' element={<AddProduct/>} />
//           <Route path='/productlist' element={<ProductList/>} />
//           <Route path='/userdetails' element={<UserDetails/>} />
//           <Route path='/blogs' element={<BlogManagement/>} />  {/* New Route */}

//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default Admin





import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../Components/ProductList/ProductList'
import UserDetails from '../Components/UserDetails/UserDetails'
import AddProduct from '../Components/AddProduct/AddProduct'
import BlogManagement from '../Components/BlogManagement/BlogManagement'

const Admin = () => {
  return (
    <div className='flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <Sidebar />
      <div className='flex-1 overflow-auto'>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/productlist' element={<ProductList/>} />
          <Route path='/userdetails' element={<UserDetails/>} />
          {/* FIXED: Remove /admin prefix since we're already in admin route */}
          <Route path='/blogs' element={<BlogManagement/>} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin




