const moment = require("moment");
const { createServices } = require("../infaestrutura/tables");
const Tables = require("../infaestrutura/tables");

class Service {
  constructor() {
    this.serviceList = createServices();
  }
  create(service, res) {
    //validations//

    const date = moment(service.date, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );
    service.date = date;
    const createDate = moment(service.createDate).format("YYYY-MM-DD HH:MM:SS");
    service.create_date = createDate;
    const dateChecked = moment(date).isSameOrAfter(createDate);

    const customerChecked = service.customer.length >= 5;
    const validations = [
      {
        name: "date",
        valid: dateChecked,
        mensage: "Date must be greater than or equal to date equal",
      },
      {
        name: "customer",
        valid: customerChecked,
        mensage: "Customer must be at least five characters long",
      },
    ];

    const errors = validations.filter((camp) => !camp.valid);
    const existErrors = errors.length;

    if (existErrors) {
      res.status(400).json(errors);
    } else {
      this.serviceList(service)
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => res.status(400).json(err));
    }
  }
  find(res) {
    this.serviceList.find({}, function (err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
  findId(id, res) {
    this.serviceList.findById(id, function (err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    });
  }
  update(id, values, res) {
    if (values.date) {
      values.date = moment(values.date, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }
    this.serviceList.findByIdAndUpdate(
      id,
      { $set: values },
      { new: true },
      function (err, result) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  }
  delete(id, res) {
    this.serviceList.findByIdAndDelete(
      id,
      { new: true },
      function (err, result) {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  }
}

module.exports = new Service();
