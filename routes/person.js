const personController = require("../controllers/person");
const express = require("express");

const router = express.Router();

//http://localhost:3100/api/v1/persons/new-person
router.post("/new-person",personController.createPerson);
//http://localhost:3100/api/v1/persons
router.get("/",personController.getAllPersons);
//http://localhost:3100/api/v1/persons?id=****
router.get("/:id",personController.getPersonById);
//http://localhost:3100/api/v1/persons?id=****
router.patch("/:id",personController.updatePersonById);
/* router.put("/:id",personController.updatePersonById); */
//http://localhost:3100/api/v1/persons?id=****
router.delete("/:id",personController.deletePersonById);

module.exports = router;