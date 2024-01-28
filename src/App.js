import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Navigation from "./Container/Navigation";

export default function App() {
return (
  <BrowserRouter>
    {localStorage.getItem('accessToken') ? <Routes>
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>:
    <Routes>
        <Route path="/login" element={<Login />}>
        <Route path="Navigation" element={<Navigation />} />
        </Route>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<div>no pre login page</div>}/>
      </Routes>}
  </BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);