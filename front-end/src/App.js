import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './Components/pages/Home/Home';
import Login from './Components/pages/Login/Login';
import Register from './Components/pages/Register/Register';
import Footer from './Components/Footer/Footer';
import ProductManager from "./Components/pages/ProductManager/ProductManager";
import UserContext from './Contexts/UserContext';
import { useState } from "react";
import HeaderAdmin from "./Components/HeaderAdmin/HeaderAdmin";
import Header from "./Components/Header/Header";
import NavbarAdmin from "./Components/NavbarAdmin/NavbarAdmin";
import ManagerAccount from "./Components/pages/ManagerAccount/ManagerAccount";
import Reset from "./Components/pages/Reset/Reset";
import SearchProduct from "./Components/pages/SearchProduct/SearchProduct";
import ProductCate from "./Components/pages/ProductCate/ProductCate";
import CategoryManager from "./Components/pages/CategoryManager/CategoryManager";
import AddCategory from "./Components/pages/AddCategory/AddCategory";
import CustomerManager from "./Components/pages/CustomerManager/CustomerManager";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";

const App = () => {
    const [user, setUser] = useState({});
    const [idCategory, setIdCategory] = useState(0)
    const [searchKey, setSearchKey] = useState('')
    const isAdmin = localStorage.getItem('role');

    return ( 
        <UserContext.Provider value={{setUser, isAdmin, user}}>
            <Router>
                {(isAdmin === 'admin') ? (
                        <>
                            <HeaderAdmin />
                            <NavbarAdmin />
                        </>
                ) : (
                    <>
                        <Header setIdCategory={setIdCategory} setSearchKey={setSearchKey}/>
                    </>
                )}

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/product-manager' element={<ProductManager />}></Route>
                    <Route path='/category/product' element={<ProductCate idCategory={idCategory}/>}></Route>
                    <Route path='/manager-account' element={<ManagerAccount />}></Route>
                    <Route path='/reset/:tempToken' element={<Reset />}></Route>
                    <Route path='/search' element={<SearchProduct searchKey={searchKey}/>}></Route>
                    <Route path='/category-manager' element={<CategoryManager />}></Route>
                    <Route path='/add-category' element={<AddCategory />}></Route>
                    <Route path='/customer-manager' element={<CustomerManager />}></Route>
                </Routes>
                <Footer />
            </Router>
        </UserContext.Provider>
     );
}
 
export default App;