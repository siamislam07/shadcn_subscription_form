import Image from "next/image";
import { Subscription } from "../components/subscription";
import { Subscriber } from "../components/subscriber";

export default function Home() {
  return (
    <div className="flex h-screen items-center flex-col md:flex-row justify-around p-2">
      <Subscription/>
      <Subscriber/>
    </div>
  );
}
