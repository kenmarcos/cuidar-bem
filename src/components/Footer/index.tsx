import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import symbol from "public/symbol-cuidar-bem.png";

const Footer = () => {
  return (
    <footer className="h-44 px-6 border bg-primary border-t-black">
      <div className="max-w-6xl h-full mx-auto text-white space-y-3 sm:space-y-6 flex flex-col justify-center">
        <section className="flex justify-center items-center gap-4">
          <Image src={symbol} alt="Símbolo Cuidar Bem" />

          <h4 className="max-w-xl text-center text-sm sm:text-2xl sm:leading-10">
            A sua fonte de informações{" "}
            <span className="bg-secondary text-primary p-1 rounded-lg">
              confiável
            </span>{" "}
            para uma vida mais{" "}
            <span className="bg-secondary text-primary p-1 rounded-lg">
              saudável
            </span>
          </h4>
        </section>

        <section className="flex flex-col-reverse sm:flex-row gap-2 items-center justify-evenly">
          <span className="text-center text-sm sm:text-base">
            Cuidar Bem © {new Date().getFullYear()} Todos os Direitos
            Reservados.
          </span>

          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogo size={28} />
            </Link>

            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo size={28} />
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} />
            </Link>

            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={28} />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
