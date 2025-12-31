export default function Navbar() {
  const NavigationButton = ({ text }) => {
    return (
      <button className=" text-white hover:text-primary flex items-center justify-center px-5 py-1.5 xl:py-3 gap-2.5  transition-colors duration-300">
        <span className="font-secondary font-medium md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] leading-6 lg:leading-9">
          {text}
        </span>
      </button>
    );
  };

  return (
    <nav
      className=" flex items-center justify-center w-full px-8 py-3 xl:px-5 xl:py-3 gap-2 xl:gap-3
        
        
      "
    >
      <NavigationButton text="Classes" />
      <NavigationButton text="Events" />
      <NavigationButton text="Gallery" />
      <NavigationButton text="About Us" />
      <NavigationButton text="Contact Us" />
    </nav>
  );
}
