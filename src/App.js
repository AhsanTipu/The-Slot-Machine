import logo from './logo.svg';
import './App.css';
import Cards from "./Cards"
import "./css/Design.css"
import Data from "./Data"
import Slot from "./components/Slot"
// function CallC(val){
//   return(
//   <Cards imgsrc={val.imgsrc} 
//   title={val.title}
//   tag={val.tag}
//   link={val.link}
//   />
//   )
// }
     {/* {Data.map(CallC)};  */}

function App() {
  return (
    <div className="App">
<h1 className="head">The Slot Machine 🎰</h1>
<Slot x='😏' y='😏' z='😄' />
<Slot x='🖕' y='🖕' z='🖕'  />
<Slot x='🦕' y='😄' z='🎉' />
    </div>
  );
}

export default App;
