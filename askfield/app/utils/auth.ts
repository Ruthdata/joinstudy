import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { generateCSRFToken } from "./csrf";

export const handleAuthSuccess = (
  data: { user: { role: string; profileCompleted: boolean }; token: string },
  router: AppRouterInstance
) => {
  // Store token
  localStorage.setItem("token", data.token);

  // Store in cookies for middleware to read
  document.cookie = `accessToken=${data.token}; path=/; SameSite=Strict`;
  document.cookie = `user=${encodeURIComponent(JSON.stringify(data.user))}; path=/; SameSite=Strict`;

  // Generate CSRF token
  const csrfToken = generateCSRFToken();
  sessionStorage.setItem("csrf_token", csrfToken);

  // Redirect based on role and profile completion
  const { role, profileCompleted } = data.user;

  if (!profileCompleted) {
    router.push("/dashboard/complete-profile");
  } else {
    router.push(`/dashboard/${role}`);
  }
};

export const logout = (router: AppRouterInstance) => {
  localStorage.removeItem("token");
  sessionStorage.clear();
  // Clear cookies
  document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  router.push("/auth/login");
};

