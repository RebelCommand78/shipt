import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Addressbook.css";

const Bookpage = () => {
    return (
        <div>
            <Header />
            Saved and New addresses 
            <Footer />
        </div>
    )
};
export default Bookpage;