import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Cart from "./Cart";
import About from "./pages/About";
import { useEffect, useState } from 'react';
import Error from './pages/Error';
import Menu from './pages/Menu';
import axios from 'axios';

function App() {
  const [waiting, setWaiting] = useState(false);
  const [selectedCat, selectCat] = useState("0");
  const [items, setItems] = useState([]);
  const [categories, setCategories]  = useState([]);
  const [activePage, selectPage] = useState(1);
  const [searched, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
        setWaiting(true);
        const { data } = await axios.get(
        "http://localhost:3000/menu"
      );
      
        const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      console.log(categoriesData);
      setCategories([{id : 0, name : "All"},...categoriesData.data]);
      setItems(data);
      const pro = Promise.all([]);
      pro.then();
      pro.catch();
      setWaiting(false);
    };
    getData();
    console.log(items);
  }, []);

const pageSize = 3;
const handleFilter = (cat)=>{filtered = items; selectCat(cat);selectPage(1);}
const handlePage = (page)=>selectPage(page);
const handleAddCart = (id)=>{
  const newItems = items.map(
    (item)=> (
      {
        ...item,
        inCart: id == item.id ? !item.inCart : item.inCart,
      }
    )
  );
  setItems(newItems)
}
const handleSearch = (form)=>{
  form.preventDefault();
  const word = form.target.input.value;
  setSearch(word);
  console.log(word);
}
  function Match(str1, str2)
  {
    return ~str2.toLowerCase().search(str1.toLowerCase());
  }
  let  filtered = selectedCat == "0" ? items : items.filter((item)=>item.category == selectedCat);
  if (filtered && searched != "")filtered = filtered.filter((item)=>Match(searched, item.name));
  console.log("after ", filtered);
  
  console.log("filtred", filtered);
  console.log("items" , items);
  let allItems = filtered.length;
  filtered = filtered.slice((activePage - 1) * pageSize, activePage * pageSize);
  const handleIncrement = (id) => {
    const newItems = [...items];
    const indx = newItems.findIndex(item => item.id === id);
    newItems[indx] = { ...newItems[indx] };
    newItems[indx].count++;
    setItems(newItems);
  };
  const nOPages = Math.ceil(allItems / pageSize);
  console.log(nOPages);
  const handleDecrement = (id) => {
    const newItems = [...items];
    const indx = newItems.findIndex(item => item.id === id);
    newItems[indx] = { ...newItems[indx] };
    newItems[indx].count--;
    if (newItems[indx].count < 0)newItems[indx].count = 0;
    setItems(newItems);
  };
  const handleReset = () => {
    const newItems = items.map(item => ({ ...item, count: 0 }));
    setItems(newItems);
  };
  const handleDelete = (id) => {
    const newItems = items.map(item => 
      {
        if (item.id == id)item.inCart = false;
        return item;
      }
      );
    setItems(newItems);
  };
  
  console.log(filtered);
  return (
    <>
      <Navbar noOfItems={items.reduce((sum, item) => sum + item.count, 0)} />
      <Routes>
        <Route path ="/"
        element={<Menu items={filtered} waiting = {waiting} cats={categories} 
        selectedCat = {selectedCat}
        handleAddCart={handleAddCart} 
        handleSelect = {handleFilter}
        handleSearch = {handleSearch}
        current = {activePage}
        nOPages={nOPages}
        handlePage = {handlePage}
        
        />}/>
        <Route
          path="/Cart"
          element={
            <Cart
              items={items.filter(item => item.inCart)}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleReset={handleReset}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
