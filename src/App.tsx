import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing/LandingPage";
// import LandingPage from "./tablefilter/Navbar.jsx/Landing/LandingPage";
// import MyComponent from "./tablefilter/MyComponent";
// import NotFound from "./Common/NotFound/NotFound";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      {/* <Route path="/admin" element={<MyComponent />} />
      <Route path="/not-found" element={<NotFound />} /> */}
    </Routes>
  );
}
