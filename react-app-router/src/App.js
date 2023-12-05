import './App.css';
import {BrowserRouter, Routes, Route, NavLink, Outlet, useParams} from 'react-router-dom';

function Home() {
  return (
   <div>
    <h2>Home</h2>
      Home...
   </div>
  );
}

const contents = [
  {id:1,title:"HTML", desc:"HTML is for information."},
  {id:2,title:"JS", desc:"JS is interactive."},
  {id:3,title:"React", desc:"React is fun."}
]

function Topics(){
  const lists=[];
  for (let i = 0; i < contents.length; i++){
    lists.push(
      <li key={contents[i].id}>
        <NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink>
      </li>
    )
  }     
  return(
    <div>
      <h2>Topics</h2>
        <ul>
          {lists}
        </ul>
      <Outlet/>
    </div>
  )
}

function Topic(){
  const {id} = useParams();
  console.log(useParams);
  let selected_topic = {
    title:"Sorry",
    desc:"Not Found"
  }
  for (const topic of contents){
    if(topic.id === Number(id)){
      selected_topic = topic;
      break;
    }
  }
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      <h5>{selected_topic.desc}</h5>
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
        Contact...
    </div>
  )
}

function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <h1>React Router DOM Example</h1>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/topics">Topics</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/topics" element={<Topics/>}>
            <Route path=":id" element={<Topic/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
