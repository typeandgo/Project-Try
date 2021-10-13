import React from 'react';
import PropTypes from 'prop-types';
import { useGetTodoQuery } from 'services/todo.service';

const TodoDetail = (props) => {
  const { todoId } = props;
  
  const { data, error, isLoading, isSuccess, isError } = useGetTodoQuery(todoId);
  let content;

  if (isLoading) {
    content = 'Loading';
  } else if (isSuccess) {
    content = <>
      <h3>{ data.title }</h3>
      <p>{ data.body }</p>
    </>;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <>
      { content }
    </>
  );
};

TodoDetail.propTypes = {
  todoId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

TodoDetail.defaultProps = {
  todoId: ''
};

export default TodoDetail;