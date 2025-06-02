import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contacts.jsx";
import NoPage from "./pages/NoPage";
import ContactManeger from "./Components/Contacts/ContactManeger.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    {/* <Route path="contact" element={<Contact />} /> */}
                    <Route path="contact-mngr" element={<ContactManeger />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
