const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)} className="px-4 py-2 bg-gray-200 rounded">
            Previous
          </button>
        )}
        <span>Page {currentPage} of {totalPages}</span>
        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded">
            Next
          </button>
        )}
      </div>
    );
  };
  
  export default Pagination;