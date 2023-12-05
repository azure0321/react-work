import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import React, {useState, useRef, useCallback} from 'react';

function App(){
  const [todos, setTodos] = useState([
    {id:1,text:"React 기초 알아보기",checked:true, date: new Date().toString().substring(10,24)},
    {id:2,text:"Component 스타일 해보기",checked:false, date: new Date().toString().substring(10,24)},
    {id:3,text:"일정관리 앱 만들어 보기",checked:false, date: new Date().toString().substring(10,24)},
    {id:4,text:"React 함수형과 클래스형 비교", checked:false, date: new Date().toString().substring(10,24)}
  ])
  const nextId = useRef(todos.length +1) 

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text:text,
        checked:false,
        date:new Date().toString().substring(10,24)
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    },[todos])
    
  const onRemove = useCallback(
    (id) => {
      setTodos(todos => todos.filter((todo)=>todo.id !== id));
    },[todos])

  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo,checked:!todo.checked} : todo))
    },[todos]
  )

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  )
}

export default App;