import { Block } from 'baseui/block';
import React from 'react';
import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from '../../Features/Core/Components/Header';
import DashboardCard from '../../Features/Dashboard/components/DashboardCard';
import PageHeader from '../../Features/Dashboard/components/PageHeader';

function Dashboard() {
  return (
    <div>
      <Header>
        <HeaderWrapper>
          <HeaderToggle />
        </HeaderWrapper>
      </Header>
      <Block $style={{ overflow: 'auto', minHeight: 'calc(100vh - 96px)' }}>
        <PageHeader />
        <Block
          display="flex"
          marginLeft="scale500"
          marginRight="scale500"
          alignItems="center"
          justifyContent="space-around"
        >
          <DashboardCard
            badgeColor="#2B8FC5"
            backgroundColor="#309FDB"
            numberOfTask={12}
            title="Your Tasks"
            subTitle="Your pending tasks"
          />
          <DashboardCard
            badgeColor="#FBCE4A"
            backgroundColor="#FCD86E"
            numberOfTask={12}
            title="Your Tasks"
            subTitle="Your pending tasks"
          />
          <DashboardCard
            badgeColor="#ED813E"
            backgroundColor="#F19A65"
            numberOfTask={12}
            title="Your Tasks"
            subTitle="Your pending tasks"
          />
          <DashboardCard
            badgeColor="#9AC97F"
            backgroundColor="#81BB5F"
            numberOfTask={12}
            title="Your Tasks"
            subTitle="Your pending tasks"
          />
        </Block>
      </Block>
    </div>
  );
}

export default Dashboard;
