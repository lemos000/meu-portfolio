const HamburgerIcon = () => {
  return (
    <button className="text-white focus:outline-none">
      <div className="flex flex-col justify-center items-center space-y-1">
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>
    </button>
  );
};

export default HamburgerIcon;