import { Routes, Route, Navigate  } from "react-router-dom";
import { Layout, BlogLayout } from "@/widgets/layout";
import { Home, Profile, SignIn, SignUp , PostDetail, Blog} from "@/pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        
       
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="/blog" element={<BlogLayout />} >
          <Route path="" element={<Blog />} />
          <Route path="watch" element={<PostDetail />} />
          <Route path="category" element={<Blog />} />

      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
