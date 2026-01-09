"use client";

import FormLayout from "../../../../components/Auth/SignUp/Contributor/Participant/FormLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

export default function Password() {
  const { formData, updateFormData } = useFormContext();
  const [password, setPassword] = useState(formData.password);

  const [confirmPassword, setConfirmPassword] = useState(
    formData.confirmPassword
  );
  const router = useRouter();

  const handleSubmit = () => {
    if (password && confirmPassword) {
      updateFormData({ password, confirmPassword });
      // router.push("/auth/sign-up/participant/password");
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <FormLayout>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Cool, now set a password for your account
        </h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
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
            disabled={!password || !confirmPassword}
          >
            Submit
          </button>
        </div>
      </div>
    </FormLayout>
  );
}
