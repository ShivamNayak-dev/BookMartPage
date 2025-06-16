import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Optional: For arrows

type Genre = {
  name: string;
  image: string;
};

const genres: Genre[] = [
  { name: 'Science Fiction', image: '/images/scifi.jpg' },
  { name: 'Fantasy', image: '/images/fantasy.jpg' },
  { name: 'Romance', image: '/images/romance.jpg' },
  { name: 'Cooking', image: '/images/cooking.jpg' },
  { name: 'Romantasy', image: '/images/romantasy.jpg' },
  { name: 'Manga', image: '/images/manga.jpg' },
];

const BuyerHome: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 px-4 text-center relative">
      <h2 className="text-4xl font-bold mb-4">Books</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Explore millions of new and used books spanning every genre, from bestsellers to rare and out-of-print editions.
        Whether you're searching for the latest fiction, timeless classics, or niche titles, we offer something for everyone.
      </p>

      <h3 className="text-2xl font-semibold mt-12 mb-6">By Genre</h3>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-4 hide-scrollbar"
        >
          {genres.map((genre) => (
            <div key={genre.name} className="flex-shrink-0 text-center w-36">
              <img
                src={genre.image}
                alt={genre.name}
                className="w-28 h-28 object-cover rounded-full mx-auto shadow-md hover:scale-105 transition-transform duration-200"
              />
              <p className="mt-2 font-medium">{genre.name}</p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default BuyerHome;
