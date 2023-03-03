import Image from "next/image";
import Link from "next/link";
import logo from "public/logo-cuidar-bem.png";

const Header = () => {
  return (
    <header className="w-screen h-20 shadow-lg fixed bg-white px-6">
      <div className="max-w-6xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo Cuidar Bem" width={180} height={50} />
        </Link>

        <nav className="h-full">
          <ul className="h-full flex gap-6">
            <li className="h-full">
              <Link href="/" className="h-full flex items-center p-4">
                Home
              </Link>
            </li>

            <li className="h-full">
              <Link href="#" className="h-full flex items-center p-4">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
