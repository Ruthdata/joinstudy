import React, { useState } from "react";
import Stepper from "./Stepper";
import Image from "next/image";

const NavigationButtons = ({ currentStep, totalSteps, onBack, onNext }) => {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Back
      </button>
      <button
        onClick={onNext}
        className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
      >
        {currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    countryOfResidence: "",
    countryOfBirth: "",
    placeOfBirth: "",
    childhoodLocation: "",
    ethnicity: "",
  });

  // Step configuration
  const steps = [
    { id: 1, label: "Profile" },
    { id: 2, label: "Demographics" },
    { id: 3, label: "Languages" },
    { id: 4, label: "Education" },
    { id: 5, label: "Work" },
    { id: 6, label: "Other" },
    { id: 7, label: "Confirmation" },
  ];

  // Map step numbers to components
  const stepComponents = {
    1: ProfileStep,
    2: DemographicsStep,
    3: LanguagesStep,
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Navigate to next step
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  // Navigate to previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Get the current step component
  const CurrentStepComponent = stepComponents[currentStep];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Stepper */}
            <Stepper steps={steps} currentStep={currentStep} />

            {/* Current Step Content */}
            {CurrentStepComponent ? (
              <CurrentStepComponent
                formData={formData}
                handleChange={handleChange}
              />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">
                  {steps[currentStep - 1].label}
                </h2>
                <p className="text-gray-600">
                  This step content will be added soon.
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={steps.length}
              onBack={handleBack}
              onNext={handleNext}
            />
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-lg overflow-hidden h-[600px] bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=800&fit=crop"
                alt="Magnifying glass over data"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
