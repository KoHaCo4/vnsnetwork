import Image from "next/image";
import ImageModal from "../ui/ImageModal";

export default function Portfolio() {
  const dokumentasi = [];
  const poster = [
    { id: 1, imageUrl: "/portfolio/poster/poster-1.jpeg", altText: "Poster 1" },
    { id: 2, imageUrl: "/portfolio/poster/poster-2.jpeg", altText: "Poster 2" },
    { id: 3, imageUrl: "/portfolio/poster/poster-3.jpeg", altText: "Poster 3" },
  ];
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Portofolio Kami
        </h2>
        {dokumentasi.length > 0 && (
          <div className="w-full h-auto py-3">
            <h3 className="text-xl font-semibold mb-2">Poster & Promo</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
              {/* Portfolio Item 1 */}
              {dokumentasi.map((item) => (
                <div
                  key={item.id}
                  className="group relative w-full aspect-[4/3] bg-white rounded-lg border 
             shadow-lg overflow-hidden cursor-pointer active:scale-[0.98] transition"
                >
                  <ImageModal src={item.imageUrl} alt={item.altText} />

                  {/* Overlay desktop (only on hover) */}
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                  hidden md:flex items-center justify-center transition-opacity duration-300"
                  >
                    <span className="text-white text-3xl">🔍</span>
                  </div>

                  {/* Icon kecil tetap tampil di mobile */}
                  <div
                    className="absolute bottom-2 right-2 md:hidden bg-black/60 text-white 
                  text-xs px-2 py-1 rounded-md"
                  >
                    Klik
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {poster.length > 0 && (
          <div className="w-full h-auto py-3">
            <h3 className="text-xl font-semibold mb-2">Poster & Promo</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
              {/* Portfolio Item 2 */}
              {poster.map((item) => (
                <div
                  key={item.id}
                  className="group relative w-full aspect-[4/3] bg-white rounded-lg border 
             shadow-lg overflow-hidden cursor-pointer active:scale-[0.98] transition"
                >
                  <ImageModal src={item.imageUrl} alt={item.altText} />

                  {/* Overlay desktop (only on hover) */}
                  <div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
                  hidden md:flex items-center justify-center transition-opacity duration-300"
                  >
                    <span className="text-white text-3xl">🔍</span>
                  </div>

                  {/* Icon kecil tetap tampil di mobile */}
                  <div
                    className="absolute bottom-2 right-2 md:hidden bg-black/60 text-white 
                  text-xs px-2 py-1 rounded-md"
                  >
                    Klik
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
