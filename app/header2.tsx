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
      className="bg-black max-w-[1920px] py-8 "
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
            width={163}
            height={52}
            src="/lg.svg"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
        <div className="hidden md:flex items-center justify-between space-x-8  ">
          <Link
            href="#"
            className="text-white text-lg font-bold  capitalize leading-[34.67px]  border-b-2  border-[#06091b] hover:border-[#8167ff] py-1 "
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white text-lg font-bold  capitalize leading-[34.67px] border-b-2 border-[#8167ff] py-1"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white text-lg font-bold  capitalize leading-[34.67px]  border-b-2  border-[#06091b] hover:border-[#8167ff] py-1 "
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white text-lg font-bold  capitalize leading-[34.67px]  border-b-2  border-[#06091b] hover:border-[#8167ff] py-1 "
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-white text-lg font-bold  capitalize leading-[34.67px]  border-b-2  border-[#06091b] hover:border-[#8167ff] py-1 "
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

      <div className="flex space-x-4 md:order-2 ">
        <div className="hidden md:inline-flex h-14 px-10 py-3 rounded-lg border-2 border-white justify-center items-center gap-2.5 ">
          <button className=" text-white text-lg font-extrabold font-['Mona Sans'] leading-9">
            Contact Us
          </button>
        </div>
        <div className="md:hidden  h-14 px-10 py-3 rounded-lg border-2 border-white justify-center items-center gap-2.5 ">
          <button className=" text-white text-lg font-extrabold font-['Mona Sans'] leading-9">
            Contact Us
          </button>
        </div>

        {/* <Button
          // color="light"
          // size="sm"
          className="bg-transparent hidden md:inline-flex h-[54px] px-10 py-3 rounded-[10px] border-2 border-white justify-center items-center gap-2.5 text-white focus:outline-none enabled:hover:bg-white enabled:hover:text-black"
          // theme={{
          //   base: "h-[54px] px-10 py-3 rounded-[10px] border-2 border-white justify-center items-center gap-2.5 inline-flex",
          //   color: {
          //     light: "border-2 border-white bg-transparent text-white   ",
          //   },
          //   size: {
          //     sm: "px-3 py-1.5 text-xs ",
          //   },
          // }}
        >
          Contact Us
        </Button> */}
        {/* <Button
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
        </Button> */}
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
