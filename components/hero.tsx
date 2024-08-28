import { Button } from "flowbite-react";

export function Hero() {
  return (
    <section className="bg-[#333333] bg-[url('https://raw.githubusercontent.com/sagarmusabbir/sample/main/public/cover.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="mx-auto max-w-[1280px] h-screen  px-4 pt-8 md:px-12 md:pt-16 text-center flex-row space-y-[35px] items-center">
        <div className=" items-center">
          <span className="text-white md:text-[64px] text-4xl font-bold font-['Mona Sans'] md:leading-[96px] leading-[54px]">
            Passionate
          </span>
          <span className="text-white md:text-[64px] text-4xl font-light font-['Mona Sans'] md:leading-[96px] leading-[54px]">
            {" "}
            About <br />
            Providing{" "}
          </span>
          <span className=" text-[#9b86fe]  md:text-[64px] text-4xl font-black font-['Mona Sans'] md:leading-[96px] leading-[54px]">
            Extreme
          </span>
          <span className="text-[#9b86fe] md:text-[64px] text-4xlfont-light font-['Mona Sans'] md:leading-[96px] leading-[54px]">
            {" "}
          </span>
          <span className="text-[#9b86fe]  md:text-[64px] text-4xl font-black font-['Mona Sans'] md:leading-[96px] leading-[54px]">
            Value
          </span>
        </div>
        <div className="md:max-w-[824px] max-w-[306px] mx-auto items-center ">
          <p
            className="
       
          text-center text-white md:text-base text-xs  font-normal font-['Mona Sans'] md:leading-[30.04px] leading-snug"
          >
            Ace8 is people focused organization that is dedicated to
            underpromising and overdelivering.
          </p>
        </div>
      </div>
    </section>
  );
}
