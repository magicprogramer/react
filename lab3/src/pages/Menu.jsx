import React from 'react'
import Search from '../Search';
import Pagination from '../Pagination';
export default function Menu({items, handleAddCart, waiting, cats, handleSelect, selectedCat, nOPages, current, 
  handlePage, handleSearch}) {
  console.log("no of pages", nOPages);
    if (waiting)
    {
      return (
        <div className='w-full flex items-center justify-center h-screen'>
          <span className="loading loading-infinity loading-xl"></span>

        </div>
      )
    }
    const pages = Array(nOPages).fill(0).map((pag, i)=>i + 1);
    console.log("pages", pages);
    console.log("current", current);
  return (
    <div className="grid grid-cols-3">
      <div className='grid grid-rows-2 '>
        <Search handleSearch={handleSearch}/>
      <div className='join join-vertical mt-0'>
      {cats.map(cat => <button className={`btn join-item ${selectedCat == cat.id ? "bg-amber-500" : ""}`} onClick={()=>handleSelect(cat.id)} key={cat.id}>{cat.name}</button>)}
      </div>
      </div>
  <div className="table table-zebra col-span-2">
    <table className='w-4/6'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            items.map((item)=>{
                return (
                <tr key={item.id}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                    {item.price}
                    </td>
                    <td>
                        <button onClick={()=>handleAddCart(item.id)} className='cursor-pointer transition-all hover:scale-125'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                 fill={item.inCart ? "black" : "none"} viewBox="0 0 24 24" 
                 strokeWidth={1.5} stroke="currentColor" 
                 className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M2.25 3h1.386c.51 0 .955.343 
                   1.087.835l.383 1.437M7.5 14.25a3 3 
                   0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                   2.1-4.684 2.924-7.138a60.114 60.114 0 
                   0 0-16.536-1.84M7.5 14.25 5.106 
                   5.272M6 20.25a.75.75 0 1 1-1.5 
                   0 .75.75 0 0 1 1.5 0Zm12.75 
                   0a.75.75 0 1 1-1.5 0 .75.75 
                   0 0 1 1.5 0Z" />
            </svg>
            </button>
                    </td>
                </tr>)
            })
        }
    </tbody></table>
    <Pagination pages = {pages} handlePage={handlePage} current={current}/>
   </div>
</div>
  )
}
