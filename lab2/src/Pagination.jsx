import React from 'react'

export default function Pagination({handlePage, pages, current}) {
  return (
      <div className="join">
    {
      pages.length > 1 && pages.map(page=><button 
        onClick = {()=>handlePage(page)} key={page} className={`join-item btn ${page == current && "btn-active"}`}>{page}</button>)
    }
    </div>
  )
}
