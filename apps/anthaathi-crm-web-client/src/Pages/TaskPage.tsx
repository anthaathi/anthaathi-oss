import { TaskTimeLine } from '../Containers/TaskTimeLine';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from '../Features/Core/Components/Header';
import React from 'react';

export default function TaskPage() {
  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderToggle />
        </HeaderWrapper>
      </Header>
      <TaskTimeLine />
    </>
  );
}
