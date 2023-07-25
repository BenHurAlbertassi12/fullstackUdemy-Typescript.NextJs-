/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useCounterContext } from '../../context/CounterContext/context';

export const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Oi</h1>
    </div>
  );
};
