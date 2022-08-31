import React from "react";
import { MuiDrawer } from "./components/Drawer/MuiDrawer";
import Header from "./components/Header/Header";
import { useState } from "react";

import Classes from "./components/Classes/Classes";
import Students from "./Pages/StudentsPage/StudentsPage";
import Create from "./Pages/CreatePage/CreatePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    // <div>
    //   <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    //   <MuiDrawer
    //     isDrawerOpen={isDrawerOpen}
    //     setIsDrawerOpen={setIsDrawerOpen}
    //   />
    // </div>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="classes" element={<Classes />} />
          <Route path="/" element={<Classes />} />
          <Route path="students" element={<Students />} />
          <Route path="create" element={<Create />} />
          <Route path="*" element={"no match"} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
