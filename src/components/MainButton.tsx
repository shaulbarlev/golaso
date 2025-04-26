interface MainButtonProps {
  text: string;
  onClick?: () => void;
}

const MainButton = ({ text, onClick }: MainButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-xl text-black font-bold bg-white px-7 py-4 rounded-full shadow-lg border-3 border-black btn-light-sweep"
    >
      <span className="text-shadow-lg relative z-10">{text}</span>
    </button>
  );
};

export default MainButton;
