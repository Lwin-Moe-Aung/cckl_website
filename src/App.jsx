import { Routes, Route, Navigate  } from "react-router-dom";
import { Layout } from "@/widgets/layout";
import { Home, Profile, SignIn, SignUp } from "@/pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
