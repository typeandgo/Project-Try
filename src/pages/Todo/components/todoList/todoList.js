import React, { useState } from 'react';
import { Modal } from 'antd';
import { useGetTodosQuery } from 'services/todo.service';
import TodoDetail from '../todoDetail/todoDetail';

const TodoList = () => {
  const [isTodoModalActive, setIsTodoModalActive] = useState(false);
  const [activeTodoId, setActiveTodoId] = useState(null);
  
  const { data, error, isLoading, isSuccess, isError } = useGetTodosQuery();
  let content;

  if (isLoading) {
    content = 'Loading';
  } else if (isSuccess) {
    content = data?.map(post => <li key={ post.id } onClick={() => {
      setActiveTodoId(post.id);
      setIsTodoModalActive(true);
    }}>{ post.title }</li>);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      <h3>Görev Listesi</h3>
      <ul>
        { content }
      </ul>

      <Modal
        title='Görev Detayı'
        visible={isTodoModalActive} 
        destroyOnClose={ true }
        onOk={ () => setIsTodoModalActive(false) }
        onCancel={ () => setIsTodoModalActive(false) }
      >
        <TodoDetail todoId={ activeTodoId } />
      </Modal>
    </>
  );
};

export default TodoList;