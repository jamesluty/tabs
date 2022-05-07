import './App.css';
import Tabs from './Components/Tabs';
import {useState} from 'react';
import styles from './Components/styles.module.css'

function App() {
  const [content, setContent] = useState("")
  const [button, setButton] = useState()
  let i = 0;
  let text;
  const tabsArr = [
    {
      tab: "Tab 1",
      content: "Tab 1 content is showing here."
    },
    {
      tab: "Tab 2",
      content: "Tab 2 content is showing here."
    },
    {
      tab: "Tab 3",
      content: "Tab 3 content is showing here."
    }]

  const getContent = (output) => {
    setContent(output)
    setButton(<button className={styles.button} onClick={typeWriter}>Press to display text animiation</button>)
    document.getElementById("displayText").innerHTML = "";
    console.log("inside getContent", content)
  }

  const typeWriter = () => {
    console.log("inside typewriter", content)
    text = content;
    let speed = 50;
    if (i < content.length ) {
      document.getElementById("displayText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <div className="App">
      <Tabs tabsArr={tabsArr} getContent={getContent}/>
      <div className={styles.content}>
        {button}
        <p id="displayText"></p>
      </div>
    </div>
  );
}

export default App;
