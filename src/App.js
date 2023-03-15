import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Contact from "./Contact";
import Product from "./Product";
import './App.css';

const App = () => {
const db =
  [
    {
      title : "Tacos",
      paragraph : "Lorem icai, accusamus eis delectus ipsam minima ea iste laborum vero?",
      image : "https://images.pexels.com/photos/8448321/pexels-photo-8448321.jpeg?auto=compress&cs=tinysrgb&w=600",
      
    },
    {
      title : "Chicken",
      paragraph : "Lorem icai, accusamus eis delectus ipsam minima ea iste laborum vero?",
      image : "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg",
      
    },
    {
      title : "Pizza",
      paragraph : "Lorem icai, accusamus eis delectus ipsam minima ea iste laborum vero?",
      image : "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
    },
    {
      title : "Grille de Barbecue",
      paragraph : "Lorem icai, accusamus eis delectus ipsam minima ea iste laborum vero?",
      image : "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      
    }
  ]
  return (
    <>

    <BrowserRouter>
    <Nav/>
    <Routes>
          <Route path="/" element={<Home data = {db}/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product"  element={<Product />} />
          <Route path="/*" element={<h1>error_message</h1>}/>   
    </Routes>

    </BrowserRouter>
      
    
    </>
  );
};
export default App;
