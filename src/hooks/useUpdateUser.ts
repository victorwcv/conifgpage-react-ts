import { useState } from "react";
import { User } from "../types/User";

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const updateUser = async (
    userId: string,
    change: object,
    user: User | null,
    setUser: (user: any) => void
  ) => {
    try {
      setLoading(true);
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user, ...change }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user.");
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Failed to update user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading, error };
};
