import Layout from 'components/Layout';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/reducers/counter/counter.reducer';

const Counter = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="counter">
        <h1>{ value }</h1>
        <button onClick={ () => dispatch(decrement()) }>-</button>
        <button onClick={ () => dispatch(increment()) }>+</button>
      </div>
    </Layout>
  );
};

export default Counter;