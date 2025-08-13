import fs from "fs";
import csv from "csv-parser";
import mysql from "mysql2";

// function to insert dates csv
function insertDates() {
  fs.createReadStream("dates_clients.csv")
    .pipe(csv())
    .on("data", (row) => {
      const query = "INSERT INTO client (name_client, identify_client, address, phone_number, email) VALUES (?, ?, ?, ?, ?)";
      connection.query(query, [row.name_client, row.identify_client, row.address,row.phone_number,row.email], (err) => {
        if (err) console.error("INSERT ERROR...:", err);
      });
    })
    .on("end", () => {
      console.log("MASIVE LOAD COMPLETED.");
      connection.end();
    });
}

insertDates();