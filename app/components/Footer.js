import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xs sm:text-sm md:text-base text-gray-600">
            © {new Date().getFullYear()} | Built with passion
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link href="https://github.com/haider-9" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-600 hover:text-gray-300">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/haider-ahmad-439317164/" target="_blank" rel="noopener noreferrer">
              <span className="text-gray-600 hover:text-gray-300">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
