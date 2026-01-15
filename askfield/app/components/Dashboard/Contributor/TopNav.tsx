import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function TopNav() {
  return (
    <div>
      <div className="p-4 border-b border-gray-200">
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6 text-gray-600" />
            <span className="text-xl">
              <span className="text-yellow-500">ask</span>
              <span className="font-semibold">Field</span>
            </span>
          </div>

          {/* Middle content */}
          <div className="flex items-center justify-between gap-2 rounded-3xl px-6 py-2 cursor-pointer h-[50px] w-[360px] bg-[#F0F0F0]">
            <div className="flex items-center gap-2">
              <Image
                src="/images/dashboard/workspace.svg"
                alt="Workspace"
                width={16}
                height={16}
              />
              <span className="text-black text-sm">My Workspace</span>
            </div>

            <div>
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
          </div>

          {/* End */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
              Refer a Friend
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
