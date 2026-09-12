import React, { useState } from 'react';
import { Images, Fullscreen, X, ChevronLeft, ChevronRight } from 'lucide-react';

import mtMasaragaSummit from '../../../../public/images/about/mt-masaraga-summit.jpg';
import mtMasaragaCampsite from '../../../../public/images/about/mt-masaraga-campsite-3.jpg';
import mtMasaragaVanishingFalls from '../../../../public/images/about/mt-masaraga-vanishing-falls.jpg';
import mtMasaragaNaturalSpring from '../../../../public/images/about/mt-masaraga-natural-springs-trail.jpg';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: mtMasaragaSummit,
    alt: "Hikers walking along wooden boardwalk through lush tropical canopy",
    title: "Boardwalk Trek",
    subtitle: "Sub-canopy trail section"
  },
  {
    id: 2,
    src: mtMasaragaCampsite,
    alt: "Lush moss-covered tree trunks and fern details in cloud forest",
    title: "Moss & Flora",
    subtitle: "Primary cloud forest zone"
  },
  {
    id: 3,
    src: mtMasaragaVanishingFalls,
    alt: "Summit view of volcanic ridges and sunrise clouds",
    title: "Summit Caldera",
    subtitle: "Observation ridge viewpoint"
  },
  {
    id: 4,
    src: mtMasaragaNaturalSpring,
    alt: "Natural spring water source along the trail",
    title: "Natural Spring",
    subtitle: "Mid-trail water station"
  }
];

const PREVIEW_COUNT = 3;

const TrailGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const displayedImages = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, PREVIEW_COUNT);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? GALLERY_IMAGES.length - 1 : prevIndex - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === GALLERY_IMAGES.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 transition-all hover:shadow-sm/20">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-2 border-b border-outline-variant/20">
        <div className="flex items-center gap-2.5 text-on-surface">
          <Images className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold tracking-tight text-primary">Trail Gallery</h2>
        </div>
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors group cursor-pointer"
        >
          <span>{showAll ? 'Show Less' : `View All (${GALLERY_IMAGES.length})`}</span>
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayedImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openLightbox(index)}
            className="relative group rounded-xl overflow-hidden aspect-4/3 bg-surface-container-lowest border border-outline-variant/30 shadow-xs cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-white text-xs font-semibold tracking-wide">
                {image.title}
              </span>
              <span className="text-white/80 text-[11px]">
                {image.subtitle}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openLightbox(index);
              }}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer"
              title="Expand image"
            >
              <Fullscreen className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          {GALLERY_IMAGES.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
              title="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Expanded Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={GALLERY_IMAGES[selectedIndex].src}
              alt={GALLERY_IMAGES[selectedIndex].alt}
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                {GALLERY_IMAGES[selectedIndex].title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm">
                {GALLERY_IMAGES[selectedIndex].subtitle}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {GALLERY_IMAGES.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer"
              title="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TrailGallery;