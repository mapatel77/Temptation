import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";
import Order from "./pages/Order";
import Login from "./pages/Login";

function Routing(){

    return(
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>

    );
}

export default Routing;
