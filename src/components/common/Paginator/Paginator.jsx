import React from "react";
import s from "./Paginator.module.scss";

const Paginator = ({
  totalCount,

  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let leftNumberPage =
    currentPage - portionSize < 0 ? 0 : currentPage - portionSize;
  let rightNumberPage = currentPage + portionSize;

  const prevPageButton = () => {
    onPageChanged(currentPage - 1);
  };

  const nextPageButton = () => {
    onPageChanged(currentPage + 1);
  };

  const firstPageButton = () => {
    onPageChanged(1);
  };

  const lastPageButton = () => {
    onPageChanged(pagesCount);
  };

  return (
    <div>
      <div className={s.paginatorContainer}>
        <button className={s.paginatorButton} onClick={firstPageButton}>
          &#8810;
        </button>

        <button
          className={s.paginatorButton}
          onClick={prevPageButton}
          disabled={currentPage === 1}
        >
          &#60;
        </button>

        <div className={s.paginatorPages}>
          {pages
            .filter((p) => p >= leftNumberPage && p <= rightNumberPage)
            .map((p) => {
              return (
                <div
                  onClick={(e) => {
                    onPageChanged(p);
                  }}
                  key={p}
                  className={
                    s.paginatorNumber +
                    " " +
                    (currentPage === p ? s.selectedPage : "")
                  }
                >
                  {p}
                </div>
              );
            })}
        </div>

        <button
          className={s.paginatorButton}
          onClick={nextPageButton}
          disabled={currentPage === pagesCount}
        >
          &#62;
        </button>

        <button className={s.paginatorButton} onClick={lastPageButton}>
          &#8811;
        </button>
      </div>
    </div>
  );
};

export default Paginator;
