import PostList from "./components/PostList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
