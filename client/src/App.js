import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CreateListing from "./Pages/CreateListing";
import ListingDetails from "./Pages/ListingDetails";
import TripList from "./Pages/TripList"
import WishList from "./Pages/WishList"
import PropertyList from "./Pages/PropertyList"
import ReservationList from "./Pages/ReservationList"
import CategoryPage from "./Pages/CategoryPage";
import SearchPage from "./Pages/SearchPage";
import Search from "./Pages/Search";
import Prediction from "./Pages/Prediction";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/register" element={<RegisterPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/create-listing" element={<CreateListing/>}/>
       <Route path="/properties/:listingId" element={<ListingDetails/>}/>
       <Route path="/properties/category/:category" element={<CategoryPage/>}/>
       <Route path="/properties/search/:search" element={<SearchPage/>}/>
       <Route path="/:userId/trips" element={<TripList/>}/>
       <Route path="/:userId/wishList" element={<WishList/>}/>
       <Route path="/:userId/properties" element={<PropertyList/>}/>
       <Route path="/:userId/reservations" element={<ReservationList/>}/>
       <Route path="/search" element={<Search />} />
      <Route path="/prediction" element={<Prediction />} />
       




      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
