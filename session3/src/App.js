import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Layout from "./hoc/Layout";
import NoPage from "./pages/NoPage";
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
