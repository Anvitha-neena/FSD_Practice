// // MongoDB Playground
// // Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// // The current database to use.
// use("sampleDB");

// // Find a document in a collection.
// db.getCollection("orders").findOne({

// });
use('todo-playground2')
/*=========================================================
   PLAYGROUND 2:  FIND QUERIES (NO AGGREGATIONS)
   =========================================================
   GOAL:
   - Master MongoDB find(), filters, projections
   - Practice real-world + interview patterns
   - 100% NO aggregation usage
   =========================================================

/* =============== 
   1. BASIC SELECT
   ===============*/

// TODO [ ] List all orders
//SELECT * FROM orders;
db.orders.find()

// TODO [ ] List first 5 orders
//  Add LIMIT 5 when testing
db.orders.find().limit(5)
/*  ===============
   2. WHERE CLAUSE
   ================ */

// TODO [ ] List all delivered orders
// SELECT * FROM orders WHERE status = 'delivered';
//db.order
// TODO [ ] List all orders with total > 100 and total <= 300
// SELECT * FROM orders WHERE total > 100 AND total <= 300;
db.orders.find({total: {$gt}})

// TODO [ ] List all orders with status 'delivered' or 'processing'
// SELECT * FROM orders WHERE status IN ('delivered','processing');

// TODO [ ] List all orders with status 'delivered' and user_id 'user1'
// SELECT * FROM orders WHERE status = 'delivered' AND user_id = 'user1';

// TODO [ ] List all orders with status 'cancelled' or total < 80
// SELECT * FROM orders WHERE status = 'cancelled' OR total < 80;

/* =========================
   3. EXISTENCE & NULL CHECKS
   ========================= */

// TODO [ ] List orders where status field does NOT exist
// SELECT * FROM orders WHERE status IS NULL;

// TODO [ ] List orders where total is null or missing
// SELECT * FROM orders WHERE total IS NULL;

// TODO [ ] List orders where total exists but is 0
// SELECT * FROM orders WHERE total = 0;

/* =========================
   4. NEGATION & NOT EQUAL
   ========================= */

// TODO [ ] List orders where status is NOT 'cancelled'
// SELECT * FROM orders WHERE status <> 'cancelled';

// TODO [ ] List orders where total is NOT between 100 and 500
// SELECT * FROM orders WHERE total NOT BETWEEN 100 AND 500;
/* =========================
   5. REGEX & TEXT MATCHING
   ========================= */

// TODO [ ] List orders where userId starts with 'user'
//SELECT * FROM orders WHERE user_id LIKE 'user%';

// TODO [ ] Case-insensitive search for status 'delivered'
// SELECT * FROM orders WHERE LOWER(status) = 'delivered';

// TODO [ ] Orders where userId contains digit
// SELECT * FROM orders WHERE user_id REGEXP '[0-9]';

/* =========================
   6. PROJECTION
   ========================= */

// TODO [ ] List user_id, total, status from orders
// SELECT user_id, total, status FROM orders;

// TODO [ ] List user_id and total only
// SELECT user_id, total, status FROM orders; -- no id column selected

// TODO [ ] Exclude items array
// SELECT * FROM orders; -- exclude items array

// TODO [ ] Show only first item from items array
// SELECT * FROM orders; -- show only first item from items array

// TODO [ ] Show last item from items array
// SELECT * FROM orders; -- show last item from items array

/* =========================
   7. ARRAYS 
   ========================= */


// TODO [ ] Orders with any item quantity > 5
//SELECT * FROM orders o JOIN order_items i ON i.order_id = o.id
 AND i.product = 'Keyboard' AND i.qty > 1);

/* =========================
   8. SORTING, PAGINATION
   ========================= */


// TODO [ ] List all orders sorted by ordered_at descending
// SELECT * FROM orders ORDER BY ordered_at DESC;

// TODO [ ] List top 5 orders by total descending
// SELECT * FROM orders ORDER BY total DESC LIMIT 5;

// TODO [ ] List orders 6-10 by total descending
// SELECT * FROM orders ORDER BY total DESC OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY;
/* =========================
   9. DISTINCT & COUNT
   ========================= */

// TODO [ ] List total number of orders that are 'delivered'
// SELECT COUNT(*) FROM orders WHERE status = 'delivered';

// TODO [ ] List distinct order statuses
// SELECT DISTINCT status FROM orders;

// TODO [ ] Count orders with total > 500
// SELECT COUNT(*) FROM orders WHERE total > 500;

// TODO [ ] Estimated total number of orders
// SELECT COUNT(*) FROM orders;



/* =========================================================
   END OF TODO PLAYGROUND
   ========================================================= */