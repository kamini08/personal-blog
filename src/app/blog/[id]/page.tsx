import "../../styles/globals.css";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">My Personal Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-900 hover:text-gray-700">Home</a></li>
              <li><a href="/blog" className="text-gray-900 hover:text-gray-700">Blog</a></li>
              <li><a href="/about" className="text-gray-900 hover:text-gray-700">About</a></li>
              <li><a href="/contact" className="text-gray-900 hover:text-gray-700">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">Hiking through the woods</h2>
            <p className="text-gray-500 mb-4">Apr 12, 2022</p>
            <p className="text-gray-700 mb-4">This is Rich Text, which includes both external links and links to internal documents. Links should be handled intelligently or everything might break. Don't forget about media, too! Do...</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-2">A day at the beach</h2>
            <p className="text-gray-500 mb-4">Mar 10, 2022</p>
            <p className="text-gray-700 mb-4">Spending a day at the beach is always refreshing. The sound of the waves, the feel of the sand, and the warmth of the sun make for a perfect getaway...</p>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow mt-6">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-center">
            &copy; {new Date().getFullYear()} My Personal Blog. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
