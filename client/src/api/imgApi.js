import axios from "axios";

export const postImage = async (formData) => {
  return axios.post("http://localhost:3000/upload", formData);
};
