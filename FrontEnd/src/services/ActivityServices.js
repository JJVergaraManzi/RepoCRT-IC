import http from "../http";

class ActivitiesFormService {

 getAll() {

   return http.get("/ActivitiesForm");

 }

 get(id) {

   return http.get(`/ActivitiesForm/${id}`);

 }

 create(data) {

   return http.post("/ActivitiesForm", data);

 }

 update(id, data) {

   return http.put(`/ActivitiesForm/${id}`, data);

 }

 delete(id) {

   return http.delete(`/ActivitiesForm/${id}`);

 }

}

export default new ActivitiesFormService();