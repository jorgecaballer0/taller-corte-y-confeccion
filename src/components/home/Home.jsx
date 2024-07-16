import SliderComponent from "./Slider";
import WppIcon from "../icons/WppIcon";

const Home = () => {
  return (
    <div>
      <section className="pt-[80px]">
        <SliderComponent />
      </section>
      <div className="fixed z-10 bottom-3 right-3 sm:bottom-6 sm:right-2 md:bottom-5 md:right-3">
        <div className="group">
          <a
            href="https://api.whatsapp.com/send?phone=5491122527693&text=Buenas tardes, me comunico por..."
            target="_blank"
            rel="noreferrer"
          >
            <WppIcon className="ml-2 transition-all cursor-pointer hover:scale-110 hover:animate-spin" />
          </a>
          <div className="absolute px-2 py-2 text-xs font-semibold text-center text-black transition-all bg-white rounded-md opacity-0 pointer-events-none right-full top-2 w-36 group-hover:opacity-100 sm:hidden md:hidden">
            ¡Envianos tu mensaje!
            <svg
              className="absolute left-[54%] bottom-1/3 h-3 w-full -rotate-90 text-white"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
