"use client";

import { useState } from "react";
import { Menu, X, Home, FileText, DollarSign, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard/participant", icon: Home },
  { name: "Surveys", href: "/dashboard/participant/surveys", icon: FileText },
  { name: "Earnings", href: "/dashboard/participant/earnings", icon: DollarSign },
  { name: "Help & Support", href: "/dashboard/participant/support", icon: HelpCircle },
  { name: "Messages", href: "/dashboard/participant/messages", icon: MessageSquare },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-900">a</span>
          </div>
          <span className="text-lg font-semibold">
            ask<span className="text-yellow-500">Field</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-yellow-50 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Refer to Earn Card */}
        <div className="m-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            Refer to Earn
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Refer your friends to get free credits when they launch a study
          </p>
        </div>

        {/* Contact Us */}
        <button className="m-4 px-4 py-3 bg-gray-50 rounded-lg flex items-center justify-between text-sm text-gray-700 hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-gray-600" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">Need help?</p>
              <p className="text-sm font-medium text-gray-900">Contact Us</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gray-900/50" onClick={() => setSidebarOpen(false)}>
          <aside className="fixed inset-y-0 left-0 w-64 bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <span className="text-lg font-semibold">askField</span>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            {/* Same nav as desktop */}
            <nav className="px-4 py-6 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive ? "bg-yellow-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>

            {/* Workspace Dropdown */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-5 h-5 bg-gray-300 rounded" />
              <span className="text-sm font-medium text-gray-900">My Workspace</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
              UE
            </div>
          </div>
        </header>

        {/* Page Content - THIS IS WHERE YOUR CONTENT GOES */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}