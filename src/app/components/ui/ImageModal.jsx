"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageModal({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail / gambar kecil */}
      <div
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* Fullscreen Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain" // ← menampilkan gambar UTUH
            />
          </div>
        </div>
      )}
    </>
  );
}
