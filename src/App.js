import {Post} from './components/Post/Post';
import './App.css';
import{Posts} from './components/Posts/Posts';
import {SearchPosts} from "./components/SearchPosts/SearchPosts";
import {useState} from "react";
function App() {
    const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <h1>Hello</h1>
        <SearchPosts onSearchResult={(results) => setPosts(results)}/>
      <Posts posts={posts}>



      </Posts>
    </div>
  );
}

export default App;
