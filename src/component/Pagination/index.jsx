import React from 'react'
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss'


const Pagination = ({onChangePage}) => {
  return (
    
    <ReactPaginate
    className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)  => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
    />
  )
}

export default Pagination