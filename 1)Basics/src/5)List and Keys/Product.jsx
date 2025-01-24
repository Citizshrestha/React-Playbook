// import React from 'react'

const Product = () => {
    const products = [
      { id: 101, name: "Laptop", price: 800, category: "Electronics" },
      { id: 102, name: "Shoes", price: 50, category: "Fashion" },
      { id: 103, name: "Coffee Mug", price: 10, category: "Kitchen" },
      { id: 104, name: "Smartphone", price: 600, category: "Electronics" },
    ];
  
    return (
      <div
        style={{
          padding: "20px",
          fontFamily: "'Arial', sans-serif",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Product List
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                textAlign: "center",
                width: "250px",
                transition: "transform 0.2s ease",
                color: "#333", // Added text color for visibility
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h2 style={{ marginBottom: "10px" }}>{product.name}</h2>
              <h4 style={{ marginBottom: "8px" }}>Price: Rs {product.price}</h4>
              <h5 style={{ marginBottom: "12px" }}>Category: {product.category}</h5>
              <button
                style={{
                  marginTop: "10px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#45a049")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4caf50")
                }
              >
                Buy Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Product;
  