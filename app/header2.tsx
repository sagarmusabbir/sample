import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function Header2() {
  return (
    <Navbar
      fluid
      className="bg-[#06091b]"
      theme={{
        brand: {
          base: "",
        },
        collapse: {
          base: "w-full md:hidden ",
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
        },
        toggle: {
          base: "inline-flex items-center  text-sm text-white hover:text-gray-100 focus:outline-none md:hidden ",
          icon: "h-6 w-6 shrink-0",
        },
        link: {
          base: "block py-2 pl-3 pr-4 md:p-0 text-white border-b-2 ",
          active: {
            on: "border-[#8167ff]",
            off: "border-black hover:border-[#8167ff]   ",
          },
        },
      }}
    >
      <div className="flex items-center space-x-8">
        <NavbarBrand href="#">
          <Image
            width={81.5}
            height={26.5}
            src="/lg.svg"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
        <div className="hidden md:flex items-center justify-between space-x-8  ">
          <Link
            href="#"
            className="text-white border-b-2  border-[#06091b] hover:border-[#8167ff] py-1 text-xs"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white border-b-2 border-[#8167ff] py-1 text-xs"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white border-b-2 border-[#06091b] hover:border-[#8167ff] py-1 text-xs"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white border-b-2 border-[#06091b] hover:border-[#8167ff] py-1 text-xs"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-white border-b-2 border-[#06091b] hover:border-[#8167ff] py-1 text-xs"
          >
            Customer Stories
          </Link>
        </div>

        {/* <div className="flex">
          <Link href="#">Home</Link>
          <Link href="#">Home</Link>
          <Link href="#">Home</Link>
        </div> */}
      </div>

      <div className="flex space-x-4 md:order-2">
        <Button
          color="light"
          size="sm"
          className="hidden md:block"
          theme={{
            color: {
              light: "border border-white bg-transparent text-white   ",
            },
            size: {
              sm: "px-3 py-1.5 text-xs",
            },
          }}
        >
          Contact Us
        </Button>
        <Button
          color="light"
          size="sm"
          theme={{
            color: {
              light: " bg-white text-black   ",
            },
            size: {
              sm: "px-3 py-1.5 text-xs",
            },
          }}
          className="md:hidden "
        >
          Contact Us
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
