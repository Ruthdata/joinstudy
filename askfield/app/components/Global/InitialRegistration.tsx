"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const InitialRegistration = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
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
    role: "",
    identityDocument: "",
    supportingDocument: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    identity: null,
    supporting: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "identity" | "supporting",
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Here you would upload to your server/cloud storage
    const formDataFile = new FormData();
    formDataFile.append("file", file);

    try {
      // TODO: Replace with your actual file upload endpoint
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formDataFile,
      // });
      // const data = await response.json();

      // Mock URL for demonstration
      const mockUrl = `https://example.com/uploads/${file.name}`;

      setUploadedFiles((prev) => ({
        ...prev,
        [type]: file.name,
      }));

      // Update form data
      setFormData((prev) => ({
        ...prev,
        [type === "identity" ? "identityDocument" : "supportingDocument"]:
          mockUrl,
      }));
    } catch (error) {
      console.error("File upload failed:", error);
      alert("File upload failed. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.gender ||
      !formData.role ||
      !formData.birthMonth ||
      !formData.birthDay ||
      !formData.birthYear ||
      !formData.identityDocument
    ) {
      setSubmitError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Construct date of birth
    const dateOfBirth = `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`;

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber || "",
          gender:
            formData.gender === "other"
              ? formData.genderOther
              : formData.gender,
          dateOfBirth: dateOfBirth,
          identityDocument: formData.identityDocument,
          supportingDocument: formData.supportingDocument || "",
          role: formData.role,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to email verification pending page
        router.push(
          `/verify-pending?email=${encodeURIComponent(formData.email)}`,
        );
      } else {
        setSubmitError(
          data.message || "Registration failed. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-4xl font-bold mb-4">Create Your Account</h2>
            <p className="text-gray-600 mb-8">
              Please enter your information to get started. You&apos;ll complete
              your full profile after verifying your email.
            </p>

            {/* Error Message */}
            {submitError && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password (min. 6 characters)"
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+234 XXX XXX XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Date of Birth */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    name="birthMonth"
                    value={formData.birthMonth}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>

                  <input
                    type="number"
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={handleChange}
                    placeholder="Day"
                    min="1"
                    max="31"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />

                  <input
                    type="number"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    placeholder="Year"
                    min="1900"
                    max="2024"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender<span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>

                {formData.gender === "other" && (
                  <div className="mt-4">
                    <input
                      type="text"
                      name="genderOther"
                      value={formData.genderOther}
                      onChange={handleChange}
                      placeholder="Please specify"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                )}
              </div>

              {/* Role Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I want to register as<span className="text-red-500">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select role</option>
                  <option value="participant">Participant</option>
                  <option value="contributor">Contributor</option>
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.role === "participant" &&
                    "Participants contribute to research studies and earn rewards."}
                  {formData.role === "contributor" &&
                    "Contributors create and manage research projects."}
                </p>
              </div>

              {/* Identity Document Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Identity Document<span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Upload a government-issued ID (passport, driver&apos;s
                  license, national ID)
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e, "identity")}
                    className="hidden"
                    id="identity-upload"
                    required
                  />
                  <label
                    htmlFor="identity-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-700"
                  >
                    {uploadedFiles.identity ? (
                      <span className="text-green-600">
                        ✓ {uploadedFiles.identity}
                      </span>
                    ) : (
                      <span>Click to upload or drag and drop</span>
                    )}
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    PDF, JPG, PNG (max 10MB)
                  </p>
                </div>
              </div>

              {/* Supporting Document Upload (Optional) */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supporting Document (Optional)
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Upload additional verification document if available
                </p>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e, "supporting")}
                    className="hidden"
                    id="supporting-upload"
                  />
                  <label
                    htmlFor="supporting-upload"
                    className="cursor-pointer text-blue-600 hover:text-blue-700"
                  >
                    {uploadedFiles.supporting ? (
                      <span className="text-green-600">
                        ✓ {uploadedFiles.supporting}
                      </span>
                    ) : (
                      <span>Click to upload or drag and drop</span>
                    )}
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    PDF, JPG, PNG (max 10MB)
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </button>

              <p className="text-sm text-gray-500 mt-4 text-center">
                After creating your account, you&apos;ll receive a verification
                email. Once verified, you can log in and complete your detailed
                profile.
              </p>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-lg overflow-hidden">
              <Image
                src="/images/shared/magnifying-glass.svg"
                alt="Magnifying glass over data"
                width={588}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialRegistration;
