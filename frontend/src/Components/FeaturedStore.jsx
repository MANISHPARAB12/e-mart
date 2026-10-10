import "../App.css";
import { FaArrowRight } from "react-icons/fa";

const FeatureStore = () => {
  return (
    <>
      <div className="px-15">
        <div className="heading-container flex justify-between">
          <h2 className="heading font-semibold text-2xl">Featured Store</h2>
          <div className="grp">
                      <p className="smx text-red-600">See more</p>
                      <FaArrowRight className="rightarrow text-red-600" />
                    </div>
        </div>

        <div className="div-container">
          <div className="store-card">
            <div className="store-top orange">
              <img
                src="https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/crush4.png"
                alt="Crush"
                className="orangelogo"
              />
            </div>

            <div className="store-bottom">
              <h3>Crush grocery</h3>
              <p>⚡ Delivery in 12 minute</p>
            </div>
          </div>

          <div className="store-card">
            <div className="store-top blue">
              <img
                src="https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/nowdelivery.png"
                alt="Now Delivery"
                className="store-logo"
              />
            </div>

            <div className="store-bottom">
              <h3>Delivery market</h3>
              <p>⚡ Delivery in 12 minute</p>
            </div>
          </div>

          <div className="store-card">
            <div className="store-top green">
              <img
                src="https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/qualityproduct.png"
                alt="Quality Product"
                className="store-logo"
              />
            </div>

            <div className="store-bottom">
              <h3>Quality product</h3>
              <p>⚡ Delivery in 12 minute</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureStore;
