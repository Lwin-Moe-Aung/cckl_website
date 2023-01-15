import { Routes, Route, Navigate  } from "react-router-dom";
import { Layout, BlogLayout } from "@/widgets/layout";
import { Home, Profile, SignIn, SignUp , PostDetail, Blog} from "@/pages";
import PersistLogin from "./components/persist-login";
import RequireAuth from "./components/require-auth";

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route element={<Layout />} >
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        
        <Route  element={<BlogLayout />} >
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/watch" element={<PostDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
