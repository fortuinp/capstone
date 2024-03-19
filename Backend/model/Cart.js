import { dbconnection as db } from "../config/index.js";
class Cart {
  fetchCart(req, res) {
    const qry = `
    SELECT cartID, Users.userID, Users.firstname,Products.prodID,Products.prodName,Products.prodCategory,Products.prodUrl, Cart.quantity, Products.amount,Products.amount*Cart.quantity as TotalAmount
    FROM Cart
    INNER JOIN Products ON Cart.prodID = Products.prodID
    INNER JOIN Users ON Cart.userID = Users.userID
    where Users.userID= ${req.params.id};
        
        `;
    db.query(qry, [req.body], (err, results) => {
      if (err) throw err ;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  // fetchCart(req, res) {
  //   const qry = `
  //   SELECT cartID, Users.userID, Users.firstname,Products.prodID,Products.prodName,Products.prodCategory,Products.prodUrl, Cart.quantity, Products.amount*Cart.quantity as TotalAmount
  //   FROM Cart
  //   INNER JOIN Products ON Cart.prodID = Products.prodID
  //   INNER JOIN Users ON Cart.userID = Users.userID
  //   WHERE cartID = ${req.params.id};
  //       `;
  //   db.query(qry, (err, result) => {
  //     if (err) throw err;
  //     res.json({
  //       status: res.statusCode,
  //       result: result[0],
  //     });
  //   });
  // }
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

  async updateCartItem(req, res) {
    const qry = `
    UPDATE Cart 
    SET ?
    WHERE cartID = ?;`;
    db.query(qry,[req.body, req.params.id], (err) => {
  
        if (err) throw err;
        res.json({
          status: res.statusCode,
          msg: "cart updated",
        });
      });
    }

  deleteCart(req, res) {
    const qry = `
     DELETE FROM Cart
     WHERE userID=${req.params.id}
  `;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "Cart deleted",
      });
    });
  }
  deleteCartItem(req, res) {
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