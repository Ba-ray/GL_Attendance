const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/attendance/class', takeAttendanceViaRasp);

module.exports = router;