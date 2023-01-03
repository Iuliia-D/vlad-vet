import { Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Cases from "./components/pages/Cases";
import Publication from "./components/pages/Publication";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="cases" element={<Cases />} />
        <Route path="publication" element={<Publication />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
