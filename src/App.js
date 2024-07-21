import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeComponent/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/ContactUs/Contact";
import HeartOfInclusion from "./Components/Gallery/HeartOfInclusion";
import VibrantVoice from "./Components/Gallery/VibrantVoice";
import Signup from "./Components/Authentication/Signup";
import PasswordReset from "./Components/Authentication/PasswordReset";
import AboutPage from "./Components/AboutComponent/AboutPage";
import AdminHome from "./Admin/Components/Home";
import Event from "./Admin/Components/Event";
import User from "./Admin/Components/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/heartofinclusion"
            element={
              <>
                <Navbar />
                <HeartOfInclusion />
                <Footer />
              </>
            }
          />
          <Route
            path="/vibrantvoice"
            element={
              <>
                <Navbar />
                <VibrantVoice />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
                <Footer />
              </>
            }
          />
          <Route
            path="/passwordreset"
            element={
              <>
                <Navbar />
                <PasswordReset />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutpage"
            element={
              <>
                <Navbar />
                <AboutPage />
                <Footer />
              </>
            }
          />
          <Route path="/admin/*" element={<AdminHome />}>
            <Route path="event" element={<Event />} />
            <Route path="userlist" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
