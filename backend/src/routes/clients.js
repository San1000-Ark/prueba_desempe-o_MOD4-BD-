import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// GET all clients
router.get("/", (req, res) => {
    pool.query("SELECT * FROM client", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET client by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("SELECT * FROM client WHERE id_client=?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "CLIENT NOT FOUND" });
    res.json(results[0]);
  });
});

// POST create new client
router.post("/", (req, res) => {
  const { name_client, identify_client, address, phone_number, email } =req.body;
  pool.query("INSERT INTO client (name_client, identify_client, address, phone_number, email) VALUES (?, ?, ?, ?, ?)",[name_client, identify_client, address, phone_number, email],(err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({id: results.insertId,name_client,identify_client,address,phone_number,email,});
    }
  );
});

// PUT update client
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name_client, identify_client, address, phone_number, email } =req.body;
  pool.query("UPDATE client SET name_client=?, identify_client=?, address=?, phone_number=?, email=? WHERE id_client=?",[name_client, identify_client, address, phone_number, email, id],(err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: "CLIENT NOT FOUND" });
      res.json({ message: "CLIENT UPDATED" });
    }
  );
});

// DELETE client
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  pool.query("DELETE FROM client WHERE id_client=?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: "CLIENT NOT FOUND" });
    res.json({ message: "CLIENT ELIMINATED" });
  });
});

export default router;
