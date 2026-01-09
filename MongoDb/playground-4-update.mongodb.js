/* =========================================================
   PLAYGROUND 4: UPDATE OPERATIONS
   ========================================================= */

use("sampleDB");

/* =========================
1. BASIC UPDATE
========================= */

// Update status to delivered (use REAL _id)
db.orders.updateOne(
  { _id: ObjectId("PUT_REAL_ID_HERE") },
  { $set: { status: "delivered" } }
);

/* =========================
2. MULTI UPDATE
========================= */

// Update pending → processing
// db.orders.updateMany(
//   { status: "pending" },
//   { $set: { status: "processing" } }
// );

/* =========================
3. NUMERIC OPERATIONS
========================= */

// Increase total by 100
// db.orders.updateOne(
//   { _id: ObjectId("PUT_REAL_ID_HERE") },
//   { $inc: { total: 100 } }
// );

// Decrease total by 50 for cancelled orders
// db.orders.updateMany(
//   { status: "cancelled" },
//   { $inc: { total: -50 } }
// );

/* =========================
4. ADDING FIELDS
========================= */

// Add deliveredAt timestamp
// db.orders.updateMany(
//   { status: "delivered", deliveredAt: { $exists: false } },
//   { $set: { deliveredAt: new Date() } }
// );

// Mark expensive orders as priority
// db.orders.updateMany(
//   { total: { $gt: 1000 } },
//   { $set: { isPriority: true } }
// );

/* =========================
5. REMOVING FIELDS
========================= */

// Remove isPriority flag
// db.orders.updateMany(
//   { isPriority: true },
//   { $unset: { isPriority: "" } }
// );

/* =========================
6. ARRAY OPERATIONS
========================= */

// Add item to items array
// db.orders.updateOne(
//   { _id: ObjectId("PUT_REAL_ID_HERE") },
//   { $push: { items: { product: "Mouse", price: 700, qty: 1 } } }
// );

// Increase qty of all items by 1
// db.orders.updateMany(
//   {},
//   { $inc: { "items.$[].qty": 1 } }
// );

// Increase Mouse qty by 2
// db.orders.updateMany(
//   {},
//   { $inc: { "items.$[item].qty": 2 } },
//   { arrayFilters: [{ "item.product": "Mouse" }] }
// );

/* =========================
7. UPSERT
========================= */

// Create order if not exists
// db.orders.updateOne(
//   { userId: "user999" },
//   {
//     $set: { status: "processing", total: 500 },
//     $setOnInsert: { items: [], createdAt: new Date() }
//   },
//   { upsert: true }
// );
