import React, { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // You can use clsx or tailwind-merge

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      helperText,
      required,
      leftIcon,
      rightIcon,
      variant = "default",
      fullWidth = true,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseInputStyles = cn(
      "px-4 py-2.5 text-sm transition-all duration-200",
      "placeholder:text-gray-400",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
      "focus:outline-none focus:ring-2 focus:ring-offset-0",
      leftIcon && "pl-11",
      rightIcon && "pr-11"
    );

    const variantStyles = {
      default: cn(
        "border border-gray-300 rounded-lg bg-white",
        "hover:border-gray-400",
        "focus:border-purple-500 focus:ring-purple-500",
        error && "border-red-300 focus:border-red-500 focus:ring-red-500"
      ),
      filled: cn(
        "border-0 rounded-lg bg-gray-100",
        "hover:bg-gray-200",
        "focus:bg-white focus:ring-purple-500",
        error && "bg-red-50 focus:bg-white focus:ring-red-500"
      ),
      outlined: cn(
        "border-2 border-gray-300 rounded-lg bg-transparent",
        "hover:border-gray-400",
        "focus:border-purple-500 focus:ring-purple-500",
        error && "border-red-300 focus:border-red-500 focus:ring-red-500"
      ),
    };

    return (
      <div className={cn(fullWidth && "w-full")}>
        {/* Label */}
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            type={type}
            className={cn(
              baseInputStyles,
              variantStyles[variant],
              fullWidth && "w-full",
              className
            )}
            ref={ref}
            disabled={disabled}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={
              error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined
            }
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={`${props.id}-error`}
            className="mt-1.5 text-xs text-red-600 flex items-center gap-1"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Helper Text */}
        {helperText && !error && (
          <p id={`${props.id}-helper`} className="mt-1.5 text-xs text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;