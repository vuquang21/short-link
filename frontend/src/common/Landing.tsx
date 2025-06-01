import { useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';

export default function Hero() {
  const [originalUrl, setOriginalUrl] = useState('');

  function handleShortenUrl(event: any): void {
    fetch('http://localhost:3200/api/url', {
      method: 'POST',
      body: JSON.stringify({ originalUrl }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="max-w-lg">
          {/* Pink Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800 mb-6">
            Rút gọn link miễn phí
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rút gọn link miễn phí
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8">
            Tạo link ngắn và truy cập với độ trễ thấp. Dữ liệu được lưu giữ vĩnh viễn.
          </p>

          {/* URL Input Form */}
          <div className="bg-white rounded-2xl p-1 shadow-lg mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <div className="relative">
                  <a className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 text-gray-400" >
                    <LinkIcon />
                  </a>
                  <input
                    type="url"
                    value={originalUrl}
                    onChange={(e) => setOriginalUrl(e.target.value)}
                    placeholder="Dán liên kết dài của bạn"
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-0 rounded-xl focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>
              <button onClick={handleShortenUrl} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg">
                Rút gọn link
              </button>
            </div>
          </div>

          {/* Terms text */}
          <p className="text-sm text-gray-500">
            Bằng việc bấm nút RÚT GỌN LINK, nghĩa là bạn đã đồng ý với{' '}
            <a href="/terms" className="text-blue-600 hover:underline">
              Điều khoản sử dụng
            </a>.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="lg:pl-8 relative">
          {/* Background decoration */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/868/056/non_2x/freelance-working-modern-flat-concept-for-web-banner-design-woman-designer-analyzes-data-and-develops-website-layout-using-laptop-working-remotely-illustration-with-isolated-people-scene-free-vector.jpg"
              alt="Woman working on laptop"
              width={600}
              height={400}
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
