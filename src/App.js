import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebarr from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashborad";
import { useState } from "react";
import Form from "./scenes/form";
// import  Line  from "./scenes/global/Line";
// import  Pie  from "./scenes/global/Pie";
// import  FAQ from "./scenes/global/FAQ";
// import  Geography  from "./scenes/global/Geography";
// import  Calendar from "./scenes/global/Calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app" style={{ display: "flex" }}>
          <Sidebarr isSidebar={isSidebar} />
          <main className="content" style={{ width: "100%" }}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />  */}{" "}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
