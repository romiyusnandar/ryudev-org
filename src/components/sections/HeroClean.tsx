import Link from 'next/link';

export default function HeroClean() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Complete Digital Solutions
            <span className="text-blue-400 block">for Your Business</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            From API testing and movie streaming to project management,
            we provide comprehensive digital services to power your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              className="bg-gray-800 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Get Started Free
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">
                High-performance solutions ensuring rapid deployment and seamless user experience.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reliable & Secure</h3>
              <p className="text-gray-300">
                Enterprise-grade security with 99.9% uptime guarantee for all your applications.
              </p>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customer Focused</h3>
              <p className="text-gray-300">
                24/7 support and custom solutions tailored to meet your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}