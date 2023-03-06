import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "public/logo-cuidar-bem.png";

const navigations = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/about" },
];

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="w-screen h-20 shadow-lg fixed bg-white px-6 z-10">
      <div className="max-w-6xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Logo Cuidar Bem" width={180} height={50} />
        </Link>

        <nav className="h-full">
          <ul className="h-full flex">
            {navigations.map((navItem) => (
              <li key={navItem.label} className="h-full">
                <Link
                  href={navItem.path}
                  className={`h-full flex items-center p-4 text-lg ${
                    pathname === navItem.path ? "bg-primary text-white" : ""
                  }`}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
