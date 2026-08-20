import "../Css/ServicesSection.css";

import GiftVouchers from "../assets/GiftVouchers.png";
import GiftCard from "../assets/GiftCard.png";
import PayInvoice from "../assets/PayInvoice.png";
import Order from "../assets/Order.png";
export const Services = () => {
  return (
    <>
      <section className="services">
        <div className="text-container">
          <h1>We always provide you the best in town</h1>
          <p>
            Since 2007 we have been delivering in product development, support &
            updates for frictionless shopping experiences
          </p>
        </div>

        <div className="servicecard-container">
          <div className="servicecard vouchers">
            <div className="text-container1">
              <h3>
                Gromuse <br /> Gift vouchers.
              </h3>
            </div>
            <div className="img-container">
              <img src={GiftVouchers} alt="" className="img" />
            </div>
          </div>
          <div className="servicecard">
            <div className="text-container1">
              <h3>
                Present a<br /> Gift card
              </h3>
            </div>
            <div className="img-container">
              <img src={GiftCard} alt="" className="img2" />
            </div>
          </div>
          <div className="servicecard">
            <div className="text-container1">
              <h3>
                Pay your <br />
                tabby invoice
              </h3>
            </div>
            <div className="img-container">
              <img src={PayInvoice} alt="" className="img" />
            </div>
          </div>
          <div className="servicecard">
            <div className="text-container1">
              <h3>
                Order and <br />
                Collect
              </h3>
            </div>
            <div className="img-container">
              <img src={Order} alt="" className="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
