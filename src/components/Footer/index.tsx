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
      <div className="max-w-6xl h-full mx-auto text-white space-y-6 flex flex-col justify-center">
        <section className="flex justify-center items-center gap-4">
          <Image src={symbol} alt="Símbolo Cuidar Bem" />

          <h4 className="max-w-xl text-center">
            A sua fonte confiável de informações para uma vida saudável.
          </h4>
        </section>

        <section className="flex items-center justify-evenly">
          <span>
            Cuidar Bem © {new Date().getFullYear()} Todos os Direitos
            Reservados.
          </span>

          <div className="flex space-x-4">
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogo size={32} />
            </Link>

            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo size={32} />
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} />
            </Link>

            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={32} />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
