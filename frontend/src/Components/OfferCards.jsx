const OfferCards = ({ className = "" }) => {
  const card = [
    {
      id: 1,
      title: "Save",
      heading: "$29",
      text: "Enjoy Discount all types of Grocery & Frozen item",
      image:
        "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Fruits/apple.png",
      top: "#f8cfe5",
      bottom: "#700e48",
      headingColor: "#9d2430",
    },
    {
      id: 2,
      title: "Discount",
      heading: "30%",
      text: "Enjoy Discount all types of Grocery & Frozen item",
      image:
        "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Vegetables/broccoli.png",
      top: "#ffdfc7",
      bottom: "#aa3e1c",
      headingColor: "#a83e20",
    },
    {
      id: 3,
      title: "Up to",
      heading: "50%",
      text: "Enjoy Discount all types of Grocery & Frozen item",
      image:
        "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Cold%20drink/Red-Bull.png",
      top: "#bfddfa",
      bottom: "#0d4074",
      headingColor: "#174776",
    },
    {
      id: 4,
      title: "Free",
      heading: "SHIP",
      text: "Enjoy Discount all types of Grocery & Frozen item",
      image:
        "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Beverages/Cappuccino.png",
      top: "#efd0f7",
      bottom: "#65276e",
      headingColor: "#66316f",
    },
  ];

  return (
    <section className="w-full bg-[#f5f6f6] px-4 py-6 sm:px-6">
      <div
        className={`mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
      >
        {card.map((item) => (
          <article
            key={item.id}
            className="relative isolate h-[330px] overflow-hidden rounded-[12px]"
            style={{ backgroundColor: item.top }}
          >
            {/* Top content */}
            <div className="relative z-20 px-5 pt-5">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-bold text-[#332124]">
                  {item.title}
                </p>

                <span className="text-[27px] leading-none text-[#79515c]">
                  {item.id === 1
                    ? "☼"
                    : item.id === 2
                    ? "〽"
                    : item.id === 3
                    ? "♙"
                    : "❋"}
                </span>
              </div>

              <h2
                className="mt-0.5 text-[34px] font-extrabold leading-[1.05]"
                style={{ color: item.headingColor }}
              >
                {item.heading === "30%" || item.heading === "50%" ? (
                  <>
                    {item.heading.replace("%", "")}
                    <span className="align-top text-[20px]">%</span>
                  </>
                ) : (
                  item.heading
                )}
              </h2>

              <p className="mt-2 max-w-[190px] text-[11px] leading-[18px] text-[#291b20]">
                {item.text}
              </p>
            </div>

            {/* Curved bottom background */}
            <div
              className="absolute inset-x-0 bottom-0 h-[58%]"
              style={{
                backgroundColor: item.bottom,
                clipPath: "ellipse(100% 100% at 50% 100%)",
              }}
            />

            {/* Product image */}
            <div className="absolute inset-x-0 bottom-3 z-10 flex h-[46%] items-center justify-center">
              <img
                src={item.image}
                alt={item.title + " grocery offer"}
                className="h-full w-[82%] object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OfferCards;
