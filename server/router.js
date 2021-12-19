const router = require('express').Router();
const controller = require('./controller.js');

router.route('/students')
    .get(controller.getStudents)
    .post(controller.createStudent)
router.route('/students/:id')
    .put(controller.updateStudent)
    .delete(controller.deleteStudent)

module.exports = router;
