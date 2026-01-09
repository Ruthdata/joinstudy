"use client";

import FormLayout from "../../../../components/Auth/SignUp/Contributor/Participant/FormLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

export default function OrganizationName() {
  const { formData, updateFormData } = useFormContext();
  const [organizationName, setOrganizationName] = useState(formData.organizationName);
  const router = useRouter();

  const handleSubmit = () => {
    if (organizationName) {
      updateFormData({ organizationName });
      router.push("/auth/sign-up/participant/job-title"); 
    }
  };

  const handleBack = () => {
    router.back();
  }

  return (
    <FormLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          What is the name of your organization?
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Organization name
          </label>
          <input
            type="text"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            placeholder="Enter organization name"
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
            disabled={!organizationName}
          >
            Next
          </button>
        </div>
      </div>
    </FormLayout>
  );
}
