import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Viewer from "./components/Viewer";
import Form from "./components/Form";
import app from "./firebase"; // Import the initialized Firebase app instance

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:param" element={<Viewer />} />
        <Route path="/dashboard" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
