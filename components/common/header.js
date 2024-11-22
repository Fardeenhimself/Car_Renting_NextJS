import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const val = JSON.parse(sessionStorage.getItem("usr"));
    if (val) {
      setAuth(true);
    }
  }, [auth]);

  const handleSignOut = () => {
    sessionStorage.clear();
    setAuth(false);
    toast("Log Out Successfully !", { theme: "light", autoClose: 500 });
    router.push("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white body-font bg-black">
      <ToastContainer />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="/images/logo.png" className="h-[100px]" alt="Logo" />
        </Link>
        <div className="md:hidden flex items-center ml-auto">
          {" "}
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link href="/" className="mr-5 hover:text-gray-400">
            HOME
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-400">
            ABOUT US
          </Link>
          <Link href="/blogs" className="mr-5 hover:text-gray-400">
            BLOGS
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-400">
            CONTACT US
          </Link>
        </nav>
        {auth === true ? (
          <div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center bg-yellow-600 text-black font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Sign Out
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        ) : (
          <Link href="/sign">
            <button className="inline-flex items-center bg-yellow-600 text-black font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign In
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
