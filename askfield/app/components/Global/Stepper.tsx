import React, { useState } from "react";
import { Check } from "lucide-react";

// ==================== STEPPER COMPONENT ====================
const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted
                      ? "bg-yellow-400 border-yellow-400"
                      : isActive
                      ? "bg-yellow-400 border-yellow-400"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm font-semibold ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {stepNumber}
                    </span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isActive ? "text-yellow-500" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all ${
                    stepNumber < currentStep ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                  style={{ marginBottom: "36px" }}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
