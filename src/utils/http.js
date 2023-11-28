// ! CRUD -> R:READ => GET
export const get = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Something happened ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("🚀 ~ file: http.js:14 ~ get ~ error:", error);
  }
};

// ! CRUD -> C:CREATE => POST
export const post = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        `Something happened ${response.status} ${response.statusText}`
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

// ! CRUD -> U:UPDATE => PUT

// ! CRUD -> D:DELETE => DELETE
export const deleteItem = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Something happened ${response.status} ${response.statusText}`
      );
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
