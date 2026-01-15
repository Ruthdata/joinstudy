import React from "react";
import { Menu } from "lucide-react";

export default function TopNav() {
  return (
    <div>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Menu className="w-6 h-6 text-gray-600" />
          <span className="text-xl">
            <span className="text-yellow-500">ask</span>
            <span className="font-semibold">Field</span>
          </span>
        </div>

        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <span className="text-gray-700">My Workspace</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100">
              Refer a friend
            </button>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium">
              UE
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
