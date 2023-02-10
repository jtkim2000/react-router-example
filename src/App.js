import {
  BrowserRouter,
  Navigate,
  // Redirect,
  Route,
  Routes,
  // Switch,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

const isLogin = false;

const Router = () => {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route
          path="/login"
          render={() => (isLogin ? <Navigate to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" element={Profile} />
        <Route path="/profile" element={Profile} />
        <Route path="/about" element={About} />
        <Route path="/" element={Home} />
        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <Router />
    // <BrowserRouter>
    //   <Links />
    //   <NavLinks />
    //   <Switch>
    //     <Route
    //       path="/login"
    //       render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
    //     />
    //     <Route path="/profile/:id" component={Profile} />
    //     <Route path="/profile" component={Profile} />
    //     <Route path="/about" component={About} />
    //     <Route path="/" exact component={Home} />
    //     <Route component={NotFound} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
