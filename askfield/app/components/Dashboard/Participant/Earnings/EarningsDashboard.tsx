"use client";

import React, { useState } from "react";
import { ChevronDown, Download, Landmark, HelpCircle } from "lucide-react";
import EarningsStatChart from "./EarningsStats";

// --- Types ---
type TabKey = "Approved" | "Pending" | "Rejected";

interface ActivityItem {
  id: number;
  title: string;
  time: string;
  amount: number;
  status: "Approved" | "Pending" | "Rejected";
}

interface PaymentItem {
  id: number;
  method: string;
  time: string;
  amount: number;
  status: "Approved" | "Pending" | "Rejected";
}

// --- Mock Data ---
const activityData: ActivityItem[] = [
  {
    id: 1,
    title: "Mobile Banking Study",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 2,
    title: "Mobile Banking Study",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 3,
    title: "Mobile Banking Study",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 4,
    title: "Mobile Banking Study",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 5,
    title: "Contract Review Task",
    time: "5 hours ago",
    amount: 25000,
    status: "Pending",
  },
  {
    id: 6,
    title: "Document Drafting",
    time: "1 day ago",
    amount: 15000,
    status: "Rejected",
  },
];

const paymentData: PaymentItem[] = [
  {
    id: 1,
    method: "Bank Transfer",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 2,
    method: "Bank Transfer",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 3,
    method: "Bank Transfer",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 4,
    method: "Bank Transfer",
    time: "2 hours ago",
    amount: 40000,
    status: "Approved",
  },
  {
    id: 5,
    method: "Bank Transfer",
    time: "5 hours ago",
    amount: 20000,
    status: "Pending",
  },
  {
    id: 6,
    method: "Bank Transfer",
    time: "1 day ago",
    amount: 10000,
    status: "Rejected",
  },
];

// --- Status Badge ---
const StatusBadge = ({ status }: { status: TabKey }) => {
  const styles: Record<TabKey, string> = {
    Approved: "text-green-600 font-semibold text-xs",
    Pending: "text-yellow-500 font-semibold text-xs",
    Rejected: "text-red-500 font-semibold text-xs",
  };
  return <span className={styles[status]}>{status}</span>;
};

// --- Tab Bar ---
const TabBar = ({
  active,
  onChange,
}: {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}) => {
  const tabs: TabKey[] = ["Approved", "Pending", "Rejected"];
  return (
    <div className="flex items-center gap-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`text-sm font-medium pb-1 transition-colors ${
            active === tab
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// --- Sort Button ---
const SortButton = () => (
  <button className="flex items-center gap-1.5 text-xs text-gray-500 font-medium hover:text-gray-700 transition-colors">
    Sort by:
    <ChevronDown className="w-3.5 h-3.5" />
  </button>
);

// --- Main Component ---
interface EarningsDashboardProps {
  pendingAmount?: number;
  onWithdraw?: () => void;
  onDownloadStatement?: () => void;
}

export default function EarningsDashboard({
  pendingAmount = 6700,
  onWithdraw,
  onDownloadStatement,
}: EarningsDashboardProps) {
  const [activityTab, setActivityTab] = useState<TabKey>("Approved");
  const [paymentTab, setPaymentTab] = useState<TabKey>("Approved");
  const [showEarningsStat, setShowEarningsStat] = useState(true);

  const filteredActivity = activityData.filter((a) => a.status === activityTab);
  const filteredPayments = paymentData.filter((p) => p.status === paymentTab);

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Pending Transactions Card */}
        <div className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between flex-wrap gap-4">
            {/* Left: Pending Amount */}
            <div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                <span>Pending Transactions</span>
                <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">
                  NGN {pendingAmount.toLocaleString()}
                </span>
                <span className="text-xs text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-full px-2.5 py-0.5 font-medium">
                  Waiting Approval
                </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onWithdraw}
                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                <Landmark className="w-4 h-4" />
                Withdraw funds
              </button>
              <button
                onClick={onDownloadStatement}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download statement
              </button>
            </div>
          </div>

          {/* Earnings Stat Accordion Header */}
          <div className="mt-5 pt-5 border-t border-gray-100">
            <button
              onClick={() => setShowEarningsStat(!showEarningsStat)}
              className="flex items-center justify-between w-full"
            >
              <span className="text-sm font-semibold text-gray-800">
                Earnings Stat
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  showEarningsStat ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Placeholder for embedded chart */}
            {showEarningsStat && <EarningsStatChart />}
          </div>
        </div>

        {/* Activity + Payment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl px-5 py-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-800">
                Recent Activity
              </h3>
              <SortButton />
            </div>

            <TabBar active={activityTab} onChange={setActivityTab} />

            <div className="mt-4 space-y-4">
              {filteredActivity.length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-6">
                  No {activityTab.toLowerCase()} activity
                </p>
              ) : (
                filteredActivity.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        NGN {item.amount.toLocaleString()}
                      </p>
                      <StatusBadge status={item.status} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-2xl px-5 py-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-800">
                Payment History
              </h3>
              <SortButton />
            </div>

            <TabBar active={paymentTab} onChange={setPaymentTab} />

            <div className="mt-4 space-y-4">
              {filteredPayments.length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-6">
                  No {paymentTab.toLowerCase()} payments
                </p>
              ) : (
                filteredPayments.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Landmark className="w-4 h-4 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.method}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      NGN {item.amount.toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
