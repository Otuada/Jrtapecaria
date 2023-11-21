import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

const CounterWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const CounterNumber = styled.h2`
  font-size: 3em;
  color: #3498db;
  margin: 10px 0;
`;

const CounterMessage = styled.p`
  font-size: 1.2em;
  color: #333;
`;

export const Contador = ({ limit, message }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (count < limit) {
          setCount(count + 1);
        } else {
          clearInterval(interval);
        }
      }, 2);

      return () => clearInterval(interval);
    }
  }, [count, limit, isVisible]);

  return (
    <VisibilitySensor onChange={(visible) => setIsVisible(visible)}>
      <CounterWrapper>
        <CounterNumber>+{count}</CounterNumber>
        <CounterMessage>{message}</CounterMessage>
      </CounterWrapper>
    </VisibilitySensor>
  );
};


