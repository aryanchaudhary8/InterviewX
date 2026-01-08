import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

/* CREATE SESSION */
export const useCreateSession = () => {
  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: (data) => sessionApi.createSession(data),
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to create room"),
  });
};

/* ACTIVE SESSIONS */
export const useActiveSessions = () => {
  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: () => sessionApi.getActiveSessions(),
    staleTime: 30_000,
  });
};

/* MY RECENT SESSIONS */
export const useMyRecentSessions = () => {
  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: () => sessionApi.getMyRecentSessions(),
    staleTime: 30_000,
  });
};

/* SESSION BY ID */
export const useSessionById = (id) => {
  return useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: Boolean(id),
    refetchInterval: 5000,
  });
};

/* JOIN SESSION */
export const useJoinSession = () => {
  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: (id) => sessionApi.joinSession(id),
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to join session"),
  });
};

/* END SESSION */
export const useEndSession = () => {
  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: (id) => sessionApi.endSession(id),
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) =>
      toast.error(error.response?.data?.message || "Failed to end session"),
  });
};
