import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogPage from "./pages/blog_page/BlogPage";
import Home from "./pages/home/Home";
import Error from './pages/error/Error'
import Author from './pages/author/Author'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={BlogPage} path='/:slug'/>
      <Route component={Author} path='/me/' />
      <Route component={Error} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
