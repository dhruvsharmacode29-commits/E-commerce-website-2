// import { User, Package, ShoppingCart, BarChart3 } from 'lucide-react'
// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// const Sidebar = () => {
//   const location = useLocation();
  
//   const menuItems = [
//     { path: '/addproduct', icon: ShoppingCart, label: 'Add Product', color: 'indigo' },
//     { path: '/productlist', icon: Package, label: 'Product List', color: 'purple' },
//     { path: '/userdetails', icon: User, label: 'Users List', color: 'pink' },
//     { path: '/admindashboard', icon: User, label: 'Admin Dashboard', color: 'pink' },
//     { path: '/admin/blogs', icon: User, label: 'Blog Section', color: 'pink' },
//   ];

//   return (
//     <aside className='sticky top-0 h-screen p-6 space-y-6 bg-white border-r border-gray-200 shadow-sm w-72'>
//       {/* Stats Card */}
//       <div className='p-4 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50'>
//         <div className="flex items-center gap-3 mb-3">
//           <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
//             <BarChart3 className='w-5 h-5 text-white' />
//           </div>
//           <div>
//             <p className='text-xs font-semibold text-gray-600'>Total Sales</p>
//             <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
//               $24,580
//             </p>
//           </div>
//         </div>
//         <div className='flex items-center gap-2 text-xs'>
//           <span className='px-2 py-1 text-green-700 rounded-full bg-green-50'>↑ 12%</span>
//           <span className='text-gray-500'>vs last month</span>
//         </div>
//       </div>

//       {/* Menu Items */}
//       <nav className='space-y-2'>
//         <p className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Menu</p>
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = location.pathname === item.path;
//   return (
//    <Link key={item.path} to={item.path}>
//               <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
//                 isActive 
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}>
//                 <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                   isActive 
//                     ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                     : 'bg-gray-100'
//                 }`}>
//                   <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
//                 </div>
//                 <span className={`font-semibold ${
//                   isActive 
//                     ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                     : 'text-gray-700'
//                 }`}>
//                   {item.label}
//                 </span>
//               </div>
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Quick Actions */}
//       <div className='p-4 border-2 border-gray-200 rounded-xl'>
//         <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Quick Actions</p>
//         <div className='space-y-2'>
//           <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
//             📊 View Analytics
//           </button>
//           <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
//             ⚙️ Settings
//           </button>
//           <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
//             🚪 Logout
//           </button>
//         </div>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar





import { User, Package, ShoppingCart, BarChart3, FileText } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/addproduct', icon: ShoppingCart, label: 'Add Product', color: 'indigo' },
    { path: '/productlist', icon: Package, label: 'Product List', color: 'purple' },
    { path: '/userdetails', icon: User, label: 'Users List', color: 'pink' },
    { path: '/admindashboard', icon: BarChart3, label: 'Admin Dashboard', color: 'blue' },
    { path: '/blogs', icon: FileText, label: 'Blog Section', color: 'green' }, // FIXED: Removed /admin
  ];

  return (
    <aside className='sticky top-0 h-screen p-6 space-y-6 bg-white border-r border-gray-200 shadow-sm w-72'>
      {/* Stats Card */}
      <div className='p-4 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50'>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
            <BarChart3 className='w-5 h-5 text-white' />
          </div>
          <div>
            <p className='text-xs font-semibold text-gray-600'>Total Sales</p>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
              $24,580
            </p>
          </div>
        </div>
        <div className='flex items-center gap-2 text-xs'>
          <span className='px-2 py-1 text-green-700 rounded-full bg-green-50'>↑ 12%</span>
          <span className='text-gray-500'>vs last month</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className='space-y-2'>
        <p className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Menu</p>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path}>
              <div className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                  isActive 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                    : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <span className={`font-semibold ${
                  isActive 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                    : 'text-gray-700'
                }`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className='p-4 border-2 border-gray-200 rounded-xl'>
        <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Quick Actions</p>
        <div className='space-y-2'>
          <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
            📊 View Analytics
          </button>
          <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
            ⚙️ Settings
          </button>
          <button className='w-full px-4 py-2 text-sm font-semibold text-left text-gray-700 transition-colors rounded-lg hover:bg-gray-100'>
            🚪 Logout
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

