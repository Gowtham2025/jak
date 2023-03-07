import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddStd } from "./component/add";

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddStd/>}/>
    </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
