import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl uppercase">Wellcome</h1>
      <h3>fourtwozero means not <span className="text-pink-600 uppercase font-bold">four twenty</span></h3>
    </div>
  );
}
