// import "./App.css";
import { MuiDrawer } from "../../components/Drawer/MuiDrawer";
import Header from "../../components/Header/Header";
import { useState } from "react";
import AllStudents from "../../components/AllStudents/AllStudents";

function Students() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <AllStudents></AllStudents>
    </div>
  );
}

export default Students;
