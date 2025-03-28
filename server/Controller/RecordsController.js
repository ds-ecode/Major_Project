const Medical = require("../Model/Records");

const medicalController = {
  // Create new medical record
  createMedical: async (req, res) => {
    try {
      const { Userid, Type, Date, Doctor, Category, action } = req.body;

      const newMedical = new Medical({
        Userid,
        Type,
        Date,
        Doctor,
        Category,
        action,
      });

      const savedMedical = await newMedical.save();
      res.status(201).json(savedMedical);
    } catch (error) {
      res.status(500).json({
        message: "Error creating medical record",
        error: error.message,
      });
    }
  },

  // Get all medical records
  getAllMedicals: async (req, res) => {
    try {
      const medicals = await Medical.find({});
      res.status(200).json(medicals);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching medical records",
        error: error.message,
      });
    }
  },

  // Get medical records by user ID
  getMedicalsByUserId: async (req, res) => {
    try {
      const medicals = await Medical.find({ Userid: req.params.userId });
      if (!medicals.length) {
        return res
          .status(404)
          .json({ message: "No medical records found for this user" });
      }
      res.status(200).json(medicals);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching medical records",
        error: error.message,
      });
    }
  },

  // Get medical record by ID
  getMedicalById: async (req, res) => {
    try {
      const medical = await Medical.findById(req.params.id);
      if (!medical) {
        return res.status(404).json({ message: "Medical record not found" });
      }
      res.status(200).json(medical);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching medical record",
        error: error.message,
      });
    }
  },

  // Update medical record
  updateMedical: async (req, res) => {
    try {
      const updatedMedical = await Medical.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true },
      );

      if (!updatedMedical) {
        return res.status(404).json({ message: "Medical record not found" });
      }

      res.status(200).json(updatedMedical);
    } catch (error) {
      res.status(500).json({
        message: "Error updating medical record",
        error: error.message,
      });
    }
  },

  // Delete medical record
  deleteMedical: async (req, res) => {
    try {
      const deletedMedical = await Medical.findByIdAndDelete(req.params.id);
      if (!deletedMedical) {
        return res.status(404).json({ message: "Medical record not found" });
      }
      res.status(200).json({ message: "Medical record deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting medical record",
        error: error.message,
      });
    }
  },

  // Get medical records by category
  getMedicalsByCategory: async (req, res) => {
    try {
      const medicals = await Medical.find({ Category: req.params.category });
      if (!medicals.length) {
        return res
          .status(404)
          .json({ message: "No medical records found in this category" });
      }
      res.status(200).json(medicals);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching medical records by category",
        error: error.message,
      });
    }
  },

  // Get medical records by date range
  getMedicalsByDateRange: async (req, res) => {
    try {
      const { startDate, endDate } = req.query;
      const medicals = await Medical.find({
        Date: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      });
      res.status(200).json(medicals);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching medical records by date range",
        error: error.message,
      });
    }
  },
};

module.exports = medicalController;
