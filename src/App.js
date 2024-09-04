import { AppContext } from "./Contexts/AppContext";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Components/Layouts/Layout"
// import Cards from "./Components/Cards";
import { useState } from "react";

function App() {

  const [globalSearchData, setglobalSearchData] = useState('');
  const [category, setCategory] = useState("All")

  function handleCategory(appCategory){
    setCategory(appCategory)
  }

  function handleGlobalSearchData(search){
    setglobalSearchData(search)
  }

  return (
    <div className="App">
      <AppContext.Provider value={{handleGlobalSearchData, globalSearchData, category, handleCategory}}>
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Layout/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
