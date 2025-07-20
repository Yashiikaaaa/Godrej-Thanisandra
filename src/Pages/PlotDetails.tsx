import "swiper/css";
import "swiper/css/pagination";
import samplePlot from "../assets/plot.png";
import ReactGA from "react-ga4";
interface PlotDetailsProp {
  openModal: () => void;
}

const plotData = [
  
  { config: "2 BHK", price: "₹ 1.6 Cr onwards*" },
  { config: "3 BHK Premium", price: "₹ 2.5 Cr onwards*" },
  { config: "3 BHK Luxury", price: "₹ 2.9 Cr onwards*" },
];

export default function PlotDetailsPage({ openModal }: PlotDetailsProp) {
  return (
    <div
      id="floorplan"
      className="bg-[#f2fbe7] w-full py-16 px-6 md:px-10 scroll-mt-16"
    >
      {/* Heading */}
      <h2 className="text-[#26650B] font-semibold text-sm md:text-lg border border-[#26650B] px-6 py-1 rounded-full mb-12 w-fit mx-auto md:mx-0 tracking-wide">
        Configurations
      </h2>

      {/* Grid Layout: 2x2 cards + image block */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        {/* Left: Plot Cards in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {plotData.map((plot, index) => (
            <div
              key={index}
              className="bg-white border border-[#e0eeda] rounded-lg p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)] hover:shadow-md transition text-left"
            >
              <p className="text-[#26650B] text-sm font-medium mb-1">Configuration:</p>
              <p className="text-[#26650B] text-lg font-bold">{plot.config}</p>

              <p className="text-[#26650B] text-sm mt-4 font-medium">Price:</p>
              <p className="text-[#26650B] text-base font-bold">{plot.price}</p>
            </div>
          ))}
        </div>

        {/* Right: Image fills same vertical space as 4 cards */}
        <div className="w-full h-full">
          <div className="w-full h-full border border-[#cde4b9] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative">
            <img
              src={samplePlot}
              alt="Plot Plan"
              className="w-full h-full object-cover object-center blur-[1.2px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
  onClick={() => {
    ReactGA.event({
      category: "Form Submission",
      action: "Get Pricing",
      label: "Get Pricing",
      value: 1,
    });
    openModal();
  }}
  className="cursor-pointer px-12 md:px-20 py-2 bg-black text-white rounded-xl text-base font-semibold transition-transform duration-300 hover:scale-105 md:text-base"
>
  Get Pricing
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
