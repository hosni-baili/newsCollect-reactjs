import http from "./http-common";

class SourcesDataService {
  getAll(params) {
    return http.get("/source", { params });
  }

  addSource(params) {
    return http.post("/source", {params});
  }

  getAllByCategory(params) {
    console.log(params)
    return http.get("/source/category", { params });
  }

  get(id) {
    return http.get(`/source/${id}`);
  }

  create(data) {
    return http.post("/source", {data});
  }

  update(id, data) {
    return http.put(`/source/${id}`, data);
  }

  delete(id) {
    return http.delete(`/source/${id}`);
  }

  deleteAll() {
    return http.delete("/source");
  }

  // other CRUD methods
}

export default new SourcesDataService();