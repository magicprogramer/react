import { toFormData } from 'axios'
import { Link } from 'react-router'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import EditProduct from './EditProduct'
export default function Admin({items, categories, handlDelProduct, form, setForm}) {
  
  const navigate=useNavigate();
  const handleDelete = async (product)=>{
    const prod = await axios.delete("http://localhost:3000/menu/"+product.id);
    console.log("purged", prod);
    handlDelProduct(prod.data.id);

  }
  return (
    <div className='m-auto max-w-xl'>
      <div>
        <Link to= "/product/add" className='btn btn-info float-end clear-both'>
          Add
        </Link>
      </div>
      <div className="table table-zebra col-span-2">
    <table className='w-9/12'>
        <thead>
          <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Category</td>
          <th></th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(item=>{

              return (<tr className="hover:bg-amber-400" key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                
                <td>{categories.find(cat => cat.id == item.category).name}</td>
                <td>
                  <svg  onClick={() => navigate(`/product/update/${item.id}`)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
  <path strokeLinecap="round" className="text-amber-500" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
    </td>

                  
                
                <td>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleDelete(item)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" className='text-red-400'/>
</svg>

                </td>
              </tr>
            )})
          }
        </tbody>
       </table>
   </div>
    </div>
  )
}
