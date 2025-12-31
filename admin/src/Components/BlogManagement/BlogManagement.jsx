import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Image, Save, X } from 'lucide-react';

const API_URL = 'http://localhost:4000/api';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'General',
    tags: '',
    published: false,
    image: null
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('admin-token');
      const response = await fetch(`${API_URL}/admin/blogs`, {
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('excerpt', formData.excerpt);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('tags', formData.tags);
    formDataToSend.append('published', formData.published);
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const token = localStorage.getItem('admin-token');
      const url = editingBlog
        ? `${API_URL}/admin/blogs/${editingBlog._id}`
        : `${API_URL}/admin/blogs`;
      
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
      });

      if (response.ok) {
        fetchBlogs();
        resetForm();
        alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!');
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('admin-token');
      const response = await fetch(`${API_URL}/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchBlogs();
        alert('Blog deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt,
      category: blog.category,
      tags: blog.tags.join(', '),
      published: blog.published,
      image: null
    });
    setShowEditor(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'General',
      tags: '',
      published: false,
      image: null
    });
    setEditingBlog(null);
    setShowEditor(false);
  };

  return (
    <div className='p-8'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-800'>Blog Management</h1>
          <p className='mt-2 text-gray-600'>Create and manage your blog posts</p>
        </div>
        <button
          onClick={() => setShowEditor(!showEditor)}
          className='flex items-center gap-2 px-6 py-3 text-white transition-all rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg'
        >
          {showEditor ? <X className='w-5 h-5' /> : <Plus className='w-5 h-5' />}
          {showEditor ? 'Cancel' : 'Create New Blog'}
        </button>
      </div>

      {/* Editor Form */}
      {showEditor && (
        <div className='p-8 mb-8 bg-white border-2 border-indigo-100 shadow-xl rounded-2xl'>
          <h2 className='mb-6 text-2xl font-bold text-gray-800'>
            {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          
          <div className='space-y-6'>
            {/* Title */}
            <div>
              <label className='block mb-2 text-sm font-semibold text-gray-700'>
                Blog Title *
              </label>
              <input
                type='text'
                placeholder='Enter blog title'
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className='w-full px-4 py-3 transition-all border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none'
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className='block mb-2 text-sm font-semibold text-gray-700'>
                Content *
              </label>
              <textarea
                placeholder='Write your blog content here...'
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className='w-full px-4 py-3 transition-all border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none min-h-64'
                required
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className='block mb-2 text-sm font-semibold text-gray-700'>
                Excerpt (Short Description)
              </label>
              <textarea
                placeholder='Brief summary of your blog post'
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                className='w-full px-4 py-3 transition-all border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none'
                rows='3'
              />
            </div>

            {/* Category and Tags */}
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='block mb-2 text-sm font-semibold text-gray-700'>
                  Category
                </label>
                <input
                  type='text'
                  placeholder='e.g., Technology, Fashion'
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className='w-full px-4 py-3 transition-all border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none'
                />
              </div>

              <div>
                <label className='block mb-2 text-sm font-semibold text-gray-700'>
                  Tags (comma separated)
                </label>
                <input
                  type='text'
                  placeholder='e.g., tech, ai, innovation'
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  className='w-full px-4 py-3 transition-all border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 focus:outline-none'
                />
              </div>
            </div>

            {/* Image Upload and Publish */}
            <div className='flex items-center gap-6'>
              <div className='flex-1'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
                    className='hidden'
                    id='imageUpload'
                  />
                  <label 
                    htmlFor='imageUpload' 
                    className='flex items-center gap-2 px-4 py-3 transition-all bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200'
                  >
                    <Image className='w-5 h-5 text-gray-600' />
                    <span className='font-medium text-gray-700'>
                      {formData.image ? formData.image.name : 'Upload Featured Image'}
                    </span>
                  </label>
                </label>
              </div>

              <label className='flex items-center gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  checked={formData.published}
                  onChange={(e) => setFormData({...formData, published: e.target.checked})}
                  className='w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500'
                />
                <span className='font-medium text-gray-700'>Publish Now</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className='flex items-center justify-center w-full gap-2 py-4 font-bold text-white transition-all rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg'
            >
              <Save className='w-5 h-5' />
              {editingBlog ? 'Update Blog' : 'Create Blog'}
            </button>
          </div>
        </div>
      )}

      {/* Blog List */}
      <div className='space-y-4'>
        <h3 className='mb-4 text-xl font-bold text-gray-800'>All Blog Posts</h3>
        
        {loading ? (
          <div className='py-20 text-center'>
            <div className='inline-block w-12 h-12 border-b-2 border-indigo-600 rounded-full animate-spin'></div>
          </div>
        ) : blogs.length === 0 ? (
          <div className='p-12 text-center bg-white shadow-lg rounded-xl'>
            <p className='text-lg text-gray-500'>No blogs yet. Create your first blog post!</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div 
              key={blog._id} 
              className='p-6 transition-all bg-white border-2 border-transparent shadow-md rounded-xl hover:shadow-xl hover:border-indigo-100'
            >
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-xl font-bold text-gray-800'>{blog.title}</h3>
                    {blog.published ? (
                      <div className='flex items-center gap-1 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full'>
                        <Eye className='w-4 h-4' />
                        Published
                      </div>
                    ) : (
                      <div className='flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full'>
                        <EyeOff className='w-4 h-4' />
                        Draft
                      </div>
                    )}
                  </div>
                  
                  <p className='mb-3 text-gray-600'>{blog.excerpt}</p>
                  
                  <div className='flex items-center gap-4 text-sm text-gray-500'>
                    <span className='px-3 py-1 font-medium text-indigo-700 rounded-full bg-indigo-50'>
                      {blog.category}
                    </span>
                    <span>👁 {blog.views} views</span>
                    <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className='flex gap-2 ml-4'>
                  <button
                    onClick={() => handleEdit(blog)}
                    className='p-3 text-blue-600 transition-all rounded-lg bg-blue-50 hover:bg-blue-100'
                    title='Edit Blog'
                  >
                    <Edit className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className='p-3 text-red-600 transition-all rounded-lg bg-red-50 hover:bg-red-100'
                    title='Delete Blog'
                  >
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
