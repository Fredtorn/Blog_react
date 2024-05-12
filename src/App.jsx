import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage'
import MyBlog from './Pages/MyBlog/MyBlog'
import NewPost from './Pages/NewPost/NewPost'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}>Landing Page</Route>
        <Route path="/myblog" element={<MyBlog />}>My blog</Route>
        <Route path="/newpost" element={<NewPost />}>New post</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
