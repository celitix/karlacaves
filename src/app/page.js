import HeroSection from "./components/hero";
import Link from "next/link";

export default function Home() {
  return (
<>
<HeroSection />

{/* Welcome Section */}
   <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Welcome To Karla Caves
      </h2>
      <div className="border-t border-gray-300 my-4"></div>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
        Yet other amazing beauties of Lonavala Maharashtra (India) are the Karla caves. Maharashtra has been blesses with number of caves, tunnels and forts. These rock structures are beautiful and huge. The Karla caves are ancient Buddhist rock cut cave shrines. They were once the worship place of the Buddhists. Precisely the Karla caves are situated at Karli near Lonavala. Lonavala in itself is a hill station that houses several tourist points. The geographic location of the caves says a lot about its presence. The caves are 60 kilometers away from the city of Pune. It is said that the cave is located near an ancient trade route. The Buddhists were logical enough to locate their shrines near to the trade routes. The traders must have availed this facility as a lodging place. The cave is right near to the Arabian Sea and the Deccan. So it is clear that the caves are associated with the Buddhist. Later they also got associated with Hinduism. The structure of the cave is sure to awe struck you. It is huge and magnificent. Visitors have reported that the best time to visit the cave is monsoon. Monsoon in Maharashtra is beautiful. The hill stations and the rocky terrain in the state see huge incoming of tourists. The greenery and the high altitude is a beautiful amalgamation.{" "}
        <Link
          href="/karla-caves-history"
          className="text-blue-600 hover:underline font-medium transition-all"
        >
          Read More..
        </Link>
      </p>

      <div className="max-w-3xl mx-auto mt-10">
        <p className="italic text-gray-800 text-sm md:text-base font-medium leading-relaxed">
          <span className="block font-semibold text-gray-900 mb-2">
           Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. The world is a book and those who do not travel read only one page. Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming{" "}
            'Wow! What a Ride!'
          </span>
        </p>
      </div>
    </section>

</>
  );
}
