
export default function Navbar() {

    const NavigationButton = ({ text, textColor, hoverTextColor }) => {
        return (
            <button
                className={`
          bg-transparent
          ${textColor}
          ${hoverTextColor}
          flex items-center justify-center
          w-[100px] h-[44px]
          md:w-[130px] md:h-[60px]
          font-medium
          text-[16px] md:text-[24px]
          transition-colors
        `}
            >
                {text}
            </button>
        );
    };

    return (
        <nav
            className="
        flex items-center justify-center
        w-full h-[64px] md:h-[90px]
        px-4 md:px-[32px]
        gap-3 md:gap-[24px]
        flex-wrap
      "
        >
            <NavigationButton text="Classes" textColor="text-white" hoverTextColor="hover:text-accent" />
            <NavigationButton text="Events" textColor="text-white" hoverTextColor="hover:text-accent" />
            <NavigationButton text="Gallery" textColor="text-white" hoverTextColor="hover:text-accent" />
            <NavigationButton text="About Us" textColor="text-white" hoverTextColor="hover:text-accent" />
            <NavigationButton text="Contact Us" textColor="text-white" hoverTextColor="hover:text-accent" />
        </nav>
    );
}
