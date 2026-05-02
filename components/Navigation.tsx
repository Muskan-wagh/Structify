"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Menu, X, LayoutDashboard } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className="hidden sm:inline">Structify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            How it Works
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignInButton mode="modal">
            <button className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-4">
              Log in
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="btn-primary py-2.5 px-6 text-sm">
              Get Started
            </button>
          </SignUpButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/how-it-works"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <SignInButton mode="modal">
                <button className="w-full text-left px-3 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-lg">
                  Log in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="w-full btn-primary py-2.5 text-sm">
                  Get Started
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
