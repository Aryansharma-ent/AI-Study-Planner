import { api } from "./Client"

export const postPlan = (data) => api.post('/api/plans/generate',data)
export const getPlan = (id) => api.get(`/api/plans/${id}`);