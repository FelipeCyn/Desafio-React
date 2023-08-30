import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartContainer } from "../../containers/cart";
import { MoviesContainer } from "../../containers/movies";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import FinishBuy from "../FinishBuy/FinishBuy";
import { ContentContainer, RouterContainer } from "./styles";

export const Router = () => {
  return (
    <BrowserRouter>
      <CartContainer.Provider>
        <MoviesContainer.Provider>
          <RouterContainer>
            <ContentContainer>
              <Header />
              <Routes>
                <Route path='/' Component={Home} />
                <Route path='cart' Component={Cart} />
                <Route path='cart/finishBuy' Component={FinishBuy} />
              </Routes>
            </ContentContainer>
          </RouterContainer>
        </MoviesContainer.Provider>
      </CartContainer.Provider>
    </BrowserRouter>
  );
};

export default Router;
