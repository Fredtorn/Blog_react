import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from "./Pages/Home/Home";
import MyBlog from './Pages/MyBlog/MyBlog'
import NewBlogPostPage from './Pages/NewPost/NewPost'
import Login from "./Pages/Login/Login";
import PrivateRoutes from "./Context/PrivetRoutes";
import Register from "./Pages/Register/Register";
import IndividualBlogPost from "./Components/IndividualBlogPost";
import EditBlogPost from "./Components/EditBlogPost";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/myblog" element={<MyBlog />}>My blog</Route>
          <Route path="/newpost" element={<NewBlogPostPage />}>New post</Route>
          <Route path="/post/:id" element={<IndividualBlogPost />} />
          <Route path="/edit/:id" element={<EditBlogPost />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
