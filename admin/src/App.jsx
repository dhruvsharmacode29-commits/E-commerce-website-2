// import React from 'react'
// import Admin from './Pages/Admin'
// import Navbar from './Components/Navbar/Navbar'

// const App = () => {
//   return (
//     <div>
//      <Navbar/> 
//       <Admin/>
//     </div>
//   )
// }

// export default App


// import React, { useState, useEffect } from 'react'
// import AdminLogin from './Pages/AdminLogin'
// import AdminDashboard from './Pages/AdminDashboard'
// import Navbar from './Components/Navbar/Navbar'

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentView, setCurrentView] = useState('dashboard');

//   useEffect(() => {
//     const token = localStorage.getItem('admin-token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('admin-token');
//     setIsLoggedIn(false);
//   };

//   if (!isLoggedIn) {
//     return <AdminLogin onLogin={handleLogin} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar onLogout={handleLogout} currentView={currentView} setCurrentView={setCurrentView} />
      
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className='sticky top-0 h-screen p-6 space-y-6 bg-white border-r border-gray-200 shadow-sm w-72'>
//           <div className='p-4 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50'>
//             <div className="flex items-center gap-3 mb-3">
//               <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className='text-xs font-semibold text-gray-600'>Admin Panel</p>
//                 <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
//                   Dashboard
//                 </p>
//               </div>
//             </div>
//           </div>

//           <nav className='space-y-2'>
//             <p className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Menu</p>
            
//             <button 
//               onClick={() => setCurrentView('dashboard')}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 currentView === 'dashboard'
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}
//             >
//               <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                 currentView === 'dashboard'
//                   ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                   : 'bg-gray-100'
//               }`}>
//                 <svg className={`w-5 h-5 ${currentView === 'dashboard' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
//                 </svg>
//               </div>
//               <span className={`font-semibold ${
//                 currentView === 'dashboard'
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                   : 'text-gray-700'
//               }`}>
//                 Orders Dashboard
//               </span>
//             </button>
//           </nav>

//           <div className='p-4 border-2 border-gray-200 rounded-xl'>
//             <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Quick Info</p>
//             <div className='space-y-2 text-sm text-gray-600'>
//               <p>👤 Logged in as: <span className="font-bold">Admin</span></p>
//               <p>📅 {new Date().toLocaleDateString()}</p>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1 overflow-auto">
//           {currentView === 'dashboard' && <AdminDashboard />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react'
// import AdminLogin from './Pages/AdminLogin';
// import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
// import Navbar from './Components/Navbar/Navbar';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('admin-token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('admin-token');
//     setIsLoggedIn(false);
//   };

//   if (!isLoggedIn) {
//     return <AdminLogin onLogin={handleLogin} />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar onLogout={handleLogout} />
//       <AdminDashboard />
//     </div>
//   );
// }

// export default App;





// import React, { useState, useEffect } from 'react'
// import AdminLogin from './Pages/AdminLogin';
// import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
// import AddProduct from './Components/AddProduct/AddProduct';
// import ProductList from './Components/ProductList/ProductList';
// import UserDetails from './Components/UserDetails/UserDetails';
// import Navbar from './Components/Navbar/Navbar'



// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('dashboard');

//   useEffect(() => {
//     const token = localStorage.getItem('admin-token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('admin-token');
//     setIsLoggedIn(false);
//     setCurrentPage('dashboard');
//   };

//   if (!isLoggedIn) {
//     return <AdminLogin onLogin={handleLogin} />;
//   }

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'dashboard':
//         return <AdminDashboard />;
//       case 'addproduct':
//         return <AddProduct />;
//       case 'productlist':
//         return <ProductList />;
//       case 'userdetails':
//         return <UserDetails />;
//       default:
//         return <AdminDashboard />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar onLogout={handleLogout} />
      
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className='sticky top-0 h-screen p-6 space-y-6 bg-white border-r border-gray-200 shadow-sm w-72'>
//           <div className='p-4 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50'>
//             <div className="flex items-center gap-3 mb-3">
//               <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
//                 <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//                 </svg>
//               </div>
//               <div>
//                 <p className='text-xs font-semibold text-gray-600'>Admin Panel</p>
//                 <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
//                   Dashboard
//                 </p>
//               </div>
//             </div>
//           </div>

//           <nav className='space-y-2'>
//             <p className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Menu</p>
            
//             <button 
//               onClick={() => setCurrentPage('dashboard')}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 currentPage === 'dashboard'
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}
//             >
//               <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                 currentPage === 'dashboard'
//                   ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                   : 'bg-gray-100'
//               }`}>
//                 <svg className={`w-5 h-5 ${currentPage === 'dashboard' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
//                 </svg>
//               </div>
//               <span className={`font-semibold ${
//                 currentPage === 'dashboard'
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                   : 'text-gray-700'
//               }`}>
//                 Orders Dashboard
//               </span>
//             </button>

//             <button 
//               onClick={() => setCurrentPage('addproduct')}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 currentPage === 'addproduct'
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}
//             >
//               <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                 currentPage === 'addproduct'
//                   ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                   : 'bg-gray-100'
//               }`}>
//                 <svg className={`w-5 h-5 ${currentPage === 'addproduct' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                 </svg>
//               </div>
//               <span className={`font-semibold ${
//                 currentPage === 'addproduct'
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                   : 'text-gray-700'
//               }`}>
//                 Add Product
//               </span>
//             </button>

//             <button 
//               onClick={() => setCurrentPage('productlist')}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 currentPage === 'productlist'
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}
//             >
//               <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                 currentPage === 'productlist'
//                   ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                   : 'bg-gray-100'
//               }`}>
//                 <svg className={`w-5 h-5 ${currentPage === 'productlist' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <span className={`font-semibold ${
//                 currentPage === 'productlist'
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                   : 'text-gray-700'
//               }`}>
//                 Product List
//               </span>
//             </button>

//             <button 
//               onClick={() => setCurrentPage('userdetails')}
//               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                 currentPage === 'userdetails'
//                   ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
//                   : 'hover:bg-gray-50 border-2 border-transparent'
//               }`}
//             >
//               <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
//                 currentPage === 'userdetails'
//                   ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
//                   : 'bg-gray-100'
//               }`}>
//                 <svg className={`w-5 h-5 ${currentPage === 'userdetails' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//                 </svg>
//               </div>
//               <span className={`font-semibold ${
//                 currentPage === 'userdetails'
//                   ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
//                   : 'text-gray-700'
//               }`}>
//                 Users List
//               </span>
//             </button>
//           </nav>

//           <div className='p-4 border-2 border-gray-200 rounded-xl'>
//             <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Quick Info</p>
//             <div className='space-y-2 text-sm text-gray-600'>
//               <p>👤 Logged in as: <span className="font-bold">Admin</span></p>
//               <p>📅 {new Date().toLocaleDateString()}</p>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1 overflow-auto">
//           {renderPage()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;








import React, { useState, useEffect } from 'react'
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import AddProduct from './Components/AddProduct/AddProduct';
import ProductList from './Components/ProductList/ProductList';
import UserDetails from './Components/UserDetails/UserDetails';
import BlogManagement from './Components/BlogManagement/BlogManagement'; // NEW IMPORT
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'addproduct':
        return <AddProduct />;
      case 'productlist':
        return <ProductList />;
      case 'userdetails':
        return <UserDetails />;
      case 'blogs':  // NEW CASE
        return <BlogManagement />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={handleLogout} />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className='sticky top-0 h-screen p-6 space-y-6 bg-white border-r border-gray-200 shadow-sm w-72'>
          <div className='p-4 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50'>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <p className='text-xs font-semibold text-gray-600'>Admin Panel</p>
                <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
                  Dashboard
                </p>
              </div>
            </div>
          </div>

          <nav className='space-y-2'>
            <p className='px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Menu</p>
            
            {/* Dashboard */}
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentPage === 'dashboard'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === 'dashboard'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <svg className={`w-5 h-5 ${currentPage === 'dashboard' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className={`font-semibold ${
                currentPage === 'dashboard'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'text-gray-700'
              }`}>
                Orders Dashboard
              </span>
            </button>

            {/* Add Product */}
            <button 
              onClick={() => setCurrentPage('addproduct')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentPage === 'addproduct'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === 'addproduct'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <svg className={`w-5 h-5 ${currentPage === 'addproduct' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className={`font-semibold ${
                currentPage === 'addproduct'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'text-gray-700'
              }`}>
                Add Product
              </span>
            </button>

            {/* Product List */}
            <button 
              onClick={() => setCurrentPage('productlist')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentPage === 'productlist'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === 'productlist'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <svg className={`w-5 h-5 ${currentPage === 'productlist' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className={`font-semibold ${
                currentPage === 'productlist'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'text-gray-700'
              }`}>
                Product List
              </span>
            </button>

            {/* User Details */}
            <button 
              onClick={() => setCurrentPage('userdetails')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentPage === 'userdetails'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === 'userdetails'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <svg className={`w-5 h-5 ${currentPage === 'userdetails' ? 'text-white' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <span className={`font-semibold ${
                currentPage === 'userdetails'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'text-gray-700'
              }`}>
                Users List
              </span>
            </button>

            {/* BLOG SECTION - NEW */}
            <button 
              onClick={() => setCurrentPage('blogs')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                currentPage === 'blogs'
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-md' 
                  : 'hover:bg-gray-50 border-2 border-transparent'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                currentPage === 'blogs'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600' 
                  : 'bg-gray-100'
              }`}>
                <svg className={`w-5 h-5 ${currentPage === 'blogs' ? 'text-white' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className={`font-semibold ${
                currentPage === 'blogs'
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'text-gray-700'
              }`}>
                Blog Section
              </span>
            </button>
          </nav>

          <div className='p-4 border-2 border-gray-200 rounded-xl'>
            <p className='mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase'>Quick Info</p>
            <div className='space-y-2 text-sm text-gray-600'>
              <p>👤 Logged in as: <span className="font-bold">Admin</span></p>
              <p>📅 {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;