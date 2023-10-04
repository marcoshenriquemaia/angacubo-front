import {
  BrowserRouter as Router,
  Route,
  Routes as Routers
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";

export const Routes = () => {
  return (
    <Router>
      <Header />
      <Routers>
        <Route index element={<Home />} />
      </Routers>
    </Router>
  )
}