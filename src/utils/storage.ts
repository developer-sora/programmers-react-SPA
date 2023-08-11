export const storage = localStorage;

export const getItem = (key: string, defaultValue: any) => {
  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setItem = (key: string, value: any) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    console.error("setItem 오류");
  }
};
