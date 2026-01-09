/* =========================================================
   PLAYGROUND 5: DELETE & SOFT DELETE PATTERNS
   ========================================================= */

use("sampleDB");

/* =========================
1. BASIC DELETE
========================= */

// Preview first
db.orders.findOne({}, { _id: 1 });

// Delete ONE order by real _id
// db.orders.deleteOne({
//   __id: ObjectId("695765de0611a4c7f6df7c03")
// });

/* =========================
2. DELETE MANY
========================= */

// Delete ALL cancelled orders
// db.orders.deleteMany({ status: "cancelled" });

// Delete orders with total < 50
// db.orders.deleteMany({ total: { $lt: 50 } });

// Delete orders without items
// db.orders.deleteMany({ items: { $size: 0 } });

/* =========================
3. CONDITIONAL / SAFE DELETES
========================= */

// Preview orders older than a date
// db.orders.find({
//   createdAt: { $lt: new Date("2024-01-01") }
// });

// Delete orders older than a date
// db.orders.deleteMany({
//   createdAt: { $lt: new Date("2024-01-01") }
// });

/* =========================
4. ARRAY-BASED DELETES
========================= */

// Delete orders containing product 'Pen'
// db.orders.deleteMany({ "items.product": "Pen" });

// Delete orders where ANY item qty <= 0
// db.orders.deleteMany({
//   items: { $elemMatch: { qty: { $lte: 0 } } }
// });

/* =========================
5. SOFT DELETE (RECOMMENDED)
========================= */

// Soft delete an order
// db.orders.updateOne(
//   { _id: ObjectId("PUT_REAL_ID_HERE") },
//   {
//     $set: {
//       isDeleted: true,
//       deletedAt: new Date()
//     }
//   }
// );

// Fetch only active orders
// db.orders.find({
//   $or: [
//     { isDeleted: { $exists: false } },
//     { isDeleted: false }
//   ]
// });

/* =========================
6. HARD DELETE AFTER SOFT DELETE
========================= */

// Permanently delete soft-deleted orders older than 30 days
// db.orders.deleteMany({
//   isDeleted: true,
//   deletedAt: {
//     $lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
//   }
// });

/* =========================
7. SAFETY CHECKS
========================= */

// Ensure collection still exists
// db.orders.countDocuments();
