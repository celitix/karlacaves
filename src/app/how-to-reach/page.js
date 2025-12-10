import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
   <>
       <section className="w-full  py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
  
        <div className="p-6 md:p-10 ">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-12">
             How To Reach
          </h3>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            If you are on for{" "}
            <Link href="https://en.wikipedia.org/wiki/Lonavala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Lonavala
            </Link>{" "}
            tourism, Karla caves should top your check list. These are the caves
            situates at Karli, Lonavala. They are Buddhist shrines and were
            built in order to pray and provide shelter to monks. The Buddhist
            traders looked up to these caves as their staying place. Lonavala in
            Maharashtra is a magnificent hill station. It is surrounded by green
            valleys from all sides and houses some ancient caves. One of the
            most visited caves in Lonavala are the{" "}
            <Link href="/" target="_blank" className="text-blue-600 hover:underline">
              Karla caves
            </Link>
            . They were built as a result of Buddhist interest of building
            shrines on the trade routes. The caves are situated at Karli in
            lonavala. The location of lonavala is between two major cities
            Mumbai and Pune. It is easily accessible from either of the major
            cities. Karla is about 120 Km from Mumbai and 60 Km from Pune. The{" "}
            <Link href="https://en.wikipedia.org/wiki/Terrain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              terrain
            </Link>{" "}
            is tough and hence the reach to these caves are tricky at times. It
            is situated at an elevated terrain that needs to be climbed.
            Khandala and Lonavala are two famous hill stations near these caves.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <strong>By Road:</strong> <br />
            The caves can be reached by road as there are frequent options
            available to travel by road. Buses and private vehicles have a
            well-defined route. The busses are quite frequent from Lonavala. So
            if you reach lonavala, the Karla caves are just nearby. From Mumbai
            or Pune there is a good connectivity of buses. Buses plying between
            Mumbai and Pune generally halt at Karla.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            <strong>By Train:</strong> <br />
            Lonavala is the nearest railway station. Local Malavali rail station
            in Bhaja village is just 5 km south to Karla town.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8">
            <strong>By Air:</strong> <br />
            There is no local airport. The nearest ones are Mumbai and Pune.
            Once you reach Pune or Mumbai you can reach Lonavala by train or
            bus. Or you can hire a taxi from either of the cities. There is 20
            minutes steep climbing to reach Karla and hence the choice of mode
            of transport should be wise. Mumbai is the nearest international
            airport for the foreign tourists.
          </p>

          {/* Image + text section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
            {/* Image 1 */}
            <div className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-md group">
              <Image
                src="/assets/reach1.jpg"
                alt="Karla caves pathway"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Info Box */}
            <div className="bg-white rounded-md shadow-sm p-4 text-center md:w-1/2">
              <h4 className="text-gray-800 font-semibold mb-2">
                Distances at a glance
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lonavala to Karla caves – 11 km <br />
                Pune to Karla caves – 58 km <br />
                Mumbai to Karla caves – 94 km <br />
                Alibaug to Karla caves – 88 km <br />
                Satara to Karla caves – 163 km <br />
                Nashik to Karla caves – 226 km
              </p>
              <p className="text-xs text-gray-600 font-medium mt-3">
                Lonavala tourism is actually a multi-gain experience.
              </p>
            </div>

            {/* Image 2 */}
            <div className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-md group">
              <Image
                src="/assets/reach2.png"
                alt="Aerial view of Karla caves"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default page