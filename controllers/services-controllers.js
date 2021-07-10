const Service = require("../models/services");

module.exports = (app) => {
  //Read.
  app.get("/services/:id", (req, res) => {
    const { id } = req.params;
    if (id) {
      Service.findId(id, res);
    } else {
      Service.find(res);
    }
  });
  //Create.
  app.post("/services/", (req, res) => {
    const service = req.body;
    Service.create(service, res);
  });
  //Update.
  app.patch("/services/:id", (req, res) => {
    const id = req.params.id;
    const values = req.body;
    Service.update(id, values, res);
  });
  //Delete.
  app.delete("/services/:id", (req, res) => {
    const id = req.params.id;
    Service.delete(id, res);
  });
};
