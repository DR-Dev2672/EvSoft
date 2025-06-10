// src/components/Footer.tsx
// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        {/* Brand & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">⚡ EvSoft.com</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-md">
            Find EV charging stations near you. Green drive, bright future.
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-2">
          <a href="#" className="text-gray-300 hover:text-white transition">📘 Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white transition">🐦 Twitter</a>
          <a href="#" className="text-gray-300 hover:text-white transition">💼 LinkedIn</a>
          <a href="mailto:support@evcharger.com" className="text-gray-300 hover:text-white transition">📧 Email</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 self-end md:self-center">
          &copy; {new Date().getFullYear()} EV Charger. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
