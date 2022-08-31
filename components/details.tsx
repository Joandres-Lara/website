import Image from "next/image";

export default function Details() {
 return (
  <div className="flex flex-row flex-nowrap h-screen">
   <div className="relative w-1/2">
    <Image layout="fill" src="/main-photo.jpg" alt="Joan Andrés Lara Mora" />
   </div>
   <div className="w-1/2">
    <h1 className="text-black text-9xl">Joan Andrés Lara Mora</h1>
    <h2 className="text-black text-4xl">Fullstack developer</h2>
   </div>
  </div>
 );
}
