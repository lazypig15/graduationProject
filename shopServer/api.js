const router = require("express").Router();
const pool = require("./dataBase.js");
module.exports = router;

router.get("/userLogin", (req, res) => {
    pool.query("select * from user where username=? and password=?", [req.query.username, req.query.password], (err, data) => {
        if (data.length == 0) {
            res.json({
                code: 0
            })
            return;
        }
        res.json({
            code: 1,
            infor: {username:req.query.username,password:req.query.password}
        })
    })
})
router.get("/data", (req, res) => {
    pool.query("INSERT INTO `merchant1` (`title`, `showLarge`, `show`, `price`, `averageMark`,`sale`, `type`) VALUES(?,?,?,?,?,?,?)", [req.query.title,JSON.parse(req.query.showLarge).img,JSON.parse(req.query.show).img,req.query.price,5,0,['热销']], (error, data) => {
        if (error) {
            res.json({
                code: 0,
                id:req.query.shopId
            })
            return;
        }
        res.json({
            code: 1,
            id:req.query.shopId
        });
    })
})