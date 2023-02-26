import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './App.scss'

const ProductListPage = lazy(() => import('../Pages/ProductListPage/ProductListPage'));
const ProductItemPage = lazy(() => import('../Pages/ProductItemPage/ProductItemPage'));
const About = lazy(() => import('../Pages/AboutPage/About'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));
const Cart = lazy(() => import('../Pages/Cart/Cart'));
const Page404 = lazy(() => import('../Pages/pageNotFound/pageNotFound'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Suspense fallback={"Loading"}>
            <Routes>
              <Route path='/*' element={<Page404/>} />
              <Route path='/' element={<Navigate to="/shop" />} />
              <Route path='/shop' element={<ProductListPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/shop/:id' element={<ProductItemPage/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
