const router = require('express').Router();
const controller = require('./controller.js');

router.route('/students')
    .get(controller.getStudents)
    //.post
router.route('/students/:id')
    //.put
    //.delete

module.exports = router;
