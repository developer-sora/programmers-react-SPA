export const request = async (url: string, options = {}) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (error) {
    alert(error);
  }
};
