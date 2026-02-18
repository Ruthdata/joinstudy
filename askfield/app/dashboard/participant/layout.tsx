"use client";

import SideBar from "../../components/Dashboard/Participant/SideBar";
import TopNav from "../../components/Dashboard/Participant/TopNav";

export default function LawyerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex  bg-gray-50">
      <div className="flex-1 overflow-auto">
        <TopNav />
        <SideBar />
        <div className="flex">
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
