import React, { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input, { InputProps } from "./Input";

interface PasswordInputProps extends Omit<InputProps, "type" | "rightIcon"> {
  showStrengthIndicator?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showStrengthIndicator = false, value, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    // Password strength calculation
    const calculateStrength = (password: string): number => {
      let strength = 0;
      if (password.length >= 8) strength++;
      if (password.length >= 12) strength++;
      if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^a-zA-Z0-9]/.test(password)) strength++;
      return strength;
    };

    const strength = showStrengthIndicator && value
      ? calculateStrength(value as string)
      : 0;

    const strengthConfig = [
      { label: "Weak", color: "bg-red-500", threshold: 2 },
      { label: "Fair", color: "bg-yellow-500", threshold: 3 },
      { label: "Good", color: "bg-blue-500", threshold: 4 },
      { label: "Strong", color: "bg-green-500", threshold: 5 },
    ];

    const currentStrength = strengthConfig.find(
      (config) => strength <= config.threshold
    ) || strengthConfig[0];

    return (
      <div>
        <Input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          value={value}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          }
        />

        {/* Password Strength Indicator */}
        {showStrengthIndicator && value && (
          <div className="mt-2 space-y-1">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((bar) => (
                <div
                  key={bar}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    bar <= strength
                      ? currentStrength.color
                      : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p
              className={`text-xs font-medium ${
                strength <= 2
                  ? "text-red-600"
                  : strength <= 3
                  ? "text-yellow-600"
                  : strength <= 4
                  ? "text-blue-600"
                  : "text-green-600"
              }`}
            >
              {strength > 0 ? `Password strength: ${currentStrength.label}` : ""}
            </p>
          </div>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;