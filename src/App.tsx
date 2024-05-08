import { SearchContextProvider } from "@context/SearchContext";
import "./App.css";
import RouterProvider from "@components/Routes";

function App() {
  return (
    <SearchContextProvider>
      <RouterProvider />
    </SearchContextProvider>
  );
}

export default App;
