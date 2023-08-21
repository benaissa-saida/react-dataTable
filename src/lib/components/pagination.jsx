import React, { useEffect, useState, useMemo } from "react";

const Pagination = ({
  total = 0,
  itemsPerPage = 5,
  currentPage = 1,
  onPageChange,
}) => {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage));
  }, [total, itemsPerPage]);

  const paginationItems = useMemo(() => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          key={i}
          className={
            i === currentPage ? "paginate_button current" : "paginate_button"
          }
          onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }

    return pages;
  }, [totalPages, currentPage, onPageChange]);

  if (totalPages === 0) return null;

  return (
    <div className="dataTables_paginate paging_simple_numbers">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={1 === currentPage || currentPage === 0}
        className={
          1 === currentPage || currentPage === 0
            ? "paginate_button previous disabled"
            : "paginate_button previous"
        }
      >
        Previous
      </button>
      {currentPage > 0 ? paginationItems : null}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={totalPages === currentPage || currentPage === 0}
        className={
          totalPages === currentPage || currentPage === 0
            ? "paginate_button next disabled"
            : "paginate_button next"
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
