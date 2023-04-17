import Button from "../button";
import Navigation from "../navigation";
import MobileNavigation from "../mobile-navigation";
import useModal from "../hook/useModal";
import BurgerSvg from "@icons/menu-outline";

function Header() {
  const { visible, toggle } = useModal();

  return (
    <>
      <header className="header bg-slate-950 text-white sticky top-0 z-10">
        <div className="container mx-auto flex flex-row justify-between items-center h-20 relative">
          <div className="">
            <h1 className="text-4xl font-bold px-5 xl:px-0">Logo</h1>
          </div>
          <Navigation />
          <div
            className="bg-black h-16 w-16 max-xl:flex items-center justify-center hidden "
            onClick={() => toggle()}
          >
            <BurgerSvg className="w-8 h-8 fill-white" />
          </div>
          <MobileNavigation toggle={toggle} visible={visible} />
        </div>
      </header>
    </>
  );
}

export default Header;
