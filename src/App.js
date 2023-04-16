import ListGroup from "./components/ListGroup.js";
import Text from './components/Text.js';
import './App.module.css';

function App () {

  let items = ["stats, english lit, and calc bc ap exam studying :( ",
   " the dollar detectives internship ", 
   "this website except it's very sad because i don't know how to convert css into react and forgot a lot of java stuff :) ",
  "attempting to read and code for an hour everyday failed because of ap exams",
  "scholarships :/ "];
 
  const handleSelectItem = (item = " ") => {
    console.log(item);
  }

  return (
    <>
<Text> </Text>
   <div> <br/> <br/><br/> <ListGroup items ={items} heading = "fun things that i am working on right now" onSelectItem = {handleSelectItem} />
</div>   
</>  
 )
}

export default App; 