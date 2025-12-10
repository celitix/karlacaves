import Image from 'next/image'

const page = () => {

 const images = [
    "/assets/galllery1.png",
    "/assets/gallery2.png",
    "/assets/gallery3.png",
    "/assets/gallery4.png",
    "/assets/gallery5.png",
    "/assets/gallery6.png",
    "/assets/gallery7.jpg",
    "/assets/gallery8.jpg",
    "/assets/gallery9.jpg",
    "/assets/gallery10.jpg",
    "/assets/gallery11.png",
  ];


  return (
  <>
    <section className="w-full bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black mt-16">
        Karla Caves Images
        </h2>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] h-40 md:h-44 lg:h-48 overflow-hidden rounded-md"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  </>
  )
}

export default page