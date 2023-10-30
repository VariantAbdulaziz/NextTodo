import React from 'react'
import Cookies from 'js-cookie';
import { Todo } from './db'
import {CreateTodo} from './components/create_todo'
import AppBar from './components/app_bar'
import TodoList from './components/todo_list';

let BASE_URL = "http://localhost:3000"

const Root = async () => {
  let result = await fetch(`${BASE_URL}/api/todos`, { cache: 'no-store'})
  let todos: Todo[] = await result.json()

  return (
    <>
      <AppBar />
      <CreateTodo/>
      <div className='px-5'>
        <h1>TODOS</h1>
         <TodoList todos={todos} />
      </div>
    </>
  )
}

export default Root