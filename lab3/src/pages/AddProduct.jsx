import React from "react";

export default function AddProduct({ categories, handleChange, handleSubmit, handleAddProduct }) {
  return (
    <div className="max-w-xl m-auto mt-3">
      <h1 className="text-xl font-bold mb-3">Add new Product</h1>
      <form  onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="name" className="input" onChange={handleChange}/>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="price" className="label">Price</label>
          <input type="text" name="price" className="input" onChange={handleChange}/>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="category" className="label">Category</label>
          <select name="category" className="input" onChange={handleChange}>
            {
                categories.slice(1).map(cat=>(
                    <option key={cat.id} value = {+cat.id}>
                        {cat.name}
                    </option>
                ))
            }
            <option value="1">Burger</option>
            <option value="2">Fries</option>
          </select>
        </div>
        <button className="btn btn-primary" >add</button>
      </form>
    </div>
  );
}
