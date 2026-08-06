import "../Css/AppPromotionBanner.css"
import "../App.css"
import GooglePlay from "../assets/Googleplay.png";
import AppStore from "../assets/AppStore.png";
import ManImg from "../assets/manimg.png"

export const Banner = () => {
    return (
        <>
        <div className="padding">

           <div className="MainContainer">
                <div className="txt-container">
                    <div className="h2-container">
                        <h2>Stay Home and Get All Your Essentials From Our Market!</h2>
                    </div>
                        <p>Download the app from app store or google play</p>
                    <div className="app-link">
                            <div className="googleplay">
                                <img src={GooglePlay} alt="" />
                                    </div>
                            <div className="appstore">
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                </div>

                <div className="img-Container">
                            <img src={ManImg} alt="" />
                    </div>

           </div>
        </div>
        </>
    )
}