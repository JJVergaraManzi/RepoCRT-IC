import axios from 'axios';
const url = "http://localhost:1337/api/"

export const createReunion = (reunion) =>axios.post( url+ "reunion-forms", reunion);
export const createActivities = (activities) =>axios.post( url+ "activities-forms", activities);
export const updateReunion = (id, updatedReunion) => axios.put(url + "reunion-forms/:" + id, updatedReunion)
export const updateActivities = (id, updatedActivities) => axios.put(url + "activities-forms/:" + id, updatedActivities)
export const deleteReunion = (id, deletedReunion) => axios.delete(url + "reunion-forms/:" + id, deletedReunion)
export const deleteActivities = (id, deletedActivities) => axios.delete(url + "activities-forms/:" + id, deletedActivities)