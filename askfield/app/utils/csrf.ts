export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

export const getCSRFToken = (): string | null => {
  return sessionStorage.getItem("csrf_token");
};

export const validateCSRFToken = (token: string): boolean => {
  const stored = getCSRFToken();
  return stored !== null && stored === token;
};