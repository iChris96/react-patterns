import React, { useEffect, useState } from 'react';

const styles = {
  button: {
    backgroundColor: 'trasnparent', border: 'none', cursor: 'pointer'
  },
  container: {
    display: 'flex', flexDirection: 'column',
  }
}

function callAll(...fns) { //function which reveive an array of functions and return a function which call the previous functions with the same params
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

const TasksProvider = ({ children }) => { //TasksProvider provides data and logic as props to his children

  const [data, setData] = useState([])

  const setCompleted = (name) => {
    const newData = data.map(it => {
      if (name == it.name) return { ...it, isCompleted: !it.isCompleted }
      return it
    })
    setData(newData)
  }

  useEffect(() => {
    setData([
      { name: 'clean room', isCompleted: false },
      { name: 'wash car', isCompleted: false },
      { name: 'study about react', isCompleted: false }
    ])
  }, [])

  const getTaskProps = (props = {}) => ({
    onClick: callAll(props.onClick, setCompleted),
  });


  return (children({ data, setCompleted, getTaskProps }))
}

const Task = ({ task, onClick }) => {

  if (task == undefined) return null

  return (<button onClick={() => onClick(task.name)} style={{ color: task.isCompleted ? 'red' : 'green', ...styles.button }}>{task.name}</button>)
}


export const PropsGettersPage = () => {

  const handleOnClick = () => console.log('you click me')

  return (
    <>
      <h2>Props Getters</h2>
      <TasksProvider>
        {({ data, setCompleted, getTaskProps }) => (
          <div style={styles.container}>
            <Task task={data[0]} onClick={setCompleted} />
            <Task task={data[1]} {...getTaskProps()} />
            <Task task={data[2]} {...getTaskProps({ onClick: handleOnClick })} />
          </div>
        )}
      </TasksProvider>

    </>
  );
}
