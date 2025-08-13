# prueba_desempe-o_MOD4-BD-

# SQL & NoSQL Performance Test

## 📌 Overview
System with **MySQL + Node.js + Express** backend and **HTML + css + JS** frontend.  
Includes:
- Relational model & DDL
- Bulk CSV loading
- CRUD API for `clients`
- Reports API
- Dashboard frontend

---

## 🗄 Database
**Host:** bg8h6b6ua9e2kdopyvue-mysql.services.clever-cloud.com
**DB:**  bg8h6b6ua9e2kdopyvue
**User:** unvsaijue2rqicyp  
**Pass:** gYYkgZAnsId8cPpT19RS
**Port:** 3306  

Tables: client, Platform, Transactions,Invoices.

---

## 📥 Bulk Load
Convert `.xlsx` → `.csv` and run:
```sql
LOAD DATA LOCAL INFILE 'Customers.csv'
INTO TABLE Customers
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(name_client, identify_client, address, phone_number, email);


⚙ Backend

cd backend
npm install
npm start

Auto-inserts 2 customers from CSV if table is empty.

⸻

🔗 API

CRUD:
GET /clients | GET /clients/:id | POST /clients | PUT /clients/:id | DELETE /clients/:id

Reports:
/reports/total-paid | /reports/pending-invoices | /reports/transactions-by-platform/:platform

⸻

🖥 Frontend

Open frontend/index.html in browser.
Manage customers & view reports.

⸻

📦 Postman

Import SQL_NoSQL_Test.postman_collection.json to test endpoints.