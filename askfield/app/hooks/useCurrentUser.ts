"use client";

import { useState, useEffect } from "react";
import { getStoredToken } from "../utils/user";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: string;
  profileCompleted: boolean;
  contributorProfile?: Record<string, unknown>;
  participantProfile?: Record<string, unknown>;
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = getStoredToken();
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          setError(data.message);
        }
      } catch {
        setError("Failed to fetch user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const getInitials = () => {
    if (!user) return "??";
    return `${user.firstName?.[0] ?? ""}${user.lastName?.[0] ?? ""}`.toUpperCase();
  };

  const getFullName = () => {
    if (!user) return "";
    return `${user.firstName} ${user.lastName}`;
  };

  return { user, loading, error, getInitials, getFullName };
};