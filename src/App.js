import './App.css';
import Tabs from './Components/Tabs';
import {useState} from 'react';
import styles from './Components/styles.module.css'

function App() {
  const [content, setContent] = useState("")
  const tabsArr = [
    {
      tab: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      tab: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      tab: "Tab 3",
      content: "Tab 3 content is showing here"
    }]

  const getContent = (output) => {
    setContent(output)
  }

  return (
    <div className="App">
      <Tabs tabsArr={tabsArr} getContent={getContent}/>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default App;
