// Get data from local storage
export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) return null;
    return JSON.parse(serializedValue) as T;
  } catch (error) {
    throw new Error(
      'Error occurred while fetching your data. Please try again.'
    );
  }
};

// Set data in localStorage
export const setLocalStorage = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    throw new Error(
      'Error occurred while saving your data. Please try again.'
    );
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    throw new Error();
  }
};

export const clearLocalStorage = () => localStorage.clear();
