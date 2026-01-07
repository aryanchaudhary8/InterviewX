import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

/* =========================
   SESSION APIS (FIXED)
========================= */

export const getActiveSessions = async () => {
  const res = await axios.get(
    `${API_URL}/api/sessions/active`,
    { withCredentials: true }
  );
  return res.data;
};

export const getMyRecentSessions = async () => {
  const res = await axios.get(
    `${API_URL}/api/sessions/my-recent`,
    { withCredentials: true }
  );
  return res.data;
};

export const createSession = async (data) => {
  const res = await axios.post(
    `${API_URL}/api/sessions`,
    data,
    { withCredentials: true }
  );
  return res.data;
};

export const joinSession = async (id) => {
  const res = await axios.post(
    `${API_URL}/api/sessions/${id}/join`,
    {},
    { withCredentials: true }
  );
  return res.data;
};

export const endSession = async (id) => {
  const res = await axios.post(
    `${API_URL}/api/sessions/${id}/end`,
    {},
    { withCredentials: true }
  );
  return res.data;
};
