import axiosApi from "../../../utils/axios";

export const uploadRequest = async ({ taskName, file }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("taskName", taskName);
    const response = await axiosApi.post("/service/phoneUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const uploadPreRequest = async ({ taskName, countryCode, zipIndex }) => {
  try {
    const formData = new FormData();
    formData.append("zipIndex", zipIndex);
    formData.append("taskName", taskName);
    formData.append("countryCode", countryCode);
    const response = await axiosApi.post("/service/phonePreUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const uploadSocialRequest = async ({
  file,
  social,
  taskName,
  activeDay,
  countryCode,
}) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("social", social);
    formData.append("taskName", taskName);
    formData.append("activeDay", activeDay);
    formData.append("countryCode", countryCode);
    const response = await axiosApi.post("/service/socialUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const uploadSocialPrePreRequest = async ({
  social,
  taskName,
  activeDay,
  countryCode,
  zipIndex,
}) => {
  try {
    const formData = new FormData();
    formData.append("social", social);
    formData.append("zipIndex", zipIndex);
    formData.append("taskName", taskName);
    formData.append("activeDay", activeDay);
    formData.append("countryCode", countryCode);
    const response = await axiosApi.post("/service/socialPreUpload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export const phoneDetectList = async ({ pageIndex, pageSize }) => {
  if (pageIndex == null || pageSize == null) return null;
  try {
    const response = await axiosApi.post("/service/phone-detect-list", {
      pageIndex,
      pageSize,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

export const socialDetectList = async ({ pageIndex, pageSize }) => {
  if (pageIndex == null || pageSize == null) return null;
  try {
    const response = await axiosApi.post("/service/social-detect-list", {
      pageIndex,
      pageSize,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

export const phoneDeleteRow = async ({ id }) => {
  if (!id) return null;
  try {
    const response = await axiosApi.post("/service/phone-delete-row", {
      id,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};

export const socialDeleteRow = async ({ id }) => {
  if (!id) return null;
  try {
    const response = await axiosApi.post("/service/social-delete-row", {
      id,
    });
    return response.data;
  } catch (error) {
    console.log("ERROR:", error);
    return null;
  }
};
