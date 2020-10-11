import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogPage from "./pages/blog_page/BlogPage";
import Home from "./pages/home/Home";
import Error from './pages/error/Error'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={BlogPage} path='/blog-lodu'/>
      <Route component={Error} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
