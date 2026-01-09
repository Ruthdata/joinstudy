"use client";

import FormLayout from "../../../../components/Auth/SignUp/Contributor/Participant/FormLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

export default function JobTitle() {
  const { formData, updateFormData } = useFormContext();
  const [jobTitle, setJobTitle] = useState(formData.jobTitle);
  const router = useRouter();

  const handleSubmit = () => {
    if (jobTitle) {
      updateFormData({ jobTitle });
      router.push("/auth/sign-up/participant/organization-type"); 
    }
  };

  const handleBack = () => {
    router.back();
  }

  return (
    <FormLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          What is your job title there?
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job title
          </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={handleBack}
            className="w-full bg-gray-800 text-white py-3 rounded-4xl font-medium hover:bg-gray-900 transition disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 text-white py-3 rounded-4xl font-medium hover:bg-gray-900 transition disabled:opacity-50"
            disabled={!jobTitle}
          >
            Next
          </button>
        </div>
      </div>
    </FormLayout>
  );
}
