import React from 'react';
import Layout from 'components/Layout';
import AddTodoForm from './components/addTodoForm/addTodoForm';
import TodoList from './components/todoList/todoList';

const Todo = () => {
  return (
    <Layout>
      <div className="todo">

        <AddTodoForm />
        
        <TodoList />
        
      </div>
    </Layout>
  );
};

export default Todo;