
const Navbar = () => {
    return (
        <nav className="flex justify-center items-center p-4 bg-transparent backdrop-blur-lg text-white space-x-4">
        <div className="text-lg font-bold px-6">Flia</div>
      
        <div className="flex space-x-4">
          <div className="rounded-lg py-2 px-6 bg-white/10 text-white hover:bg-white/20 transition duration-300">
            <span>Home</span>
          </div>
          <div className="rounded-lg py-2 px-6 bg-transparent text-white hover:bg-white/10 transition duration-300">
            <span>Ga tau apaan</span>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  