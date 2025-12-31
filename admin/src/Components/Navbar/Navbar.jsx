// import React from 'react'
// import logo from '../../assets/nav-logo.svg'
// import nav_profile from '../../assets/nav-profile.svg'
// const Navbar = () => {
//   return (
//     <nav className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm'>
//       <div className="flex items-center justify-between px-8 py-4">
//         {/* Logo & Title */}
//         <div className="flex items-center gap-4">
//           <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
//             <img src={logo} alt="logo" className='w-7 h-7 brightness-0 invert' />
//           </div>
//           <div>
//             <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
//               Admin Panel
//             </h1>
//             <p className='text-sm text-gray-500'>Manage your store</p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-6">
//           {/* Notifications */}
//           <button className="relative p-2 transition-colors rounded-lg hover:bg-gray-100">
//             <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//             <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1 animate-pulse"></span>
//           </button>

//           {/* Profile */}
//           <div className="flex items-center gap-3 px-4 py-2 transition-all duration-200 border-2 border-gray-200 rounded-full cursor-pointer hover:border-indigo-500 hover:shadow-md">
//             <img src={nav_profile} alt="profile" className='w-8 h-8 rounded-full' />
//             <div className="hidden md:block">
//               <p className='text-sm font-semibold text-gray-700'>Admin User</p>
//               <p className='text-xs text-gray-500'>admin@shopper.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar









// import React from 'react'

// const Navbar = ({ onLogout }) => {
//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-lg">
//       <div className="px-6 mx-auto max-w-7xl">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo & Brand */}
//           <div className="flex items-center gap-3">
//             <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
//               <p className="text-xs text-gray-500">E-Commerce Management</p>
//             </div>
//           </div>

//           {/* Navigation Items */}
//           <div className="flex items-center gap-4">
//             {/* Notifications */}
//             <button className="relative p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-900">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//               <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1">
//                 3
//               </span>
//             </button>

//             {/* User Menu */}
//             <div className="flex items-center gap-3 pl-4 border-l-2 border-gray-200">
//               <div className="text-right">
//                 <p className="text-sm font-semibold text-gray-900">Admin User</p>
//                 <p className="text-xs text-gray-500">Administrator</p>
//               </div>
//               <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
//                 A
//               </div>
//             </div>

//             {/* Logout Button */}
//             <button
//               onClick={onLogout}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:scale-105"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//               </svg>
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar





// import React from 'react'

// const Navbar = ({ onLogout }) => {
//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-lg">
//       <div className="max-w-full px-6 mx-auto">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center gap-3">
//             <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
//               <p className="text-xs text-gray-500">E-Commerce Management</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button className="relative p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-900">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//               </svg>
//               <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1">
//                 3
//               </span>
//             </button>

//             <div className="flex items-center gap-3 pl-4 border-l-2 border-gray-200">
//               <div className="text-right">
//                 <p className="text-sm font-semibold text-gray-900">Admin User</p>
//                 <p className="text-xs text-gray-500">Administrator</p>
//               </div>
//               <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
//                 A
//               </div>
//             </div>

//             <button
//               onClick={onLogout}
//               className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:scale-105"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//               </svg>
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar




import React from 'react'

const Navbar = ({ onLogout }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-6 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-xs text-gray-500">E-Commerce Management</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l-2 border-gray-200">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
                A
              </div>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;