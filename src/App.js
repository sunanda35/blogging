import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Blog from "./pages/blog_page/Blog";
import Home from "./pages/home/Home";
import Error from './pages/error/Error'
import Author from './pages/author/Author'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={Blog} path='/:slug'/>
      <Route component={Author} path='/me/' />
      <Route component={Error} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
