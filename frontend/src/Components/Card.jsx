import "../Css/Card.css";

export const Card = ({ products }) => {
  return (
    <div className="Card-container">
      {products.length === 0 ? (
        <h2>No Products Found</h2>
      ) : (
        products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="image" />

            <h3>{item.name}</h3>

            <p>{item.category}</p>

            <p>₹{item.price}</p>

            <div className="btn-container">
              <button className="addtocart">+</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
