import React, { useCallback } from 'react';
import { increaseAsync, decreaseAsync } from '../store/modules/test';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const _increase = useCallback(() => dispatch(increaseAsync()));
  const _decrease = useCallback(() => dispatch(decreaseAsync()));
  const { test } = useSelector(state => state);

  return (
    <div>
      <button onClick={_increase}>+</button>
      <button onClick={_decrease}>-</button>
      <div style={{ color: '#fff' }}>
        {test}
      </div>
    </div>
  )
};

export default Main;