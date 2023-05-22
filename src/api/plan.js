import { apiInstance } from "./index.js";

const api = apiInstance();

export async function listPlan(userid, success, fail) {
    //api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/plan/${userid}`).then(success).catch(fail);
}

export async function addLocation(location, success, fail) {
    //api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.post(`/plan/location`, JSON.stringify(location)).then(success).catch(fail);
}

export async function addPlan(Plan, success, fail) {
    //api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.post(`/plan`, JSON.stringify(Plan)).then(success).catch(fail);
}

export async function getPlanDetail(planId, success, fail) {
    //api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
    await api.get(`/plan/view/${planId}`).then(success).catch(fail);
}