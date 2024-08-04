import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import TaskSubmitter from './components/TaskSubmitter';
import TaskList from './components/TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [numChecked, setNumChecked] = useState(0);

  const addTaskHandler = (textData) => {
    setTaskList((prevTaskList) => {
      var idGen = Math.random().toString();
      return [
        ...prevTaskList,
        { textData: textData, id: idGen, key: idGen }
      ];
    });
  };

  function handleCheck(e) {
    let isChecked = e.target.checked;
    if (isChecked)
      setNumChecked(numChecked + 1);
    else setNumChecked(numChecked - 1);
  }

  function handleDelete(e) {
    let key = e.target.id;
    const taskId = key.split("-");
    let newTaskList = [];
    taskList.forEach((item) => {
      //For each item in taskList, re-add to taskList unless it matches the id.
      if (item.key != taskId[0]) {
        console.log("adding: " + item.id + " != " + taskId[0]);
        newTaskList.push(item);
      }
    })
    setTaskList(newTaskList);
  }

  return (
    //Root
    <div>
      <Header tasksDone={numChecked} tasksNotDone={taskList.length.toString()}/>
      <TaskSubmitter onAddTask={addTaskHandler} />
      <TaskList listItems={taskList} onChange={e => handleCheck(e)} onClickDelete={e => handleDelete(e)}/>
    </div>
  );
}

export default App;
