import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./routes/Router/Router";
import { CartContainer } from "./containers/cart";
import { MoviesContainer } from "./containers/movies";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <MoviesContainer.Provider>
    <CartContainer.Provider>
      <Router />
    </CartContainer.Provider>
  </MoviesContainer.Provider>
);

reportWebVitals();
