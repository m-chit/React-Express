import { Fragment } from "react";
import { Pagination } from "react-bootstrap";

import { useActivePage } from "../../Hooks/useActivePage";
const Paginations = ({ totalPage }) => {
  const { activePage, changePage } = useActivePage();

  const pushItem = (iterrablePage) => (
    <Pagination.Item
      onClick={() => changePage(iterrablePage)}
      activeLabel={false}
      active={iterrablePage === activePage}
      key={iterrablePage}
    >
      {iterrablePage}
    </Pagination.Item>
  );

  const renderPagination = () => {
    if (totalPage === 1) {
      return null;
    } else if (totalPage > 1) {
      const range = 4;
      const pagination = [];
      const paginationArr = Array.from({ length: totalPage }, (v, k) => k);

      const head = activePage - range < 0 ? 0 : activePage - range;
      const tail =
        activePage + range > totalPage ? totalPage : activePage + range - 1;
      paginationArr
        .slice(head, tail)
        .map((index) => pagination.push(pushItem(index + 1)));

      return (
        <Pagination>
          <Pagination.First onClick={() => changePage(1)} />
          {pagination}
          <Pagination.Last onClick={() => changePage(totalPage)} />
        </Pagination>
      );
    } else {
      return null;
    }
  };
  return <Fragment>{renderPagination()}</Fragment>;
};

export default Paginations;
