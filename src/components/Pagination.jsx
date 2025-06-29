import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-full bg-artistry-yellow text-artistry-dark font-body font-semibold disabled:opacity-50"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded-full font-body font-semibold ${currentPage === i + 1 ? 'bg-artistry-pink text-white' : 'bg-white text-artistry-dark'}`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-full bg-artistry-yellow text-artistry-dark font-body font-semibold disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
