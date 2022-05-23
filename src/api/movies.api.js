import axiosInstance from "./axiosInstance";

export async function getMovies() {
  return await axiosInstance.get('/all.json?api-key=Qd4sqUq0NjSCw9mSo95nVuJaYZMGDe7T');
}