import MenuBtn from "./MenuBtn";

function Navbar() {
    return (
    <>
        <div className="md:flex hidden w-full justify-between px-12 md:px-24 items-center">
          <h1 className="text-5xl md:text-left text-end md:self-start  py-5 uppercase font-bold font-dirk ">
            Jo<span className="text-red-700">k</span>e Ti<span className="text-[#36561a]">me</span> 
          </h1>
          <MenuBtn />
        </div>

        <div className="flex md:hidden ">
          <h1 className="text-6xl  uppercase font-bold font-dirk ">
            Jo<span className="text-red-700">k</span>e Ti<span className="text-[#36561a]">me</span> 
          </h1>
        </div>
    </>
    );
}

export default Navbar;