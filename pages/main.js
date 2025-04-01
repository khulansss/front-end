import Image from "next/image";
import { useRouter } from "next/router";

export default function Task6() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black mt-20">Khulan 11c</h1>
      <div className="w-50 max-w-2xl h-auto bg-gray-300 shadow-2xl mt-10 rounded-3xl flex flex-wrap justify-center gap-6 items-center p-4">
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("hiceel1"); }}
            aria-label="Go to Hiceel1"
          >
            Hiceel1
          </button>
        </div>
        <div className="">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("hiceel2"); }}
            aria-label="Go to Hiceel2"
          >
            Hiceel2
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("hiceel3"); }}
            aria-label="Go to Hiceel3"
          >
            Hiceel3
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("lab4"); }}
            aria-label="Go to Hiceel4"
          >
            Hiceel4
          </button>
        </div>
      </div>
    </div>
  );
}
