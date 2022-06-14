// 引入express
const express = require("express");

// 引入连接池
const pool = require("../mysql/mysql");

// 创建路由器
const router = express.Router();

// 路由---
// 1.请求所有商品信息
// 请求方式 get
// http://127.0.0.1:3000/product/list
router.get("/list", (req, res, next) => {
  pool.query("select * from py_camera", (err, result) => {
    if (err) {
      next(err);
      return;
    }
    // 判断长度 确定是否有值
    if (result.length) {
      res.send({ code: 1, msg: "ok", data: result });
    } else {
      res.send({ code: 0, msg: "服务器端错误" });
    }
  });
});

// 2.请求单一商品
// 请求方式 get
// 接口地址 http://127.0.0.1:3000/product/single/:c_id  (:c_id 替换成需要传入商品的id即可)
// 参数 c_id
router.get("/single/:c_id", (req, res, next) => {
  let obj = req.params;
  obj.c_id *= 1;
  console.log(obj);
  let sql = "select * from py_camera where c_id=?";
  pool.query(sql, [obj.c_id], (err, result) => {
    if (err) {
      next(err);
      return;
    }
    if (result.length) {
      res.send({ code: 1, msg: "ok", data: result });
    } else {
      res.send({ code: 0, msg: "未找到对应id的商品" });
    }
  });
});

// 3.新品推荐 前10条
// 请求方式 get
// http://127.0.0.1:3000/product/newcamera
router.get("/newcamera", (req, res, next) => {
  let sql = "select * from py_camera ORDER BY c_shelf_time desc LIMIT 0,10";
  pool.query(sql, (err, result) => {
    console.log(result);
    if (err) {
      next(err);
      return;
    }
    if (result.length) {
      res.send({ code: 1, msg: "最新10条数据", data: result });
    }
  });
});
// 导出
module.exports = router;
