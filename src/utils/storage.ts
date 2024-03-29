export const getItem = (key: string) => {
  return localStorage.getItem(key);
};

export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};
