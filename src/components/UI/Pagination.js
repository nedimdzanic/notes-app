import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import Note from "../../components/Notes/Note";
import classes from "./Pagination.module.css";

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            date={item.date}
            time={item.time}
            edited={item.edited}
            favourite={item.favourite}
          />
        ))}
    </>
  );
};

const Pagination = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes.pageNum}
        previousLinkClassName={classes.pageNum}
        nextLinkClassName={classes.pageNum}
        activeLinkClassName={classes.active}
      />
    </>
  );
};

export default Pagination;
