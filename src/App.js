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
import EventPost from "./Admin/Components/EventPost";
import User from "./Admin/Components/User";
import EventDisplay from "./Components/Events/Event";
import DetailedEvent from "./Components/Events/DetailedEvent";


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
            path="/events"
            element={
              <>
                <Navbar />
                <EventDisplay />
                <Footer />
              </>
            }
          />
          <Route
            path="/eventdetailed"
            element={
              <>
                <Navbar />
                <DetailedEvent />
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
            <Route path="event" element={<EventPost />} />
            <Route path="userlist" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
