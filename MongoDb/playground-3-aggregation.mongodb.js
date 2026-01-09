// PLAYGROUND 3: AGGREGATION
// Goal: GROUP BY and analytics

use("sampleDB");

/* =========================
1. Count of orders per status
========================= */
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  }
]);

/* =========================
2. Total revenue per status
========================= */
// db.orders.aggregate([
//   {
//     $group: {
//       _id: "$status",
//       total_revenue: { $sum: "$total" }
//     }
//   }
// ]);

/* =========================
3. Delivered orders per user
========================= */
// db.orders.aggregate([
//   { $match: { status: "delivered" } },
//   {
//     $group: {
//       _id: "$userId",
//       count: { $sum: 1 }
//     }
//   }
// ]);

/* =========================
4. Total quantity per product
========================= */
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$items.product",
//       total_qty: { $sum: "$items.qty" }
//     }
//   }
// ]);

/* =========================
5. Revenue per product
========================= */
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$items.product",
//       revenue: {
//         $sum: { $multiply: ["$items.price", "$items.qty"] }
//       }
//     }
//   }
// ]);

/* =========================
6. Top 3 products by revenue
========================= */
// db.orders.aggregate([
//   { $unwind: "$items" },
//   {
//     $group: {
//       _id: "$items.product",
//       revenue: {
//         $sum: { $multiply: ["$items.price", "$items.qty"] }
//       }
//     }
//   },
//   { $sort: { revenue: -1 } },
//   { $limit: 3 }
// ]);

/* =========================
7. Total revenue (global)
========================= */
// db.orders.aggregate([
//   {
//     $group: {
//       _id: null,
//       total_revenue: { $sum: "$total" }
//     }
//   }
// ]);

/* =========================
8. Daily revenue
========================= */
// db.orders.aggregate([
//   {
//     $group: {
//       _id: {
//         $dateToString: {
//           format: "%Y-%m-%d",
//           date: "$orderedAt"
//         }
//       },
//       revenue: { $sum: "$total" }
//     }
//   },
//   { $sort: { _id: 1 } }
// ]);
