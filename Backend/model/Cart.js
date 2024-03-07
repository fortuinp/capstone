import { dbconnection as db } from "../config/index.js";
class Cart {
  fetchCart(req, res) {
    const qry = `
        SELECT prodID,prodName,quantity, amount,prodCategory,prodDescription,prodUrl,prodUrl2
        FROM Cart
        
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchCart(req, res) {
    const qry = `
        SELECT prodID,prodName,quantity, amount,prodCategory,prodDescription,prodUrl,prodUrl2
        FROM Cart
        WHERE prodID=${req.params.id}
        `;
    db.query(qry, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        result: result[0],
      });
    });
  }
  addCart(req, res) {
    const qry = `INSERT INTO Cart SET ?;`;

    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "new item was added",
      });
    });
  }

  async updateCart(req, res) {
    const qry = `
    UPDATE Cart 
    SET ?
    WHERE prodID = ${req.params.id};`;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Cart updated",
      });
    });
  }

  deleteCart(req, res) {
    const qry = `
     DELETE FROM Cart
     WHERE prodID=${req.params.id}
  `;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Cart deleted",
      });
    });
  }
}
export { Cart };