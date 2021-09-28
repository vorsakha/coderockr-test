import { useLocation, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const location: any = useLocation();

  // Background of the modal route
  const background = location?.state && location?.state.background;

  return (
    <Layout>
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>

      <Route exact path="/contact" component={Contact} />
    </Layout>
  );
}

export default App;
