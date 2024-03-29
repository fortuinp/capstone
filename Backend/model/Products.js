import { dbconnection as db } from "../config/index.js";
class Products {
  fetchProducts(req, res) {
    const qry = `
        SELECT prodID,prodName,quantity, amount,prodCategory,prodDescription,prodUrl,prodUrl2
        FROM Products
        
        `;
    db.query(qry, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  fetchProduct(req, res) {
    const qry = `
        SELECT prodID,prodName,quantity, amount,prodCategory,prodDescription,prodUrl,prodUrl2
        FROM Products
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
  addProduct(req, res) {
    const qry = `INSERT INTO Products SET ?;`;

    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "new item was added",
      });
    });
  }

  async updateProduct(req, res) {
    const qry = `
    UPDATE Products 
    SET ?
    WHERE prodID = ${req.params.id};`;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "products updated",
      });
    });
  }

  deleteProduct(req, res) {
    const qry = `
     DELETE FROM Products
     WHERE prodID=${req.params.id}
  `;
    db.query(qry, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "product deleted",
      });
    });
  }
}
export { Products };
