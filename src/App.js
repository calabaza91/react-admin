import { ColorModeContext, UseMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidenav from "./scenes/global/Sidenav";
import Dashboard from "./scenes/dashboard/dashboard";
import Team from "./scenes/team/team";
import Invoices from "./scenes/invoices/invoices";
import Contacts from "./scenes/contacts/contacts";
import Form from "./scenes/form/form";
import Bar from "./scenes/bar/bar";
import Line from "./scenes/line/line";
import Pie from "./scenes/pie/pie";
import FAQ from "./scenes/faq/faq";
import Geography from "./scenes/geography/geography";
import Calendar from "./scenes/calendar/calendar";



function App() {
  const [theme, colorMode] = UseMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidenav />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
