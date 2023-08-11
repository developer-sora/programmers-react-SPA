export const request = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (error) {
    alert(error);
  }
};
