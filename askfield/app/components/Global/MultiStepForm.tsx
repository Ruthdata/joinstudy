"use client";

import React, { useState } from "react";
import Stepper from "./Stepper";
import Image from "next/image";
import ProfileStep from "../Steps/ProfileStep";
import Demographics from "../Steps/Demographics";
import Languages from "../Steps/Languages";
import Education from "../Steps/Education";
import Profession from "../Steps/Profession";
import Others from "../Steps/Others";
import Confirmation from "../Steps/Confirmation";

const NavigationButtons = ({ currentStep, totalSteps, onBack, onNext, isSubmitting }) => {
  return (
    <div className="flex gap-4 mt-8">
      <button
        onClick={onBack}
        disabled={currentStep === 1 || isSubmitting}
        className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Back
      </button>
      <button
        onClick={onNext}
        disabled={isSubmitting}
        className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : currentStep === totalSteps ? "Submit" : "Next"}
      </button>
    </div>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Updated formData state to match database schema
  const [formData, setFormData] = useState({
    // Profile fields
    firstName: "",
    lastName: "",
    email: "",
    password: "", 
    phoneNumber: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    genderOther: "",
    
    // Demographics fields (participantProfile)
    countryOfResidence: "",
    countryOfBirth: "",
    placeOfBirth: "",
    childhoodLocation: "",
    ethnicGroup: "",
    
    // Languages fields (participantProfile)
    language: "",
    languageFluent: [],
    regionalDialect: "",
    
    // Education fields (participantProfile)
    educationLevel: "",
    educationYearCompleted: "",
    educationFieldOfStudy: "",
    educationCurrentStatus: "",
    
    // Employment fields (participantProfile)
    employmentStatus: "",
    employmentYearsExperience: "",
    employmentSector: "",
    employmentJobTitle: "",
    employmentIndustry: "",
    
    // Additional fields (participantProfile)
    linkedInProfile: "",
    about: "",
    goals: "",
    participateHoursPerWeek: "",
    availabilityToParticipate: "",
    currency: "USD",
    hourlyRate: "",
    interests: [],
  });

  // Step configuration
  const steps = [
    { id: 1, label: "Profile" },
    { id: 2, label: "Demographics" },
    { id: 3, label: "Languages" },
    { id: 4, label: "Education" },
    { id: 5, label: "Profession" },
    { id: 6, label: "Others" },
    { id: 7, label: "Confirmation" },
  ];

  // Map step numbers to components
  const stepComponents = {
    1: ProfileStep,
    2: Demographics,
    3: Languages,
    4: Education,
    5: Profession,
    6: Others,
    7: Confirmation,
  };

  // Helper function to convert years of experience string to number
  const parseYearsOfExperience = (yearsString) => {
    if (!yearsString) return 0;
    
    const yearsMap = {
      "none": 0,
      "0-1": 0.5,
      "1-2": 1.5,
      "2-5": 3.5,
      "5-10": 7.5,
      "10-15": 12.5,
      "15-20": 17.5,
      "20-30": 25,
      "30+": 30
    };
    
    return yearsMap[yearsString] || 0;
  };

  // Helper function to convert hours per week string to number
  const parseHoursPerWeek = (hoursString) => {
    if (!hoursString) return 0;
    
    const hoursMap = {
      "1-5": 3,
      "5-10": 7.5,
      "10-20": 15,
      "20-30": 25,
      "30-40": 35,
      "40+": 40
    };
    
    return hoursMap[hoursString] || 0;
  };

  // Data transformation function before sending to backend
  const transformFormDataForBackend = (formData) => {
    return {
      // Basic fields
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber || "",
      role: "participant",
      
      // Participant profile
      participantProfile: {
        // Demographics
        countryOfResidence: formData.countryOfResidence,
        countryOfBirth: formData.countryOfBirth,
        placeOfBirth: formData.placeOfBirth,
        ethnicGroup: formData.ethnicGroup,
        
        // Languages
        language: formData.language,
        languageFluent: Array.isArray(formData.languageFluent) 
          ? formData.languageFluent 
          : [formData.languageFluent].filter(Boolean),
        regionalDialect: formData.regionalDialect,
        
        // Education
        educationLevel: formData.educationLevel,
        educationYearCompleted: formData.educationYearCompleted,
        educationFieldOfStudy: formData.educationFieldOfStudy,
        educationCurrentStatus: formData.educationCurrentStatus,
        
        // Employment
        employmentStatus: formData.employmentStatus,
        employmentYearsExperience: parseYearsOfExperience(formData.employmentYearsExperience),
        employmentSector: formData.employmentSector,
        employmentJobTitle: formData.employmentJobTitle,
        employmentIndustry: formData.employmentIndustry || formData.employmentSector,
        
        // Additional
        linkedInProfile: formData.linkedInProfile || "",
        about: formData.about,
        goals: formData.goals,
        availabilityToParticipate: formData.availabilityToParticipate,
        participateHoursPerWeek: parseHoursPerWeek(formData.participateHoursPerWeek),
        currency: formData.currency,
        
        // Add any interests if needed
        interests: formData.interests || [],
      }
    };
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Updated handleNext function with API call
  const handleNext = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle form submission
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        const transformedData = transformFormDataForBackend(formData);
        
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transformedData),
        });

        const data = await response.json();

        if (data.success) {
          // Handle successful registration
          console.log("Registration successful:", data);
          
          // Store token if needed
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
          
          // Redirect to verification page or dashboard
          alert("Registration successful! Please check your email to verify your account.");
          // Use Next.js router to redirect
          // router.push('/verify-email');
        } else {
          // Handle errors
          console.error("Registration failed:", data.message);
          setSubmitError(data.message || "Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Navigate to previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle edit from confirmation page
  const handleEdit = (fieldName) => {
    // Map fields to their respective steps
    const fieldToStepMap = {
      // Profile - Step 1
      firstName: 1, lastName: 1, email: 1, password: 1, phoneNumber: 1,
      birthMonth: 1, birthDay: 1, birthYear: 1, gender: 1, genderOther: 1,
      
      // Demographics - Step 2
      countryOfResidence: 2, countryOfBirth: 2, placeOfBirth: 2,
      childhoodLocation: 2, ethnicGroup: 2,
      
      // Languages - Step 3
      language: 3, languageFluent: 3, regionalDialect: 3,
      
      // Education - Step 4
      educationLevel: 4, educationYearCompleted: 4,
      educationFieldOfStudy: 4, educationCurrentStatus: 4,
      
      // Profession - Step 5
      employmentStatus: 5, employmentYearsExperience: 5,
      employmentSector: 5, employmentJobTitle: 5, employmentIndustry: 5,
      
      // Others - Step 6
      linkedInProfile: 6, about: 6, goals: 6,
      participateHoursPerWeek: 6, availabilityToParticipate: 6,
      currency: 6, hourlyRate: 6,
    };
    
    const stepNumber = fieldToStepMap[fieldName];
    if (stepNumber) {
      setCurrentStep(stepNumber);
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

            {/* Error Message */}
            {submitError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            )}

            {/* Current Step Content */}
            {CurrentStepComponent ? (
              <CurrentStepComponent
                formData={formData}
                handleChange={handleChange}
                onEdit={currentStep === 7 ? handleEdit : undefined}
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
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-lg overflow-hidden">
              <Image
                src="/images/shared/magnifying-glass.svg"
                alt="Magnifying glass over data"
                width={588}
                height={8800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;