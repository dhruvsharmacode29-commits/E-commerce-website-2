// import React, { useState } from 'react'

// const AdminLogin = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:4000/admin/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem('admin-token', data.token);
//         onLogin();
//       } else {
//         setError(data.error || 'Invalid credentials');
//       }
//     } catch (err) {
//       setError('Failed to connect to server');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
//       <div className="w-full max-w-md p-8 m-4 bg-white shadow-2xl rounded-3xl">
//         {/* Logo/Header */}
//         <div className="mb-8 text-center">
//           <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
//             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//           </div>
//           <h1 className="mb-2 text-3xl font-bold text-gray-900">Admin Portal</h1>
//           <p className="text-gray-600">Sign in to manage your e-commerce store</p>
//         </div>

//         {/* Login Inputs */}
//         <div className="space-y-6">
//           {/* Error Message */}
//           {error && (
//             <div className="flex items-center gap-2 p-4 text-red-700 bg-red-100 border border-red-200 rounded-lg">
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <span className="text-sm font-medium">{error}</span>
//             </div>
//           )}

//           {/* Username Field */}
//           <div>
//             <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-700">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               onKeyPress={handleKeyPress}
//               className="w-full px-4 py-3 text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none"
//               placeholder="Enter your username"
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               onKeyPress={handleKeyPress}
//               className="w-full px-4 py-3 text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none"
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//           >
//             {loading ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </span>
//             ) : (
//               'Sign In'
//             )}
//           </button>
//         </div>

//         {/* Default Credentials Info */}
//         <div className="p-4 mt-6 border-2 border-indigo-100 rounded-lg bg-indigo-50">
//           <p className="mb-2 text-sm font-semibold text-indigo-900">Default Credentials:</p>
//           <div className="space-y-1 text-sm text-indigo-700">
//             <p>Username: <span className="font-mono font-bold">admin</span></p>
//             <p>Password: <span className="font-mono font-bold">admin123</span></p>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-6 text-center">
//           <p className="text-xs text-gray-500">
//             © 2024 E-Commerce Admin. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminLogin




import React, { useState } from 'react'

const AdminLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:4000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('admin-token', data.token);
        onLogin();
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="w-full max-w-md p-8 m-4 bg-white shadow-2xl rounded-3xl">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-600">Sign in to manage your e-commerce store</p>
        </div>

        <div className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 p-4 text-red-700 bg-red-100 border border-red-200 rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-semibold text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </div>

        <div className="p-4 mt-6 border-2 border-indigo-100 rounded-lg bg-indigo-50">
          <p className="mb-2 text-sm font-semibold text-indigo-900">Default Credentials:</p>
          <div className="space-y-1 text-sm text-indigo-700">
            <p>Username: <span className="font-mono font-bold">admin</span></p>
            <p>Password: <span className="font-mono font-bold">admin123</span></p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2024 E-Commerce Admin. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin