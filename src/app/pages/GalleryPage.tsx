import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryData } from '../data/galleryData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function GalleryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const gallery = categoryId ? galleryData[categoryId] : null;

  if (!gallery) {
    return (
      <div className="min-h-screen bg-[#F5F1E8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>Gallery Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#6B2C2C] text-white rounded hover:bg-[#5A2424] transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const lightboxSlides = gallery.images.map(img => ({
    src: img.url,
    title: img.title,
    description: img.description
  }));

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#6B2C2C] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <button
            onClick={() => navigate('/#portfolio')}
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
          <h1 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'serif' }}>
            {gallery.category}
          </h1>
          <p className="text-white/90 max-w-3xl">
            {gallery.description}
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gallery.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] relative">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg mb-1" style={{ fontFamily: 'serif' }}>
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        on={{
          view: ({ index }) => setLightboxIndex(index)
        }}
      />
    </div>
  );
}
