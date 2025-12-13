import { useEffect, useState } from 'react';
import { Blog } from '../types/blog';
import SEO from '../components/SEO';

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ALL POSTS');

  const categories = ['ALL POSTS', 'CASE STUDIES', 'GUIDES', 'RESOURCES', 'UPDATES'];

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const url = selectedCategory === 'ALL POSTS'
        ? `${apiUrl}/api/blogs`
        : `${apiUrl}/api/blogs?category=${selectedCategory}`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 3);
  const latestBlogs = blogs.filter(blog => !blog.featured);

  return (
    <>
      <SEO
        title="Contractor Blog & Resources"
        description="Read expert tips, strategies, and best practices for contractors. Learn how to grow your contracting business with AI-powered tools."
        keywords="contractor blog, construction tips, business strategy, contractor guides, industry insights"
        type="blog"
      />
      <div className="bg-white min-h-screen">
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog posts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The home service industry's go-to resource for accelerating growth and mastering business best practices.
          </p>
        </div>
      </section>

      {featuredBlogs.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest posts</h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
          </div>
        </section>
      </div>
    </>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {blog.category}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">{blog.author[0]}</span>
            </div>
            <span className="text-sm text-gray-700 font-medium">{blog.author}</span>
          </div>
          <span className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>
    </div>
  );
}
