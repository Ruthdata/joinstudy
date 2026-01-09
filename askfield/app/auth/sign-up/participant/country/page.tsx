"use client";

import FormLayout from "../../../../components/Auth/SignUp/Contributor/Participant/FormLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";
import { COUNTRIES } from "../../../../lib/constants/countries";

export default function Country() {
  const { formData, updateFormData } = useFormContext();
  const [country, setCountry] = useState(formData.country);
  const router = useRouter();

  const handleSubmit = () => {
    if (country) {
      updateFormData({ country });
      router.push("/auth/sign-up/participant/organization-name"); 
    }
  };

  const handleBack = () => {
    router.back();
  }

  return (
    <FormLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          What is your country of residence?
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country of residence
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition bg-white"
          >
            <option value="">Select a country</option>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex justify-between gap-4">
          <button
            onClick={handleBack}
            className="w-full bg-gray-800 text-white py-3 rounded-4xl font-medium hover:bg-gray-900 transition"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-800 text-white py-3 rounded-4xl font-medium hover:bg-gray-900 transition disabled:opacity-50"
            disabled={!country}
          >
            Next
          </button>
        </div>
      </div>
    </FormLayout>
  );
}