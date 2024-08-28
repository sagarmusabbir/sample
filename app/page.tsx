import Image from "next/image";
import { Header2 } from "./header2";
import { DefaultHero } from "@/components/flowbitehero";

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <DefaultHero />
    </main>
  );
}
