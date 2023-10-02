const { response } = require("express");
const workerModel = require("../models/worker");

const createWorker = async (req, res) => {
    try {
        const workerData = req.body;
        const newWorker = new workerModel({ ...workerData });
        await newWorker.save();
        res.status(201).json(newWorker)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
};

const getAllWorkers = async (req, res) => {
    try {
        const allWorkers = await workerModel.find();
        res.status(200).json(allWorkers)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getWorkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const workerFind = await workerModel.findById(id);
        console.log(workerFind)
        res.status(200).json(workerFind);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const updateWorkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const workerDataEdit = req.body;
        console.log(workerDataEdit);
        await workerModel.findByIdAndUpdate(id, workerDataEdit);
        res.status(200).json({ message: "Cambio exitoso" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteWorkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await workerModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Usuario eliminado exitosamente" })
    } catch (err) {
        res.status(400).json({ message: err })
    }
};



module.exports = {
    createWorker,
    getAllWorkers,
    getWorkerById,
    updateWorkerById,
    deleteWorkerById
};