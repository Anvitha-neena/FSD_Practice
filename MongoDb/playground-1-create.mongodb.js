// GOAL: Create consistent and clean sample data

//

// TODO [ ] Use a single database/schema name (sampleDb)

use('sampleDB');

// TODO [ ] INSERT INTO orders (...) VALUES (...);

// Use insertMany()

// TODO [ ] Ensure every document contains:

// - userId

// - items (array)

// - total

// - status

// - orderedAt (Date)

// TODO [ ] Avoid duplicate inserts (run once)

// TODO [ ] Use string userId for learning (e.g., "user1")

// TODO [ ] Use DATE literals 'YYYY-MM-DD'

db.orders.insertMany([

{

userId: "user1",

items: [

{ product: "Book", price: 500, qty: 1 },

{ product: "Pen", price: 20, qty: 2 }

],

total: 540,

status: "delivered",

orderedAt: ISODate("2025-01-01")

},

{

userId: "user2",

items: [

{ product: "Notebook", price: 100, qty: 3 }

],

total: 300,

status: "shipped",

orderedAt: ISODate("2025-01-02")

},

{

userId: "user3",

items: [

{ product: "Bag", price: 1200, qty: 1 }

],

total: 1200,

status: "placed",

orderedAt: ISODate("2025-01-03")

},

{

userId: "user4",

items: [

{ product: "Pen", price: 20, qty: 10 }

],

total: 200,

status: "delivered",

orderedAt: ISODate("2025-01-04")

},

{

userId: "user5",

items: [

{ product: "Laptop Stand", price: 1500, qty: 1 }

],

total: 1500,

status: "delivered",

orderedAt: ISODate("2025-01-05")

},

{

userId: "user5",

items: [

{ product: "Mouse", price: 800, qty: 1 }

],

total: 800,

status: "cancelled",

orderedAt: ISODate("2025-01-06")

},

{

userId: "user1",

items: [

{ product: "Keyboard", price: 1200, qty: 1 }

],

total: 1200,

status: "delivered",

orderedAt: ISODate("2025-01-07")

},

{

userId: "user2",

items: [

{ product: "Book", price: 450, qty: 2 }

],

total: 900,

status: "shipped",

orderedAt: ISODate("2025-01-08")

},

{

userId: "user3",

items: [

{ product: "Notebook", price: 100, qty: 5 }

],

total: 500,

status: "delivered",

orderedAt: ISODate("2025-01-09")

},

{

userId: "user4",

items: [

{ product: "Pen", price: 20, qty: 20 }

],

total: 400,

status: "placed",

orderedAt: ISODate("2025-01-10")

},

{

userId: "user1",

items: [

{ product: "Charger", price: 1000, qty: 1 }

],

total: 1000,

status: "delivered",

orderedAt: ISODate("2025-01-11")

},

{

userId: "user2",

items: [

{ product: "Headphones", price: 2000, qty: 1 }

],

total: 2000,

status: "shipped",

orderedAt: ISODate("2025-01-12")

},

{

userId: "user3",

items: [

{ product: "Book", price: 600, qty: 1 }

],

total: 600,

status: "delivered",

orderedAt: ISODate("2025-01-13")

},

{

userId: "user4",

items: [

{ product: "Desk Lamp", price: 900, qty: 1 }

],

total: 900,

status: "delivered",

orderedAt: ISODate("2025-01-14")

},

{

userId: "user5",

items: [

{ product: "Notebook", price: 120, qty: 4 }

],

total: 480,

status: "cancelled",

orderedAt: ISODate("2025-01-15")

},

{

userId: "user1",

items: [

{ product: "Pen", price: 25, qty: 8 }

],

total: 200,

status: "delivered",

orderedAt: ISODate("2025-01-16")

},

{

userId: "user2",

items: [

{ product: "Bag", price: 1400, qty: 1 }

],

total: 1400,

status: "placed",

orderedAt: ISODate("2025-01-17")

},

{

userId: "user3",

items: [

{ product: "Mouse Pad", price: 300, qty: 2 }

],

total: 600,

status: "delivered",

orderedAt: ISODate("2025-01-18")

},

{

userId: "user4",

items: [

{ product: "Book", price: 700, qty: 1 }

],

total: 700,

status: "shipped",

orderedAt: ISODate("2025-01-19")

},

{

userId: "user5",

items: [

{ product: "Keyboard Cover", price: 400, qty: 1 }

],

total: 400,

status: "delivered",

orderedAt: ISODate("2025-01-20")

}

])

db.users.updateMany({},

{ $set: { createdAt: new Date() } }

)

// TODO [ ] Verify with SELECT COUNT(*) FROM orders;

// Verify using db.orders.countDocuments()

db.orders.countDocuments();

/* =========================================================

END OF TODO PLAYGROUND

========================================================= */
db.getCollectionNames(); // []
