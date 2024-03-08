import { dbconnection as db } from "../config/index.js";
class Cart {
  fetchCarts(req, res) {
    const qry = `
    SELECT cartID,Users.userID, Products.prodID, Cart.quantity, Products.amount*Cart.quantity as TotalAmount
    FROM Cart
    INNER JOIN Products ON Cart.prodID = Products.prodID
    INNER JOIN Users ON Cart.userID = Users.userID;
        
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
    SELECT cartID, Users.userID, Products.prodID, Cart.quantity, Products.amount*Cart.quantity
    FROM Cart
    INNER JOIN Products ON Cart.prodID = Products.prodID
    INNER JOIN Users ON Cart.userID = Users.userID;
    WHERE cartID=${req.params.id}
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
    WHERE cartID = ${req.params.id};`;
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
     WHERE cartID=${req.params.id}
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