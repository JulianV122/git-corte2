const { response } = require("express");
const personModel = require("../models/person");

const createPerson = async (req, res) => {
    try {
        const personData = req.body;
        const newPerson = new personModel({ ...personData });
        await newPerson.save();
        res.status(201).json(newPerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllPersons = async (req, res) => {
    try {
        const allPersons = await personModel.find();
        res.status(200).json(allPersons)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getPersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const personFind = await personModel.findById(id);
        console.log(personFind)
        res.status(200).json(personFind);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const updatePersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const personDataEdit = req.body;
        console.log(personDataEdit);
        await personModel.findByIdAndUpdate(id, personDataEdit);
        res.status(200).json({ message: "Cambio exitoso" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletePersonById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await personModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Usuario eliminado exitosamente" })
    } catch (err) {
        res.status(400).json({ message: err })
    }
};



module.exports = {
    createPerson,
    getAllPersons,
    getPersonById,
    updatePersonById,
    deletePersonById
};