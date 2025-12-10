import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
 <>
  <section className="w-full py-12 px-4 md:px-10 lg:px-20">
      <div className=" p-6 md:p-10  max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 mt-10">
          Karla Caves History
        </h2>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 mt-2">
          Caves are hollow places naturally found in the underground. The caves
          are high enough for a human to enter it. Karla caves are one amongst
          the many places to visit in{" "}
          <Link  href="https://en.wikipedia.org/wiki/Lonavala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Lonavala
          </Link>
          . A cave is generally built by nature by the natural weathering of
          huge rocks. These rocks take a form of cave and were used for multiple
          purposes. These are one of the ancient caves in Maharashtra. The style
          of this cave is mixed form of Indian and Buddhist style of rock
          carving. It is so said that these caves were built between two
          different periods. 2nd century BC and 2nd century AD and then between
          5th century AD and 10th century. The archaeological survey of India
          has taken the charge of the Karla caves. The main hall inside the
          Karla caves catches your maximum attention as it is a huge hall that
          is beautifully carved in rock. The Karla Caves history is an enriched
          story of the royal India.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          There are windows cut in the stone to let light enter the dark caves.
          They would force you to think how on earth at those times was it
          built? The caves are reported to build between 2nd century BC and 5th
          century AD. This is a long period of construction and you can feel the
          labour and craftsmanship. The major attraction is the huge prayer hall
          inside the Karla cave. From the Karla caves one can get a glimpse of
          various other caves in the locality. Interestingly Karli is a place in{" "}
          <Link href="https://en.wikipedia.org/wiki/Maharashtra" target="_blank" rel="noopener noreferrery" className="text-blue-600 hover:underline">
            Maharashtra
          </Link>{" "}
          that marks the division of north and south India. The location is a
          unique proposition of these caves. They are also referred to as karle
          caves or karla cells. The entire complex of the cave is now under the
          protection of Archaeological Survey of India.
        </p>

        {/* Images section */}
           <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
          {/* Image 1 */}
          <div className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-md group">
            <Image
              src="/assets/history1.png"
              alt="Karla cave carvings"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full md:w-1/2 h-64 overflow-hidden rounded-md group">
            <Image
              src="/assets/history2.png"
              alt="Karla cave architecture"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mb-6">
          Breathtaking Places To Visit In Lonavala
        </p>

        {/* More content */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
          It’s a beautiful stupa that’s built inside the hall. Inscriptions in
          the cave depict the authentication of Buddhist history here.
          ‘Mahasamghika’ an early Buddhist school is connected with these caves.
          Here in this school of Buddhism preaching was done. People used to sit
          and worship here. The{" "}
          <Link href="/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            location
          </Link>{" "}
          of the cave is serene and far from the hue and cries. The popularity
          of this Buddhist school was huge at those days. There are beautiful
          carved windows built on the rock to let light enter. Monks used to
          worship here for long periods. The inscription and the sculpturing of
          the caves have made it a major tourist spot. The cave is definitely a
          must among places to visit in Lonavala.
        </p>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The Buddhist ideologies are well depicted through the walls of the
          caves. It is situated at a high altitude in a difficult terrain, and
          hence it is amazing to know how it was actually build. The main cave
          has a huge{" "}
          <Link href="/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            chaitya
          </Link>{" "}
          with almost 37 huge pillars. These pillars are octagonal in shape. The
          sculpture has carved male female and animal figures on the walls. Lots
          of prayer halls, and viharas are well decorated in the cave. The Karla
          caves history is ancient. It is spread over a long period and hence
          the archaeologists have shown special interest in studying these
          beautiful caves.
        </p>
      </div>
    </section>
 </>
  )
}

export default page