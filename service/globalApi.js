import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createNewResume = async (data) => {
  const response = await axiosClient.post("/user-resumes", data);
  return response;
};

const getResumes = async (userEmail) => {
  const response = await axiosClient.get(
    `/user-resumes?filters[userEmail][$eq]=${userEmail}`
  );
  return response;
};

const updateResumeDetail = async (id, data) => {
  const response = await axiosClient.put(`/user-resumes/${id}`, data);
  return response;
};

export { createNewResume, getResumes, updateResumeDetail };
