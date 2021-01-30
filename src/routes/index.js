const { Router } = require('express');
const router = Router();

const { getUsers, sampleCreateJob } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/job', sampleCreateJob);

module.exports = router;