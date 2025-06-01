import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShortLink-404
              </span>
            </a>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Bảng giá
            </a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </a>
            <div className="relative group">
              <div className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                <DropdownMenu>
                  <DropdownMenuTrigger>Giải pháp <ArrowDropDownRoundedIcon /></DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
              </button> */}
            </div>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Liên hệ
            </a>
          </nav>

          {/* Right side buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Đăng nhập
            </a>
            <a
              href="/get-started"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-200 shadow-lg"
            >
              Bắt đầu
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <div className="h-6 w-6">X</div> : <MenuRoundedIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              <a href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Bảng giá
              </a>
              <a href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Blog
              </a>
              <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger>Giải pháp</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </button>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Liên hệ
              </a>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <a href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                  Đăng nhập
                </a>
                <a href="/get-started" className="block mx-3 my-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                  Bắt đầu
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
