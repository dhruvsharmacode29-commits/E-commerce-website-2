// import React, { useState, useEffect } from 'react'

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/admin/orders', {
//         method: 'GET',
//         headers: {
//           'admin-token': localStorage.getItem('admin-token'),
//         },
//       });

//       const data = await response.json();
//       if (data) {
//         setOrders(data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch orders:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateOrderStatus = async (orderId, newStatus) => {
//     try {
//       const response = await fetch('http://localhost:4000/admin/updateorder', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'admin-token': localStorage.getItem('admin-token'),
//         },
//         body: JSON.stringify({ orderId, status: newStatus }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         fetchOrders();
//       }
//     } catch (error) {
//       console.error('Failed to update order:', error);
//     }
//   };

//   // Group orders by user
//   const groupedOrders = orders.reduce((acc, order) => {
//     if (!acc[order.userEmail]) {
//       acc[order.userEmail] = {
//         username: order.username,
//         email: order.userEmail,
//         orders: []
//       };
//     }
//     acc[order.userEmail].orders.push(order);
//     return acc;
//   }, {});

//   // Filter orders
//   const filteredOrders = Object.values(groupedOrders).filter(user => {
//     const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
//     if (filterStatus === 'All') return matchesSearch;
    
//     const hasMatchingStatus = user.orders.some(order => order.status === filterStatus);
//     return matchesSearch && hasMatchingStatus;
//   });

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
//       case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'Shipped': return 'bg-purple-100 text-purple-800 border-purple-200';
//       case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
//       case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
//       default: return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   const getStatusIcon = (status) => {
//     switch(status) {
//       case 'Pending':
//         return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>;
//       case 'Processing':
//         return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>;
//       case 'Shipped':
//         return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/></svg>;
//       case 'Delivered':
//         return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
//       case 'Cancelled':
//         return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>;
//       default:
//         return null;
//     }
//   };

//   const getTotalStats = () => {
//     return {
//       total: orders.length,
//       pending: orders.filter(o => o.status === 'Pending').length,
//       processing: orders.filter(o => o.status === 'Processing').length,
//       shipped: orders.filter(o => o.status === 'Shipped').length,
//       delivered: orders.filter(o => o.status === 'Delivered').length,
//       revenue: orders.reduce((sum, o) => sum + o.totalAmount, 0)
//     };
//   };

//   const stats = getTotalStats();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <svg className="w-16 h-16 mx-auto mb-4 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//           </svg>
//           <p className="text-gray-600">Loading orders...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="mb-2 text-3xl font-bold text-gray-900">Order Management</h1>
//           <p className="text-gray-600">Manage and track all customer orders</p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Total Orders</span>
//               <div className="p-2 bg-indigo-100 rounded-lg">
//                 <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
//           </div>

//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Pending</span>
//               <div className="p-2 bg-yellow-100 rounded-lg">
//                 <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
//           </div>

//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Processing</span>
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stats.processing}</p>
//           </div>

//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Shipped</span>
//               <div className="p-2 bg-purple-100 rounded-lg">
//                 <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stats.shipped}</p>
//           </div>

//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Delivered</span>
//               <div className="p-2 bg-green-100 rounded-lg">
//                 <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">{stats.delivered}</p>
//           </div>

//           <div className="p-4 bg-white shadow-lg rounded-xl">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-gray-600">Revenue</span>
//               <div className="p-2 rounded-lg bg-emerald-100">
//                 <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>
//               </div>
//             </div>
//             <p className="text-2xl font-bold text-gray-900">${stats.revenue.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col gap-4 p-6 mb-6 bg-white shadow-lg sm:flex-row sm:items-center sm:justify-between rounded-xl">
//           <div className="flex-1">
//             <input
//               type="text"
//               placeholder="Search by customer name or email..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
//             />
//           </div>
//           <div className="flex gap-2 overflow-x-auto">
//             {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setFilterStatus(status)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
//                   filterStatus === status
//                     ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Orders List */}
//         {filteredOrders.length === 0 ? (
//           <div className="p-12 text-center bg-white shadow-lg rounded-xl">
//             <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//             </svg>
//             <h3 className="mb-2 text-xl font-semibold text-gray-700">No Orders Found</h3>
//             <p className="text-gray-500">There are no orders matching your filters</p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {filteredOrders.map((userGroup) => (
//               <div key={userGroup.email} className="overflow-hidden bg-white shadow-lg rounded-xl">
//                 {/* User Header */}
//                 <div 
//                   className="p-4 transition-colors cursor-pointer bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100"
//                   onClick={() => setSelectedUser(selectedUser === userGroup.email ? null : userGroup.email)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
//                         {userGroup.username.charAt(0).toUpperCase()}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-gray-900">{userGroup.username}</h3>
//                         <p className="text-sm text-gray-600">{userGroup.email}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="text-right">
//                         <p className="text-sm font-medium text-gray-600">Total Orders</p>
//                         <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                           {userGroup.orders.length}
//                         </p>
//                       </div>
//                       <svg 
//                         className={`w-6 h-6 text-gray-600 transition-transform ${selectedUser === userGroup.email ? 'rotate-180' : ''}`}
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Orders */}
//                 {selectedUser === userGroup.email && (
//                   <div className="p-4 space-y-4 bg-gray-50">
//                     {userGroup.orders.map((order) => (
//                       <div key={order._id} className="p-4 bg-white border-2 border-gray-100 shadow-sm rounded-xl hover:border-indigo-200">
//                         {/* Order Header */}
//                         <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-gray-200">
//                           <div>
//                             <p className="text-xs font-medium text-gray-500">Order ID</p>
//                             <p className="font-mono text-sm font-bold text-gray-900">{order._id.slice(-8)}</p>
//                           </div>
//                           <div>
//                             <p className="text-xs font-medium text-gray-500">Order Date</p>
//                             <p className="text-sm font-semibold text-gray-900">
//                               {new Date(order.orderDate).toLocaleDateString('en-US', {
//                                 year: 'numeric',
//                                 month: 'short',
//                                 day: 'numeric',
//                                 hour: '2-digit',
//                                 minute: '2-digit'
//                               })}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="text-xs font-medium text-gray-500">Total Amount</p>
//                             <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
//                               ${order.totalAmount.toFixed(2)}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="mb-2 text-xs font-medium text-gray-500">Status</p>
//                             <select
//                               value={order.status}
//                               onChange={(e) => updateOrderStatus(order._id, e.target.value)}
//                               className={`px-3 py-1.5 text-sm font-semibold rounded-lg border-2 cursor-pointer ${getStatusColor(order.status)} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
//                             >
//                               <option value="Pending">Pending</option>
//                               <option value="Processing">Processing</option>
//                               <option value="Shipped">Shipped</option>
//                               <option value="Delivered">Delivered</option>
//                               <option value="Cancelled">Cancelled</option>
//                             </select>
//                           </div>
//                         </div>

//                         {/* Products */}
//                         <div className="space-y-3">
//                           <h4 className="text-sm font-semibold text-gray-700">Order Items</h4>
//                           {order.products.map((product, idx) => (
//                             <div key={idx} className="flex items-center gap-4 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100">
//                               <img 
//                                 src={product.image} 
//                                 alt={product.name} 
//                                 className="object-cover w-16 h-16 rounded-lg shadow-sm"
//                               />
//                               <div className="flex-1">
//                                 <h5 className="font-semibold text-gray-900">{product.name}</h5>
//                                 <p className="text-sm text-gray-500 capitalize">{product.category}</p>
//                               </div>
//                               <div className="text-right">
//                                 <p className="text-sm font-medium text-gray-600">Qty: {product.quantity}</p>
//                                 <p className="text-lg font-bold text-gray-900">${product.price}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard





import React, { useState, useEffect } from 'react'

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:4000/admin/orders', {
        method: 'GET',
        headers: {
          'admin-token': localStorage.getItem('admin-token'),
        },
      });

      const data = await response.json();
      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await fetch('http://localhost:4000/admin/updateorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'admin-token': localStorage.getItem('admin-token'),
        },
        body: JSON.stringify({ orderId, status: newStatus }),
      });

      const data = await response.json();
      if (data.success) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Failed to update order:', error);
    }
  };

  // Group orders by user with null checks
  const groupedOrders = orders.reduce((acc, order) => {
    if (order && order.userEmail) {
      if (!acc[order.userEmail]) {
        acc[order.userEmail] = {
          username: order.username || 'Unknown User',
          email: order.userEmail,
          orders: []
        };
      }
      acc[order.userEmail].orders.push(order);
    }
    return acc;
  }, {});

  // Filter orders with null checks
  const filteredOrders = Object.values(groupedOrders).filter(user => {
    if (!user || !user.username || !user.email) return false;
    
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'All') return matchesSearch;
    
    const hasMatchingStatus = user.orders.some(order => order && order.status === filterStatus);
    return matchesSearch && hasMatchingStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Shipped': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTotalStats = () => {
    return {
      total: orders.length,
      pending: orders.filter(o => o && o.status === 'Pending').length,
      processing: orders.filter(o => o && o.status === 'Processing').length,
      shipped: orders.filter(o => o && o.status === 'Shipped').length,
      delivered: orders.filter(o => o && o.status === 'Delivered').length,
      revenue: orders.reduce((sum, o) => sum + (o && o.totalAmount ? o.totalAmount : 0), 0)
    };
  };

  const stats = getTotalStats();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-600">Manage and track all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Total Orders</span>
              <div className="p-2 bg-indigo-100 rounded-lg">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Pending</span>
              <div className="p-2 bg-yellow-100 rounded-lg">
                <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Processing</span>
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.processing}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Shipped</span>
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.shipped}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Delivered</span>
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stats.delivered}</p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Revenue</span>
              <div className="p-2 rounded-lg bg-emerald-100">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/></svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">${stats.revenue.toFixed(2)}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 p-6 mb-6 bg-white shadow-lg sm:flex-row sm:items-center sm:justify-between rounded-xl">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by customer name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  filterStatus === status
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="p-12 text-center bg-white shadow-lg rounded-xl">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mb-2 text-xl font-semibold text-gray-700">No Orders Found</h3>
            <p className="text-gray-500">
              {orders.length === 0 
                ? 'No orders have been placed yet. Orders will appear here once customers make purchases.'
                : 'There are no orders matching your filters'}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((userGroup) => (
              <div key={userGroup.email} className="overflow-hidden bg-white shadow-lg rounded-xl">
                <div 
                  className="p-4 transition-colors cursor-pointer bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100"
                  onClick={() => setSelectedUser(selectedUser === userGroup.email ? null : userGroup.email)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-gradient-to-br from-indigo-600 to-purple-600">
                        {userGroup.username.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{userGroup.username}</h3>
                        <p className="text-sm text-gray-600">{userGroup.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-600">Total Orders</p>
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          {userGroup.orders.length}
                        </p>
                      </div>
                      <svg 
                        className={`w-6 h-6 text-gray-600 transition-transform ${selectedUser === userGroup.email ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {selectedUser === userGroup.email && (
                  <div className="p-4 space-y-4 bg-gray-50">
                    {userGroup.orders.map((order) => (
                      <div key={order._id} className="p-4 bg-white border-2 border-gray-100 shadow-sm rounded-xl hover:border-indigo-200">
                        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-gray-200">
                          <div>
                            <p className="text-xs font-medium text-gray-500">Order ID</p>
                            <p className="font-mono text-sm font-bold text-gray-900">{order._id.slice(-8)}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500">Order Date</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {new Date(order.orderDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500">Total Amount</p>
                            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                              ${order.totalAmount.toFixed(2)}
                            </p>
                          </div>
                          <div>
                            <p className="mb-2 text-xs font-medium text-gray-500">Status</p>
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                              className={`px-3 py-1.5 text-sm font-semibold rounded-lg border-2 cursor-pointer ${getStatusColor(order.status)} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-700">Order Items</h4>
                          {order.products && order.products.map((product, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="object-cover w-16 h-16 rounded-lg shadow-sm"
                              />
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900">{product.name}</h5>
                                <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium text-gray-600">Qty: {product.quantity}</p>
                                <p className="text-lg font-bold text-gray-900">${product.price}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard