// src/components/Footer.tsx
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10">
          {/* Brand & Tagline */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">⚡ EvSoft.com</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-md">
              Find EV charging stations near you. Green drive, bright future.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Powered by sustainable energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/search" className="text-gray-300 hover:text-white transition">Search Stations</a></li>
              <li><a href="/map" className="text-gray-300 hover:text-white transition">Map View</a></li>
              <li><a href="/my-stations" className="text-gray-300 hover:text-white transition">My Stations</a></li>
              <li><a href="/add-station" className="text-gray-300 hover:text-white transition">Add Station</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@evsoft.com" className="text-gray-300 hover:text-white transition">📧 support@evsoft.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-300 hover:text-white transition">📞 +1 (234) 567-890</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition">❓ FAQ</a></li>
              <li><a href="/help" className="text-gray-300 hover:text-white transition">🆘 Help Center</a></li>
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for updates on new stations and features.</p>
            <div className="flex flex-col gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-gray-700 px-3 py-2 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
              />
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className="text-gray-300 hover:text-white transition text-xl">📘</a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl">🐦</a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl">💼</a>
              <a href="#" className="text-gray-300 hover:text-white transition text-xl">📷</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} EvSoft.com. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:justify-end">
            <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
