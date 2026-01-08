import axiosApi from "../../../utils/axios";

export const signIn = async (username, password) => {
  if (!username || !password) return false;
  try {
    const response = await axiosApi.post("/login", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};
