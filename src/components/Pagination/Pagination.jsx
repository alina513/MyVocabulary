import React from 'react';
import { Wrapper, List, Button, Activ } from './Pagination.styled';

const Pagination = ({ totalPages, page, onPageChange }) => {
  const handlePageChange = newPage => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const renderDots = key => (
      <li key={key} className="dots">
        ...
      </li>
    );

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i}>
            <Activ $isactive={page === i} onClick={() => handlePageChange(i)}>
              {i}
            </Activ>
          </li>
        );
      }
    } else {
      let s = 1;
      let e = 3;
      if (page > 1) {
        s = page - 1;
        e = page + 1;
      }
      if (page > totalPages - 3) {
        s = totalPages - 3;
        e = totalPages - 1;
      }

      for (let i = s; i <= e; i++) {
        pageNumbers.push(
          <li key={i}>
            <Activ $isactive={page === i} onClick={() => handlePageChange(i)}>
              {i}
            </Activ>
          </li>
        );
      }

      pageNumbers.push(renderDots('dots1'));

      for (let i = totalPages; i <= totalPages; i++) {
        pageNumbers.push(
          <li key={i}>
            <Activ $isactive={page === i} onClick={() => handlePageChange(i)}>
              {i}
            </Activ>
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <Wrapper>
      <List>
        <li>
          <Button disabled={page === 1} onClick={() => handlePageChange(1)}>
            {'<<'}
          </Button>
        </li>
        {page !== 1 && (
          <li>
            <Button onClick={() => handlePageChange(page - 1)}>{'<'}</Button>
          </li>
        )}
        {renderPageNumbers()}
        {page !== totalPages && (
          <li>
            <Button onClick={() => handlePageChange(page + 1)}>{'>'}</Button>
          </li>
        )}
        <li>
          <Button
            disabled={page === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {'>>'}
          </Button>
        </li>
      </List>
    </Wrapper>
  );
};

export default Pagination;
