"use client";

import FormLayout from "../../../../components/Auth/SignUp/Contributor/Participant/FormLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

export default function OrganizationName() {
  const { formData, updateFormData } = useFormContext();
  const [firstName, setFirstName] = useState(
    formData.firstName
  );
 
  const [lastName, setLastName] = useState(
    formData.lastName
  );
  const router = useRouter();

  const handleSubmit = () => {
    if (firstName && lastName) {
      updateFormData({ firstName, lastName });
      router.push("/auth/sign-up/participant/password");
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <FormLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          What should we call you?
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
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
            disabled={!firstName || !lastName}
          >
            Next
          </button>
        </div>
      </div>
    </FormLayout>
  );
}
