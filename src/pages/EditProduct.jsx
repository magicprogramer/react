import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct({ categories, handleEditProduct}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", price: "", category: 1 });
    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get(`http://localhost:3000/menu/${id}`);
            setForm(data);
          } catch (error) {
            console.error("Error fetching data:");
          }
        };
      
        getData();
      }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleEditProduct(form);
        navigate("/admin");
    };

  return (
    <div className="max-w-xl m-auto mt-3">
      <h1 className="text-xl font-bold mb-3">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
          <label className="label">Name</label>
          <input className="input" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="label">Price</label>
          <input type ="number" className="input" name="price" value={form.price} onChange={handleChange} />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="label">Category</label>
          <select className="input" name="category" value={form.category} onChange={handleChange}>
            {categories.slice(1).map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
