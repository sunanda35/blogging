import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Blog from "./pages/blog_page/Blog";
import Home from "./pages/home/body/Body";
import Error from './pages/error/Error'
import Author from './pages/author/Author'
import TStory from './pages/top_story/TopStory'
import TagPage from './pages/tag_page/TagPost'
import Search from './pages/search/Search'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route component={Home} path='/' exact/>
      <Route component={Blog} path='/:slug/' exact/>
      <Route component={Author} path='/author/:slug/' exact/>
      <Route component={TStory} path='/n/top-story/' exact/>
      <Route component={TagPage} path='/tags/:slug/' exact />
      <Route component={Search} path='/search/find=:fuck'  />
      <Route  component={Error} path='/404' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
