"use client";

import React, { useState, useMemo } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { SETUP_STEPS } from "../../../lib/constants/setupSteps";

export default function Features() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "verify-email",
  );
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(
    {
      "verify-email": true,
    },
  );

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Handle option selection
  const handleOptionSelect = (stepId: string, option: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [stepId]: option,
    }));
  };

  // Handle next button click
  const handleNext = (stepId: string) => {
    if (!selectedOptions[stepId]) return;

    // Mark current step as completed
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: true,
    }));

    // Find next step
    const currentIndex = SETUP_STEPS.findIndex((step) => step.id === stepId);
    const nextStep = SETUP_STEPS[currentIndex + 1];

    // Expand next step or collapse if this is the last step
    if (nextStep) {
      setExpandedSection(nextStep.id);
    } else {
      setExpandedSection(null);
    }
  };

  // Calculate completion percentage
  const completionPercentage = useMemo(() => {
    const totalSteps = SETUP_STEPS.length;
    const completed = Object.keys(completedSteps).length;
    return Math.round((completed / totalSteps) * 100);
  }, [completedSteps]);

  return (
    <div className="">
      <div className="p-7 ">
        <div className="p-10 bg-white rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            Let&apos;s help you setup your account
          </h1>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-semibold">
                {completionPercentage}%
              </span>
              <span className="text-gray-500 text-sm">Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Verify Email Section */}
          <div className="mb-6">
            <div
              className="flex items-center gap-3 cursor-pointer mb-4"
              onClick={() => toggleSection("verify-email")}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-medium text-gray-900">
                Verify Email
              </h2>
              <svg
                className={`w-5 h-5 ml-auto transition-transform ${
                  expandedSection === "verify-email" ? "rotate-180" : ""
                }`}
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

            {expandedSection === "verify-email" && (
              <div className="ml-11 flex gap-6 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">
                    We&apos;ve sent a verification link to{" "}
                    <span className="text-yellow-600">
                      omorefemmanuel4@gmail.com
                    </span>{" "}
                    that looks like this. Go and click the verify link.
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    It typically takes 3 mins to arrive. Don&apos;t forget to
                    check your spam if it doesn&apos;t display on your inbox.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                      Resend email
                    </button>
                    <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                      Change email
                    </button>
                  </div>
                </div>

                <div className="">
                  <Image
                    src="/images/dashboard/verify-email-image.svg"
                    alt="verify"
                    width={332}
                    height={254}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Setup Steps */}
          {SETUP_STEPS.slice(1).map((step, index) => (
            <div key={step.id} className="mb-6">
              <div
                className="flex items-center gap-3 cursor-pointer mb-4"
                onClick={() => toggleSection(step.id)}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    completedSteps[step.id] ? "bg-green-500" : "bg-yellow-400"
                  }`}
                >
                  {completedSteps[step.id] ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-semibold text-sm">
                      {index + 2}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-medium text-gray-900">
                  {step.title}
                </h2>
                <svg
                  className={`w-5 h-5 ml-auto transition-transform ${
                    expandedSection === step.id ? "rotate-180" : ""
                  }`}
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

              {expandedSection === step.id && (
                <div className="ml-11">
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 min-h-[300px] flex flex-col">
                    <div className="flex items-start gap-2 mb-4">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        Choose the option that applies to you most
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {(step.options ?? []).map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(step.id, option)}
                          className={`px-4 py-3 rounded-full text-sm font-medium transition-colors h-fit ${
                            selectedOptions[step.id] === option
                              ? "bg-gray-800 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handleNext(step.id)}
                      disabled={!selectedOptions[step.id]}
                      className={`w-full py-3 rounded-full font-medium transition-colors ${
                        selectedOptions[step.id]
                          ? "bg-gray-800 text-white hover:bg-gray-700"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
