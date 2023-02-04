import axios from "./Axios";

export const createBooks = async (payload) => {
  return await axios.post("addbooks", { ...payload });
};

export const getBooks = async (payload) => {
  return await axios.get(`books?pageNumber=${payload.pageNumber}&pageSize=${payload.pageSize}`);
};

export const updateBooks = async (payload) => {
  return await axios.put(`addbooks/${payload.id}`, { ...payload });
};

export const deleteBooks = async (payload) => {
  return await axios.delete(`addbooks/${payload._id}`, { payload });
};

export const getBooksById = async (payload) => {
  return await axios.get(`books/${payload._id}`, {...payload})
}
