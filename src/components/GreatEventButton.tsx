import { FaWhatsapp } from "react-icons/fa";

const GreatEventButton = () => {
  return (
    <a href="https://wa.me/message/IG2MOYAMRYOLL1">
      <button className="text-xl text-black font-bold bg-sky-300 px-7 py-4 rounded-full shadow-lg border-3 border-black btn-light-sweep">
        <span className="text-shadow-lg ml-2 relative z-10">
          לחץ כאן לאירוע מדהים!
        </span>
        <div className="inline-block align-[-5px] relative z-10">
          <FaWhatsapp size={30} title="צור קשר בוואטסאפ" />
        </div>
      </button>
    </a>
  );
};

export default GreatEventButton;
