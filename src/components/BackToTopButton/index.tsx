import { ArrowUp } from "phosphor-react";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="border border-primary bg-secondary rounded-full p-2 hover:animate-bounce fixed z-[15] right-6 bottom-6"
      onClick={scrollToTop}
    >
      <ArrowUp size={24} className="text-primary" />
    </button>
  );
};

export default BackToTopButton;
