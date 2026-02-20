use('sampleDB')
db.orders.insertMany([
    {
      
      items: [
        { product: "Book", price: 500, qty: 1 },
        { product: "Pen", price: 20, qty: 2 }
      ],
      total: 540,
      status: "delivered",
      orderedAt: ISODate("2025-01-01")
    },
    {
      
      items: [
        { product: "Notebook", price: 100, qty: 3 }
      ],
      total: 300,
      status: "shipped",
      orderedAt: ISODate("2025-01-02")
    },
    {
      
      items: [
        { product: "Bag", price: 1200, qty: 1 }
      ],
      total: 1200,
      status: "placed",
      orderedAt: ISODate("2025-01-03")
    },
    {
      
      items: [
        { product: "Pen", price: 20, qty: 10 }
      ],
      total: 200,
      status: "delivered",
      orderedAt: ISODate("2025-01-04")
    },
    {
     
      items: [
        { product: "Laptop Stand", price: 1500, qty: 1 }
      ],
      total: 1500,
      status: "delivered",
      orderedAt: ISODate("2025-01-05")
    },
    {
     
      items: [
        { product: "Mouse", price: 800, qty: 1 }
      ],
      total: 800,
      status: "cancelled",
      orderedAt: ISODate("2025-01-06")
    },
    {
     
      items: [
        { product: "Keyboard", price: 1200, qty: 1 }
      ],
      total: 1200,
      status: "delivered",
      orderedAt: ISODate("2025-01-07")
    },
    {
      
      items: [
        { product: "Book", price: 450, qty: 2 }
      ],
      total: 900,
      status: "shipped",
      orderedAt: ISODate("2025-01-08")
    },
    {
     
      items: [
        { product: "Notebook", price: 100, qty: 5 }
      ],
      total: 500,
      status: "delivered",
      orderedAt: ISODate("2025-01-09")
    },
    {
      
      items: [
        { product: "Pen", price: 20, qty: 20 }
      ],
      total: 400,
      status: "placed",
      orderedAt: ISODate("2025-01-10")
    },
  
    /* ---- 10 more ---- */
  
    {
     
      items: [
        { product: "Charger", price: 1000, qty: 1 }
      ],
      total: 1000,
      status: "delivered",
      orderedAt: ISODate("2025-01-11")
    },
    {
      
      items: [
        { product: "Headphones", price: 2000, qty: 1 }
      ],
      total: 2000,
      status: "shipped",
      orderedAt: ISODate("2025-01-12")
    },
    {
      
      items: [
        { product: "Book", price: 600, qty: 1 }
      ],
      total: 600,
      status: "delivered",
      orderedAt: ISODate("2025-01-13")
    },
    {
      
      items: [
        { product: "Desk Lamp", price: 900, qty: 1 }
      ],
      total: 900,
      status: "delivered",
      orderedAt: ISODate("2025-01-14")
    },
    {
      
      items: [
        { product: "Notebook", price: 120, qty: 4 }
      ],
      total: 480,
      status: "cancelled",
      orderedAt: ISODate("2025-01-15")
    },
    {
      
      items: [
        { product: "Pen", price: 25, qty: 8 }
      ],
      total: 200,
      status: "delivered",
      orderedAt: ISODate("2025-01-16")
    },
    {
      
      items: [
        { product: "Bag", price: 1400, qty: 1 }
      ],
      total: 1400,
      status: "placed",
      orderedAt: ISODate("2025-01-17")
    },
    {
      
      items: [
        { product: "Mouse Pad", price: 300, qty: 2 }
      ],
      total: 600,
      status: "delivered",
      orderedAt: ISODate("2025-01-18")
    },
    {
      
      items: [
        { product: "Book", price: 700, qty: 1 }
      ],
      total: 700,
      status: "shipped",
      orderedAt: ISODate("2025-01-19")
    },
    {
    
      items: [
        { product: "Keyboard Cover", price: 400, qty: 1 }
      ],
      total: 400,
      status: "delivered",
      orderedAt: ISODate("2025-01-20")
    }
  ])