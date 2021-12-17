import http from "../http";

class ReunionFormService {

 getAll() {

   return http.get("/ReunionForm");

 }

 get(id) {

   return http.get(`/ReunionForm/${id}`);

 }

 create(data) {

   return http.post("/ReunionForm", data);

 }

 update(id, data) {

   return http.put(`/ReunionForm/${id}`, data);

 }

 delete(id) {

   return http.delete(`/ReunionForm/${id}`);

 }

}

export default new ReunionFormService();