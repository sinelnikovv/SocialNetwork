import React, { useState } from "react";
import s from "./Paginator.module.scss";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let [currentP, setcurrentP] = useState(currentPage);

  let leftNumberPage = currentP - portionSize < 0 ? 0 : currentP - portionSize;
  let rightNumberPage = currentP + portionSize;

  const prevPageButton = () => {
    setcurrentP(currentP - 1);
    onPageChanged(currentPage - 1);
  };

  const nextPageButton = () => {
    setcurrentP(currentP + 1);
    onPageChanged(currentPage + 1);
  };

  const firstPageButton = () => {
    setcurrentP((currentP = 1));
    onPageChanged((currentPage = 1));
  };

  const lastPageButton = () => {
    setcurrentP((currentP = pagesCount));
    onPageChanged((currentP = pagesCount));
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
          disabled={currentP === 1}
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
                    setcurrentP(p);
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
          disabled={currentP === pagesCount}
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
