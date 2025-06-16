import React from 'react';

type Genre = {
  name: string;
  image: string;
};

type Props = {
  genres: Genre[];
  onSelect: (category: string) => void;
};

export default function GenreScroller({ genres, onSelect }: Props) {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Browse by Genre</h2>
      <div className="overflow-x-auto scrollbar-hide px-2">
        <div className="flex gap-6 md:gap-8 lg:gap-10 px-2">
          {genres.map((genre) => (
            <div
              key={genre.name}
              onClick={() => onSelect(genre.name)}
              className="flex flex-col items-center cursor-pointer group transition duration-200"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all">
                <img
                  src={`/images/${genre.image}`}
                  alt={genre.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm md:text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {genre.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
