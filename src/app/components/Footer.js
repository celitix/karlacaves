import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/gallery2.png" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/* Dummy Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-cyan-600">Karla Caves</div></Link>
          <p className="text-gray-300 text-base ">
            Experience beautifully landscaped gardens, illuminated fountains, and serene walkways by the KRS Dam.Walk through centuries-old chaityas and viharas that showcase India’s earliest Buddhist artistry.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/all-about-chaitya-griha" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
               All about Chaitya Griha!
              </p>
            </Link>

            <Link href="/blog/karla-caves-the-gift-of-ancient-history" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
            Karla Caves: The Gift of Ancient History
              </p>
            </Link>

            <Link href="/blog/things-to-know-before-you-go-to-karla-caves" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
                Things to know before you go to Karla caves
              </p>
            </Link>

             <Link href="/blog//karla-caves-blend-of-spirituality-nature" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog4.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-cyan-500 transition leading-snug">
           Karla Caves: Blend Of Spirituality & Nature
              </p>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-cyan-500 transition">Home</Link></li>
            <li><Link href="/karla-caves-history" className="hover:text-cyan-500 transition">History</Link></li>
            <li><Link href="/karla-caves-images" className="hover:text-cyan-500 transition">Gallery</Link></li>
            <li><Link href="/how-to-reach" className="hover:text-cyan-500 transition">How to reach</Link></li>
            <li><Link href="/blog" className="hover:text-cyan-500 transition">Blog</Link></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3777.3334363075423!2d73.470453!3d18.783288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2aa834e2141d3%3A0x7a7b9cf6961b6d76!2sKarla%20Caves!5e0!3m2!1sen!2sus!4v1762258912180!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
