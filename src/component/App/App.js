import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

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
              <Route path='/' element={<ProductListPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/:id' element={<ProductItemPage/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='*' element={<Page404/>} />
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
