import axiosApi from "../../../utils/axios";
import axios from "axios";

export const getProfile = async () => {
  try {
    const response = await axiosApi.get("/user/getInfo");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const updateUserCredit = async ({
  newUserName,
  oldPassword,
  newPassword,
}) => {
  try {
    const response = await axiosApi.post("/user/update-user-credit", {
      newUserName,
      oldPassword,
      newPassword,
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      data: error.response.data,
    };
  }
};
