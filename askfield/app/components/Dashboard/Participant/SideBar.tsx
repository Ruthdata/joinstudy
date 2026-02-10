import React from "react";
import {
  Home,
  Wallet,
  Users,
  MessageSquare,
  ChevronRight,
  HelpCircle,
  Search,
} from "lucide-react";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 bg-yellow-100 rounded-lg text-gray-800">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Link href="/dashboard/participant/surveys">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5" />
                  <span>Surveys</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Link href="/dashboard/participant/earnings">
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5" />
                  <span>Earnings</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Link href="/dashboard/participant/help">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Help & Support</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Link href="/dashboard/participant/message">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>Messages</span>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="p-4">
          <div className="bg-yellow-50 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Refer to Earn</h3>
            <p className="text-sm text-gray-600">
              Refer your friends to get free credits when they launch a study
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600">Need help?</div>
              <div className="text-sm font-medium text-gray-800">
                Contact Us
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
