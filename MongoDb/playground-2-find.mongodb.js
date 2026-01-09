// *=========================================================
//    PLAYGROUND 2:  FIND QUERIES (NO AGGREGATIONS)
//    =========================================================
//    GOAL:
//    - Master MongoDB find(), filters, projections
//    - Practice real-world + interview patterns
//    - 100% NO aggregation usage
//    =========================================================
use("sampleDB");
/* =============== 
   1. BASIC SELECT
   ===============*/

// TODO [ ] List all orders
// SELECT * FROM orders;
//db.orders.find();

// TODO [ ] List first 5 orders
//  Add LIMIT 5 when testing
//db.orders.find().limit(5);


/*  ===============
   2. WHERE CLAUSE
   ================ */

// TODO [ ] List all delivered orders
// SELECT * FROM orders WHERE status = 'delivered';
//db.orders.find({ status: "delivered" });


// TODO [ ] List all orders with total > 100 and total <= 300
// SELECT * FROM orders WHERE total > 100 AND total <= 300;
db.orders.find({
  total: { $gt: 100, $lte: 300 }
});

//db.orders.findOne();


// TODO [ ] List all orders with status 'delivered' or 'processing'
// SELECT * FROM orders WHERE status IN ('delivered','processing');
// db.orders.find({
//   status: { $in: ["delivered", "processing"] }
// });


// TODO [ ] List all orders with status 'delivered' and user_id 'user1'
// SELECT * FROM orders WHERE status = 'delivered' AND user_id = 'user1';

// db.orders.find({
//   status: "delivered",
//   userId: "user1"
// });

// TODO [ ] List all orders with status 'cancelled' or total < 80
// SELECT * FROM orders WHERE status = 'cancelled' OR total < 80;
// db.orders.find({
//   $or: [
//     { status: "cancelled" },
//     { total: { $lt: 80 } }
//   ]
// });

/* =========================
   3. EXISTENCE & NULL CHECKS
   ========================= */

// TODO [ ] List orders where status field does NOT exist
// SELECT * FROM orders WHERE status IS NULL;
// db.orders.find({
//   status: { $exists: false }
// });

// TODO [ ] List orders where total is null or missing
// SELECT * FROM orders WHERE total IS NULL;
// db.orders.find({
//   total: null
// });

// TODO [ ] List orders where total exists but is 0
// SELECT * FROM orders WHERE total = 0;
// db.orders.find({
//   total: 0
// });

/* =========================
   4. NEGATION & NOT EQUAL
   ========================= */

// TODO [ ] List orders where status is NOT 'cancelled'
// SELECT * FROM orders WHERE status <> 'cancelled';
// db.orders.find({
//   status: { $ne: "cancelled" }
// });

// TODO [ ] List orders where total is NOT between 100 and 500
// SELECT * FROM orders WHERE total NOT BETWEEN 100 AND 500;
// db.orders.find({
//   total: { $not: { $gte: 100, $lte: 500 } }
// });

/* =========================
   5. REGEX & TEXT MATCHING
   ========================= */

// TODO [ ] List orders where userId starts with 'user'
//SELECT * FROM orders WHERE user_id LIKE 'user%';
// db.orders.find({
//   userId: { $regex: /^user/ }
// });

// TODO [ ] Case-insensitive search for status 'delivered'
// SELECT * FROM orders WHERE LOWER(status) = 'delivered';
// db.orders.find({
//   status: { $regex: /^delivered$/i }
// });

// TODO [ ] Orders where userId contains digit
// SELECT * FROM orders WHERE user_id REGEXP '[0-9]';
// db.orders.find({
//   userId: { $regex: /\d/ }
// });

/* =========================
   6. PROJECTION
   ========================= */

// TODO [ ] List user_id, total, status from orders
// SELECT user_id, total, status FROM orders;
// db.orders.find(
//   {},
//   { userId: 1, total: 1, status: 1, _id: 0 }
// );

// TODO [ ] List user_id and total only
// SELECT user_id, total, status FROM orders; -- no id column selected
// db.orders.find(
//   {},
//   { userId: 1, total: 1, _id: 0 }
// );

// TODO [ ] Exclude items array
// SELECT * FROM orders; -- exclude items array
// db.orders.find(
//   {},
//   { items: 0 }
// );

// TODO [ ] Show only first item from items array
// SELECT * FROM orders; -- show only first item from items array
// db.orders.find(
//   {},
//   { items: { $slice: 1 } }
// );

// TODO [ ] Show last item from items array
// SELECT * FROM orders; -- show last item from items array
// db.orders.find(
//   {},
//   { items: { $slice: -1 } }
// );

/* =========================
   7. ARRAYS 
   ========================= */


// TODO [ ] Orders with any item quantity > 5
//SELECT * FROM orders o JOIN order_items i ON i.order_id = o.id
 //AND i.product = 'Keyboard' AND i.qty > 1);
// db.orders.find({
//   "items.qty": { $gt: 5 }
// });

/* =========================
   8. SORTING, PAGINATION
   ========================= */


// TODO [ ] List all orders sorted by ordered_at descending
// SELECT * FROM orders ORDER BY ordered_at DESC;
//db.orders.find().sort({ orderedAt: -1 });

// TODO [ ] List top 5 orders by total descending
// SELECT * FROM orders ORDER BY total DESC LIMIT 5;
//db.orders.find().sort({ total: -1 }).limit(5);

// TODO [ ] List orders 6-10 by total descending
// SELECT * FROM orders ORDER BY total DESC OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY;
//db.orders.find().sort({ total: -1 }).skip(5).limit(5);

/* =========================
   9. DISTINCT & COUNT
   ========================= */

// TODO [ ] List total number of orders that are 'delivered'
// SELECT COUNT(*) FROM orders WHERE status = 'delivered';
// db.orders.countDocuments({
//   status: "delivered"
// });

// TODO [ ] List distinct order statuses
// SELECT DISTINCT status FROM orders;
//db.orders.distinct("status");

// TODO [ ] Count orders with total > 500
// SELECT COUNT(*) FROM orders WHERE total > 500;
// db.orders.countDocuments({
//   total: { $gt: 500 }
// });

// TODO [ ] Estimated total number of orders
// SELECT COUNT(*) FROM orders;

//db.orders.estimatedDocumentCount();

/* =========================================================
   END OF TODO PLAYGROUND
   ========================================================= */
