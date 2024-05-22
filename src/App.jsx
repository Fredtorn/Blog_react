import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import LandingPage from './Pages/LandingPage/LandingPage'
import MyBlog from './Pages/MyBlog/MyBlog'
import NewBlogPostPage from './Pages/NewPost/NewBlogPostPage'
import Login from "./Pages/Login/Login";
import PrivateRoutes from "./Context/PrivetRoutes";
import Register from "./Pages/Register/Register";
import IndividualBlogPost from "./Components/IndividualBlogPost";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<LandingPage />}>Landing Page</Route>
          <Route path="/myblog" element={<MyBlog />}>My blog</Route>
          <Route path="/newpost" element={<NewBlogPostPage />}>New post</Route>
          <Route path="/post/:id" element={<IndividualBlogPost />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
