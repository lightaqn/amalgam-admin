import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const token_ = JSON.parse(
  localStorage.getItem("persist:root").user
).currentUser;

const TOKEN = JSON.parse(token_).accessToken;

export const publicCall = axios.create({
  baseURL: BASE_URL,
});

export const userCall = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
