import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Add from "./Pages/Add";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import Basket from "./Pages/Basket";
import Wishlist from "./Pages/Wishlist";
import Detail from "./Pages/Detail";
import Navbarlayout from "./Layout/Navbarlayout";
import MainProvider from "./context/MainProvider";

function App() {

  return (
    <>
    <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbarlayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="admin" element={<Admin />} />
          <Route path="basket" element={<Basket />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
