import { SearchContextProvider } from "@context/SearchContext";
import "./App.css";
import RouterProvider from "@components/Routes";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "@components/Theme";

function App() {
  return (
    <ThemeProvider theme={AppTheme()}>
      <SearchContextProvider>
        <RouterProvider />
      </SearchContextProvider>
    </ThemeProvider>
  );
}

export default App;
