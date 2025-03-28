const express = require('express');
const router = express.Router();
const medicalController = require('../Controller/RecordsController'); // Adjust path as needed

// Create a new medical record
router.post('/medical', medicalController.createMedical);

// Get all medical records
router.get('/medical', medicalController.getAllMedicals);

// Get medical records by user ID
router.get('/medical/user/:userId', medicalController.getMedicalsByUserId);

// Get medical record by ID
router.get('/medical/:id', medicalController.getMedicalById);

// Update medical record
router.put('/medical/:id', medicalController.updateMedical);

// Delete medical record
router.delete('/medical/:id', medicalController.deleteMedical);

// Get medical records by category
router.get('/medical/category/:category', medicalController.getMedicalsByCategory);

// Get medical records by date range
router.get('/medical/date-range', medicalController.getMedicalsByDateRange);

module.exports = router;