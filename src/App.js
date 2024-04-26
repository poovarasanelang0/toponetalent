
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportPages from "./Pages/ImportAllPages/ImportPages";
import Contact from "./Pages/Contact/Contact";
import Frontend from "./Pages/FindPeople/Frontend/Frontend";
import Backend from "./Pages/FindPeople/Backend/Backend";
import FullStack from "./Pages/FindPeople/FullStack/FullStack";
import Automation from "./Pages/FindPeople/Automation/Automation";
import Manual from "./Pages/FindPeople/Manual/Manual";
import RoadMap from "./Pages/RoadMap/RoadMap";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImportPages />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Frontend" element={<Frontend />} />
          <Route path="/Backend" element={<Backend />} />
          <Route path="/FullStack" element={<FullStack />} />
          <Route path="/Automation" element={<Automation />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/RoadMap" element={<RoadMap />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
