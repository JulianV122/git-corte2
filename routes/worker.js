const workerController = require("../controllers/worker");
const express = require("express");

const router = express.Router();

//http://localhost:3100/api/v1/workers/new-worker
router.post("/new-worker",workerController.createWorker);
//http://localhost:3100/api/v1/workers
router.get("/",workerController.getAllWorkers);
//http://localhost:3100/api/v1/workers?id=****
router.get("/:id",workerController.getWorkerById);
//http://localhost:3100/api/v1/workers?id=****
router.patch("/:id",workerController.updateWorkerById);
/* router.put("/:id",workerController.updateworkerById); */
//http://localhost:3100/api/v1/workers?id=****
router.delete("/:id",workerController.deleteWorkerById);

module.exports = router;