import "./App.scss";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";
import Chat from "./components/chat/chat";
import Notfound from "./components/Auth/notfound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
