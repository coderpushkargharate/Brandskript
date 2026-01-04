// src/pages/Admin.jsx
import { useState, useEffect } from 'react';
import { Blog } from '../types/blog';
import { Booking } from '../types/booking';
import { Plus, Edit2, Trash2, LogOut, Eye, Upload } from 'lucide-react';
import SEO from '../components/SEO';

// === EXISTING TYPES ===
interface CoffeeRegistration {
  _id: string;
  firstName: string;
  email: string;
  phone: string;
  userType: string;
  createdAt: string;
}

interface Newspaper {
  _id: string;
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  logoUrl?: string;
  authorName: string;
  authorTitle: string;
  date: string;
}

// === NEW PRODUCT TYPE ===
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'blogs' | 'bookings' | 'coffee' | 'newspapers' | 'products'>('blogs');

  // Auth
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Existing data
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [coffees, setCoffees] = useState<CoffeeRegistration[]>([]);
  const [newspapers, setNewspapers] = useState<Newspaper[]>([]);

  // New: Products
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // UI states
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeRegistration | null>(null);
  const [selectedNewspaper, setSelectedNewspaper] = useState<Newspaper | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Blog form
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'GUIDES' as 'GUIDES' | 'UPDATES' | 'CASE STUDIES' | 'RESOURCES',
    author: 'Admin',
    featured: false,
    image: ''
  });

  // Product form
  const [productFormData, setProductFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    stock: '',
    rating: ''
  });

  // Newspaper upload state
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadAuthorName, setUploadAuthorName] = useState('');
  const [uploadAuthorTitle, setUploadAuthorTitle] = useState('');
  const [uploadMedia, setUploadMedia] = useState<File | null>(null);
  const [uploadLogo, setUploadLogo] = useState<File | null>(null);
  const [editingNewspaper, setEditingNewspaper] = useState<Newspaper | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  // Auth on mount
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'authenticated') {
      setIsAuthenticated(true);
      fetchBlogs();
      fetchBookings();
      fetchCoffees();
      fetchNewspapers();
      fetchProducts(); // fetch products on load
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Brandskript' && password === 'Brandskript123') {
      localStorage.setItem('adminToken', 'authenticated');
      setIsAuthenticated(true);
      fetchBlogs();
      fetchBookings();
      fetchCoffees();
      fetchNewspapers();
      fetchProducts();
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // === FETCHERS ===
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_URL}/api/blogs`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_URL}/api/bookings`);
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchCoffees = async () => {
    try {
      const res = await fetch(`${API_URL}/api/coffee-registrations`);
      const data = await res.json();
      setCoffees(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching coffee registrations:', error);
    }
  };

  const fetchNewspapers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/newspapers`);
      const data = await res.json();
      setNewspapers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching newspapers:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/api/products`);
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching products:', err);
      alert('Failed to load products');
    } finally {
      setLoadingProducts(false);
    }
  };

  // === BLOG CRUD === (unchanged)
  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingBlog ? 'PUT' : 'POST';
      const url = editingBlog
        ? `${API_URL}/api/blogs/${editingBlog._id}`
        : `${API_URL}/api/blogs`;
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed to save blog');
      resetBlogForm();
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog');
    }
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      featured: blog.featured,
      image: blog.image
    });
    setShowForm(true);
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    try {
      const res = await fetch(`${API_URL}/api/blogs/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete blog');
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog');
    }
  };

  // === PRODUCT CRUD ===
  const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: productFormData.name,
      description: productFormData.description,
      price: parseFloat(productFormData.price),
      image: productFormData.image,
      category: productFormData.category,
      stock: parseInt(productFormData.stock, 10),
      rating: parseFloat(productFormData.rating) || 0
    };

    try {
      if (editingProduct) {
        await fetch(`${API_URL}/api/products/${editingProduct._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
      } else {
        await fetch(`${API_URL}/api/products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(productData)
        });
      }
      resetProductForm();
      fetchProducts();
    } catch (err) {
      console.error('Error saving product:', err);
      alert('Error saving product');
    }
  };

  const resetProductForm = () => {
    setProductFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
      stock: '',
      rating: ''
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image,
      category: product.category,
      stock: product.stock.toString(),
      rating: product.rating.toString()
    });
    setShowForm(true);
  };

  const handleDeleteProduct = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await fetch(`${API_URL}/api/products/${id}`, { method: 'DELETE' });
        fetchProducts();
      } catch (err) {
        console.error('Error deleting product:', err);
        alert('Error deleting product');
      }
    }
  };

  // === OTHER DELETES (unchanged) ===
  const deleteBooking = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const res = await fetch(`${API_URL}/api/bookings/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete booking');
      fetchBookings();
      setSelectedBooking(null);
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking');
    }
  };

  const deleteCoffee = async (id: string) => {
    if (!confirm('Are you sure you want to delete this coffee registration?')) return;
    try {
      const res = await fetch(`${API_URL}/api/coffee-registrations/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete registration');
      fetchCoffees();
      setSelectedCoffee(null);
    } catch (error) {
      console.error('Error deleting coffee registration:', error);
      alert('Failed to delete registration');
    }
  };

  const deleteNewspaper = async (id: string) => {
    if (!confirm('Are you sure you want to delete this newspaper?')) return;
    try {
      const res = await fetch(`${API_URL}/api/newspapers/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete newspaper');
      fetchNewspapers();
      setSelectedNewspaper(null);
    } catch (error) {
      console.error('Error deleting newspaper:', error);
      alert('Failed to delete newspaper');
    }
  };

  const editNewspaper = (item: Newspaper) => {
    setEditingNewspaper(item);
    setUploadTitle(item.title);
    setUploadDescription(item.description);
    setUploadAuthorName(item.authorName);
    setUploadAuthorTitle(item.authorTitle);
    setUploadMedia(null);
    setUploadLogo(null);
  };

  // === FORM RESETS ===
  const resetBlogForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'GUIDES',
      author: 'Admin',
      featured: false,
      image: ''
    });
    setEditingBlog(null);
    setShowForm(false);
  };

  const resetNewspaperForm = () => {
    setUploadTitle('');
    setUploadDescription('');
    setUploadAuthorName('');
    setUploadAuthorTitle('');
    setUploadMedia(null);
    setUploadLogo(null);
    setEditingNewspaper(null);
  };

  // === NEWSPAPER UPLOADS === (unchanged)
  const handleNewspaperUpload = async () => {
    if (!uploadTitle || !uploadDescription || !uploadAuthorName || !uploadAuthorTitle || !uploadMedia) {
      alert('Please fill all required fields and upload media.');
      return;
    }
    const formData = new FormData();
    formData.append('title', uploadTitle);
    formData.append('description', uploadDescription);
    formData.append('authorName', uploadAuthorName);
    formData.append('authorTitle', uploadAuthorTitle);
    formData.append('media', uploadMedia);
    if (uploadLogo) {
      formData.append('logo', uploadLogo);
    }
    try {
      const res = await fetch(`${API_URL}/api/newspapers`, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        resetNewspaperForm();
        fetchNewspapers();
        alert('Newspaper uploaded successfully!');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading newspaper:', error);
      alert('Upload failed');
    }
  };

  const handleNewspaperUpdate = async () => {
    if (!editingNewspaper || !uploadTitle || !uploadDescription || !uploadAuthorName || !uploadAuthorTitle) {
      alert('Please fill all required fields.');
      return;
    }
    const formData = new FormData();
    formData.append('title', uploadTitle);
    formData.append('description', uploadDescription);
    formData.append('authorName', uploadAuthorName);
    formData.append('authorTitle', uploadAuthorTitle);
    if (uploadMedia) {
      formData.append('media', uploadMedia);
    }
    if (uploadLogo) {
      formData.append('logo', uploadLogo);
    }
    try {
      const res = await fetch(`${API_URL}/api/newspapers/${editingNewspaper._id}`, {
        method: 'PUT',
        body: formData,
      });
      if (res.ok) {
        resetNewspaperForm();
        fetchNewspapers();
        alert('Newspaper updated successfully!');
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      console.error('Error updating newspaper:', error);
      alert('Update failed');
    }
  };

  // === AUTH SCREEN ===
  if (!isAuthenticated) {
    return (
      <>
        <SEO
          title="Admin Login"
          description="Secure login for Brandskript admin dashboard."
          keywords="admin, login, dashboard"
          type="website"
        />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Admin Login</h2>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  // === AUTHENTICATED DASHBOARD ===
  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Manage blogs, session bookings, coffee break registrations, newspapers, and products."
        keywords="admin, dashboard, management"
        type="website"
      />
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6 border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => {
                  setActiveTab('blogs');
                  setSelectedBooking(null);
                  setSelectedCoffee(null);
                  setSelectedNewspaper(null);
                  setSelectedProduct(null);
                }}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blogs'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Blog Management
              </button>
              <button
                onClick={() => {
                  setActiveTab('bookings');
                  setShowForm(false);
                  setSelectedCoffee(null);
                  setSelectedNewspaper(null);
                  setSelectedProduct(null);
                }}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Session Bookings ({bookings.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('coffee');
                  setShowForm(false);
                  setSelectedBooking(null);
                  setSelectedNewspaper(null);
                  setSelectedProduct(null);
                }}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'coffee'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Coffee Breaks ({coffees.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('newspapers');
                  setShowForm(false);
                  setSelectedBooking(null);
                  setSelectedCoffee(null);
                  setSelectedProduct(null);
                }}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'newspapers'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Newspapers ({newspapers.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('products');
                  setShowForm(false);
                  setSelectedBooking(null);
                  setSelectedCoffee(null);
                  setSelectedNewspaper(null);
                }}
                className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Products ({products.length})
              </button>
            </div>
          </div>

          {/* === BLOGS TAB === */}
          {activeTab === 'blogs' && (
            <>
              <div className="mb-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Blog</span>
                </button>
              </div>
              {showForm && (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {editingBlog ? 'Edit Blog' : 'Add New Blog'}
                  </h2>
                  <form onSubmit={handleSubmitBlog} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                      <textarea
                        required
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                      <textarea
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                        >
                          <option>GUIDES</option>
                          <option>UPDATES</option>
                          <option>CASE STUDIES</option>
                          <option>RESOURCES</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                        <input
                          type="text"
                          required
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="url"
                        required
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                        Featured Post
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        {editingBlog ? 'Update' : 'Create'} Blog
                      </button>
                      <button
                        type="button"
                        onClick={resetBlogForm}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Featured
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogs.map((blog) => (
                      <tr key={blog._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {blog.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.author}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {blog.featured ? 'Yes' : 'No'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => handleEditBlog(blog)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog._id!)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* === BOOKINGS TAB === */}
          {activeTab === 'bookings' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {selectedBooking ? (
                <div className="p-6">
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="mb-4 text-blue-600 hover:text-blue-900 font-medium"
                  >
                    &larr; Back to Bookings
                  </button>
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Details</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-gray-600">Full Name</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.fullName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Business Name</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.businessName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly Revenue</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.monthlyRevenue}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Start Timeline</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.startTimeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Selected Date</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.selectedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Time Slot</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.timeSlot}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Products/Services</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.productsServices}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Target Audience</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.targetAudience}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600">Lead Generation Method</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.leadGenerationMethod}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600">Main Challenges</p>
                          <p className="text-lg font-medium text-gray-900">{selectedBooking.mainChallenges}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-600">Booked On</p>
                          <p className="text-lg font-medium text-gray-900">
                            {new Date(selectedBooking.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteBooking(selectedBooking._id!)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete Booking
                    </button>
                  </div>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Business
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Revenue
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{booking.fullName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {booking.businessName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {booking.selectedDate} at {booking.timeSlot}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {booking.monthlyRevenue}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedBooking(booking)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteBooking(booking._id!)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* === COFFEE BREAKS TAB === */}
          {activeTab === 'coffee' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {selectedCoffee ? (
                <div className="p-6">
                  <button
                    onClick={() => setSelectedCoffee(null)}
                    className="mb-4 text-blue-600 hover:text-blue-900 font-medium"
                  >
                    &larr; Back to Coffee Registrations
                  </button>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Coffee Registration Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Name</p>
                        <p className="text-lg font-medium text-gray-900">{selectedCoffee.firstName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-lg font-medium text-gray-900">{selectedCoffee.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="text-lg font-medium text-gray-900">{selectedCoffee.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">User Type</p>
                        <p className="text-lg font-medium text-gray-900">{selectedCoffee.userType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Registered On</p>
                        <p className="text-lg font-medium text-gray-900">
                          {new Date(selectedCoffee.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteCoffee(selectedCoffee._id!)}
                      className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete Registration
                    </button>
                  </div>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {coffees.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            {item.userType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedCoffee(item)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteCoffee(item._id!)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* === NEWSPAPERS TAB === */}
          {activeTab === 'newspapers' && (
            <div className="space-y-6">
              {/* Upload/Edit Form */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">
                  {editingNewspaper ? 'Edit Newspaper' : 'Upload Newspaper'}
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title (Heading)"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <textarea
                    placeholder="Description (Paragraph)"
                    value={uploadDescription}
                    onChange={(e) => setUploadDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Author Name"
                    value={uploadAuthorName}
                    onChange={(e) => setUploadAuthorName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Author Title"
                    value={uploadAuthorTitle}
                    onChange={(e) => setUploadAuthorTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setUploadMedia(e.target.files?.[0] || null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setUploadLogo(e.target.files?.[0] || null)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Upload Logo (optional)"
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={editingNewspaper ? handleNewspaperUpdate : handleNewspaperUpload}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{editingNewspaper ? 'Update' : 'Upload'} Newspaper</span>
                    </button>
                    {editingNewspaper && (
                      <button
                        onClick={resetNewspaperForm}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Newspapers List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Media
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {newspapers.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.mediaType === 'image' ? (
                            <img
                              src={item.mediaUrl}
                              alt={item.title}
                              className="h-16 w-auto object-contain"
                            />
                          ) : (
                            <video
                              src={item.mediaUrl}
                              controls
                              className="h-16 w-auto object-contain"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          <div>{item.authorName}</div>
                          <div className="text-xs text-gray-500">{item.authorTitle}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {new Date(item.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedNewspaper(item)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => editNewspaper(item)}
                            className="text-yellow-600 hover:text-yellow-900 mr-4"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteNewspaper(item._id!)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Newspaper Detail View Modal */}
              {selectedNewspaper && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative">
                    <button
                      onClick={() => setSelectedNewspaper(null)}
                      className="absolute top-4 right-4 text-red-600 font-bold"
                    >
                      ✕
                    </button>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Side: Text Content */}
                      <div className="md:w-1/2 space-y-4">
                        {selectedNewspaper.logoUrl && (
                          <img
                            src={selectedNewspaper.logoUrl}
                            alt="Logo"
                            className="h-12 w-auto mb-4"
                          />
                        )}
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-xl font-bold text-gray-600">
                              {selectedNewspaper.authorName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{selectedNewspaper.authorName}</h3>
                            <p className="text-sm text-gray-600">{selectedNewspaper.authorTitle}</p>
                          </div>
                        </div>
                        <h2 className="text-xl font-bold">{selectedNewspaper.title}</h2>
                        <p className="text-gray-700">{selectedNewspaper.description}</p>
                        <p className="text-xs text-gray-500 mt-4">
                          Published on: {new Date(selectedNewspaper.date).toLocaleDateString()}
                        </p>
                      </div>
                      {/* Right Side: Media */}
                      <div className="md:w-1/2">
                        {selectedNewspaper.mediaType === 'image' ? (
                          <img
                            src={selectedNewspaper.mediaUrl}
                            alt={selectedNewspaper.title}
                            className="w-full h-auto rounded-lg"
                          />
                        ) : (
                          <video
                            src={selectedNewspaper.mediaUrl}
                            controls
                            className="w-full h-auto rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* === PRODUCTS TAB === */}
          {activeTab === 'products' && (
            <>
              <div className="mb-6">
                <button
                  onClick={() => {
                    resetProductForm();
                    setShowForm(true);
                  }}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  <Plus size={20} />
                  Add New Product
                </button>
              </div>

              {showForm && (
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {editingProduct ? 'Edit Product' : 'Add New Product'}
                  </h2>
                  <form onSubmit={handleSubmitProduct} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={productFormData.name}
                        onChange={handleProductInputChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                      <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={productFormData.category}
                        onChange={handleProductInputChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <textarea
                      name="description"
                      placeholder="Product Description"
                      value={productFormData.description}
                      onChange={handleProductInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={productFormData.price}
                        onChange={handleProductInputChange}
                        step="0.01"
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                      <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={productFormData.stock}
                        onChange={handleProductInputChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                      <input
                        type="number"
                        name="rating"
                        placeholder="Rating (1-5)"
                        value={productFormData.rating}
                        onChange={handleProductInputChange}
                        step="0.1"
                        min="0"
                        max="5"
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                      <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={productFormData.image}
                        onChange={handleProductInputChange}
                        required
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                      >
                        {editingProduct ? 'Update' : 'Create'} Product
                      </button>
                      <button
                        type="button"
                        onClick={resetProductForm}
                        className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b border-gray-300">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Name</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Category</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Stock</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Rating</th>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{product.name}</td>
                        <td className="px-6 py-4 text-gray-700">{product.category}</td>
                        <td className="px-6 py-4 font-semibold text-blue-600">${product.price.toFixed(2)}</td>
                        <td className="px-6 py-4">{product.stock}</td>
                        <td className="px-6 py-4">{product.rating}</td>
                        <td className="px-6 py-4 flex gap-4">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                          >
                            <Edit2 size={18} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product._id)}
                            className="text-red-600 hover:text-red-800 flex items-center gap-2"
                          >
                            <Trash2 size={18} />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}