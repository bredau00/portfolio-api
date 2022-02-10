const express = require('express');
const router = express.Router();


router.get('/', (res, req) => res.send({
    msg: "send conatct"
}))

module.exports = router;