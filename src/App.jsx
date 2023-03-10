import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Pie from "./scenes/pie";
import Line from "./scenes/line/index";
import FAQ from "./scenes/faq/index";
import Contacts from "./scenes/contacts/index";
// import Bar from "./components/BarChart";
import Bar from "./scenes/bar";
import Geography from "./scenes/geography";
import Form from "./scenes/form/index";
import Calender from "./scenes/calender";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/calendar" element={<Calender />} />
                <Route path="/form" element={<Form />} />
                <Route path="/contacts" element={<Contacts />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
