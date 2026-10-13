import GooglePlay from "../assets/Googleplay.png";
import AppStore from "../assets/AppStore.png";
import ManImg from "../assets/manimg.png";

export const Banner = () => {
  return (
    <div className="px-4 py-8 sm:px-8 lg:px-15">
      {/* Main Banner Container */}
      <div className="flex flex-col items-center justify-between overflow-hidden rounded-[40px] bg-[#772459] md:flex-row">

        {/* Text and App Download Section */}
        <div className="w-full px-6 py-10 sm:px-10 md:w-3/5 md:py-12 lg:py-16 lg:pl-20">

          {/* Heading */}
          <div className="max-w-[450px]">
            <h2 className="font-['Lexend',sans-serif] text-2xl font-semibold leading-snug text-gray-200 sm:text-3xl lg:text-4xl">
              Stay Home and Get All Your Essentials From Our Market!
            </h2>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm text-gray-200 sm:text-base">
            Download the app from app store or google play
          </p>

          {/* App Store Links */}
          <div className="mt-5 flex flex-wrap items-center gap-4">

            {/* Google Play */}
            <a
              href="#"
              aria-label="Get the app on Google Play"
              className="flex h-[60px] w-[160px] items-center justify-center overflow-hidden rounded-xl bg-black transition hover:scale-105 sm:w-[180px]"
            >
              <img
                src={GooglePlay}
                alt="Get it on Google Play"
                className="h-[100px] w-auto max-w-none object-contain"
              />
            </a>

            {/* Apple App Store */}
            <a
              href="#"
              aria-label="Download on the App Store"
              className="flex h-[60px] w-[160px] items-center justify-center overflow-hidden rounded-xl bg-black transition hover:scale-105 sm:w-[180px]"
            >
              <img
                src={AppStore}
                alt="Download on the App Store"
                className="h-[100px] w-auto max-w-none object-contain"
              />
            </a>

          </div>
        </div>

        {/* Man Image */}
        <div className="flex w-full items-end justify-center px-4 pt-2 md:w-2/5 md:self-stretch md:justify-end md:pt-6 md:pr-8 lg:pr-16">
          <img
            src={ManImg}
            alt="Person representing the shopping app"
            className="h-auto max-h-[350px] w-auto max-w-full object-contain object-bottom md:max-h-[380px] lg:max-h-[420px]"
          />
        </div>

      </div>
    </div>
  );
};