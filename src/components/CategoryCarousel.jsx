import React from 'react';

function CategoryCarousel({ categories }) {
  return (
    <div className="w-full overflow-x-auto py-4 bg-white border-b">
      <div className="flex gap-6 px-4 min-w-max">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center min-w-[80px]">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-artistry-pink mb-1 flex items-center justify-center bg-artistry-light">
              <img src={cat.image} alt={cat.name} className="object-cover w-full h-full" />
            </div>
            <span className="text-xs font-body text-artistry-dark whitespace-nowrap">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCarousel; 