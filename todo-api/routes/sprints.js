const express = require('express');
const router = express.Router();
const sprintController = require('../controllers/sprintController');

// Endpoints
router.get('/', sprintController.getAllSprints);
router.get('/:id', sprintController.getSprintById);
router.post('/', sprintController.createSprint);
router.put('/:id', sprintController.updateSprint);
router.delete('/:id', sprintController.deleteSprint);

// Agregar tarea a sprint
router.put('/:id/add-task/:taskId', sprintController.addTaskToSprint);

module.exports = router;
