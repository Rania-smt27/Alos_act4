module.exports = app => {
  const Jobs = require("../controllers/Job.controller.js");

  var router = require("express").Router();

  // Create a new Job
  router.post("/", Jobs.create);

  // Retrieve all Jobs
  router.get("/", Jobs.findAll);

  // Retrieve all published Jobs
  router.get("/published", Jobs.findAllPublished);

  // Retrieve a single Job with id
  router.get("/:id", Jobs.findOne);

  // Update a Job with id
  router.put("/:id", Jobs.update);

  // Delete a Job with id
  router.delete("/:id", Jobs.delete);

  // Delete all Jobs
  router.delete("/", Jobs.deleteAll);

  app.use('/api/Jobs', router);
};
