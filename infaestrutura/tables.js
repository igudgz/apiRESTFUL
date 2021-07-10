const mongoose = require("mongoose");

const { serviceSchema } = require("./schemas");

class Tables {
  init(connection) {
    this.connection = connection;
  }
  createServices() {
    const ModelService = mongoose.model("Services", serviceSchema);
    return ModelService;
  }
}

module.exports = new Tables();
