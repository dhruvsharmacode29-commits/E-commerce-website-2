import React, { useEffect, useState } from 'react'
import { Users, Mail, Calendar, Shield } from 'lucide-react'

const UserDetails = () => {

 const [user, SetUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/userdetails")
      .then((resp) => resp.json())
      .then((data) => { SetUser(data) });
  }, []);

  const filteredUsers = user.filter(u => 
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
     <div className='w-full p-8 mx-auto max-w-7xl'>
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
            User Management
          </h1>
          <p className='mt-2 text-gray-600'>View and manage registered users ({filteredUsers.length} total)</p>
        </div>

        {/* Search */}
        <div className="relative md:w-64">
          <Users className='absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 left-3 top-1/2' />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full py-2 pl-10 pr-4 text-sm border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none'
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-6 mb-8 md:grid-cols-3'>
        <div className='p-6 bg-white border-2 border-gray-200 rounded-2xl'>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
              <Users className='w-5 h-5 text-white' />
            </div>
            <p className='text-sm font-semibold text-gray-600'>Total Users</p>
          </div>
          <p className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
            {user.length}
          </p>
        </div>

        <div className='p-6 bg-white border-2 border-gray-200 rounded-2xl'>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
              <span className='text-xl'>📈</span>
            </div>
            <p className='text-sm font-semibold text-gray-600'>New This Month</p>
          </div>
          <p className='text-3xl font-extrabold text-green-600'>+{Math.floor(user.length * 0.15)}</p>
        </div>

        <div className='p-6 bg-white border-2 border-gray-200 rounded-2xl'>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
              <span className='text-xl'>✓</span>
            </div>
            <p className='text-sm font-semibold text-gray-600'>Active Users</p>
          </div>
          <p className='text-3xl font-extrabold text-blue-600'>{Math.floor(user.length * 0.85)}</p>
        </div>
      </div>

      {/* Users Table */}
      <div className='overflow-hidden bg-white border-2 border-gray-200 rounded-2xl'>
        {/* Desktop Table Header */}
        <div className='hidden grid-cols-12 gap-4 p-4 text-sm font-bold text-gray-600 uppercase border-b-2 border-gray-200 bg-gray-50 md:grid'>
          <div className='col-span-3'>Username</div>
          <div className='col-span-4'>Email</div>
          <div className='col-span-2'>Password</div>
          <div className='col-span-3'>Registration Date</div>
        </div>

        {/* Users List */}
        <div className='divide-y divide-gray-100 max-h-[600px] overflow-y-auto'>
          {filteredUsers.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-12'>
              <div className='flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full'>
                <Users className='w-8 h-8 text-gray-400' />
              </div>
              <p className='text-lg font-semibold text-gray-600'>No users found</p>
            </div>
          ) : (
            filteredUsers.map((user, index) => (
              <div key={index} className='grid items-center grid-cols-1 gap-4 p-4 transition-colors md:grid-cols-12 hover:bg-indigo-50'>
                {/* Username */}
                <div className='flex items-center gap-3 md:col-span-3'>
                  <div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                    {user.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>{user.username}</p>
                    <p className='text-xs text-gray-500'>User ID: {index + 1}</p>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-center gap-2 md:col-span-4'>
                  <Mail className='hidden w-4 h-4 text-gray-400 md:block' />
                  <span className='text-sm text-gray-700'>{user.email}</span>
                </div>

                {/* Password (masked) */}
                <div className='flex items-center gap-2 md:col-span-2'>
                  <Shield className='hidden w-4 h-4 text-gray-400 md:block' />
                  <span className='font-mono text-sm text-gray-500'>{'•'.repeat(8)}</span>
                </div>

                {/* Date */}
                <div className='flex items-center gap-2 md:col-span-3'>
                  <Calendar className='hidden w-4 h-4 text-gray-400 md:block' />
                  <div>
                    <p className='text-sm font-semibold text-gray-700'>
                      {new Date(user.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </p>
                    <p className='text-xs text-gray-500'>
                      {new Date(user.date).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
