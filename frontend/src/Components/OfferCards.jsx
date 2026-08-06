// import React from 'react'
import "../Css/OfferCards.css"
const OfferCards = ({className = " "}) => {
        const card= [
            {
                id: 1,
                title:"Save",
                heading:"$29",
                text:"Enjoy Discount all types of Grocery & Frozen item",
                image:"https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Fruits/apple.png",
                "top-container":"rgb(228, 170, 228)",
                "bottom-container":"#672866",
              },
              {
                id: 2,
                title:"Discount",
                heading:"30%",
                text:"Enjoy Discount all types of Grocery & Frozen item",
                image:"https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Vegetables/broccoli.png",
                "top-container":"rgb(196, 146, 146)",
                "bottom-container":"#984108",
              },
            {
                id: 3,
                title:"Up to",
                heading:"50%",
                text:"Enjoy Discount all types of Grocery & Frozen item",
                image:"https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Cold%20drink/Red-Bull.png",
                "top-container":"rgb(105, 161, 216)",
                "bottom-container":"#174d75",
            },
            {
                id: 4,
                title:"Free",
                heading:"SHIPS",
                text:"Enjoy Discount all types of Grocery & Frozen item",
                image:"https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Beverages/Cappuccino.png",
                "top-container":"rgb(255, 197, 255)",
                "bottom-container":"#410054"
            }
        ]
  return (
    <>
    <div className="padding">

            <div className={`offercard-container ${className}`}>
      {card.map((card) => (
        <div
        key={card.id}
          className="offer-card"
          >
          <div className="top-container" style={{backgroundColor: card["top-container"]}}>
          <p>{card.title}</p>
          <h2>{card.heading}</h2>
          <p className="offertxt">{card.text}</p>
            </div>

          <div className="bottom-container"  style={{backgroundColor: card["bottom-container"]}}>
            <div className="imgcontainer">
            <img src={card.image} alt=""  className="offer-img"/> 
            </div>
          </div>
          
        </div>
      ))}
    </div>
      </div>
    </>
  )
}

export default OfferCards;
