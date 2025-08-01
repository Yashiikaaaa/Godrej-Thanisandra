import phoneIcon from "../assets/phone.svg";
import plotImage from "../assets/godrej.jpg";
import lines from "../assets/homepage-lines.svg";

interface HomePageProps {
  openModal: () => void;
}

function HomePage({ openModal }: HomePageProps) {
  return (
     <div id="home" className="bg-[#F2FFED] min-h-screen font-sans text-green-900 overflow-x-hidden overflow-y-hidden md:relative md:z-0 pt-[69px] md:pt-[80px] scroll-mt-16">
  {/* Heading */}
  <div className="px-4 md:px-[77px] pt-6 text-left text-[#26650B]">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      New Launch - Cat A Builder
    </h1>
    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-1">
    Luxury Apartments in Thanisandra, Bengaluru
    <br />
     
    </h2>
  </div>


      <img
        src={lines}
        alt="decoline"
        className="lg:w-150 lg:absolute lg:top-24 lg:right-40 lg:-z-3 hidden lg:block md:z-1"
      />

      {/* Layout Container */}
      <div className="flex flex-col md:flex-row justify-between items-center md:max-w-[1200px] mx-4 md:mx-[77px] mt-6">
        {/* Left: Image */}
        <div className="w-full md:w-full pr-4 md:pr-12">
          <img
            src={plotImage}
            alt="Brigade Plots"
            className="w-full rounded-tr-[70px] md:rounded-tr-[140px] md:z-2"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 md:pl grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:flex-col md:gap-y-6 text-sm md:text-base md:ml-20">
          {/* Project Size */}
          <div className="ml-4 md:ml-0 border-l-2 md:border-l-4 border-[#69AA4D] pl-2 md:pl-4">
            <p className="text-[#26650B] text-base md:text-xl">Project Size</p>
            <p className="font-bold text-lg md:text-2xl">7 Acres</p>
          </div>

          {/* Possession */}
          <div className="ml-4 md:ml-0 border-l-2 md:border-l-4 border-[#69AA4D] pl-2 md:pl-4">
            <p className="text-[#26650B] text-base md:text-xl">Possession</p>
            <p className="font-bold text-lg md:text-2xl">2030</p>
          </div>

          {/* Starting Price */}
          <div className="ml-4 md:ml-0 border-l-2 md:border-l-4 border-[#69AA4D] pl-2 md:pl-4">
            <p className="text-[#26650B] text-base md:text-xl">
              Starting Price
            </p>
            <p className="font-bold text-lg md:text-2xl">₹ 1.6 Cr*</p>
          </div>

          {/* Available Plots */}
          <div className="ml-4 md:ml-0 border-l-2 md:border-l-4 border-[#69AA4D] pl-2 md:pl-4">
            <p className="text-[#26650B] text-base md:text-xl">
              Available Units
            </p>
            <p className="font-bold text-lg md:text-2xl">  2, 3 BHK</p>
          </div>

          {/* Enquire Now Button */}
          {/* Enquire Now Button */}
          <div className="col-span-2 md:ml-0 mt-2 md:mt-4 flex justify-center md:justify-start">
            <button
              onClick={openModal}
              className="cursor-pointer px-12 md:px-20 py-2 bg-black text-white rounded-xl text-base font-semibold transition-transform duration-300 hover:scale-105 md:text-base"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Contact */}

      <a
        href="tel:+918123130034"
        className="bg-green-900 text-white text-center py-4 mt-10 flex justify-center items-center gap-2 rounded-none md:rounded-full px-4 cursor-pointer"
      >
        <img src={phoneIcon} alt="Phone" className="w-7 h-7 md:w-10 md:h-10" />
        <span className="text-lg md:text-3xl font-bold">+91 63642 54487</span>
      </a>
    </div>
  );
}

export default HomePage;
