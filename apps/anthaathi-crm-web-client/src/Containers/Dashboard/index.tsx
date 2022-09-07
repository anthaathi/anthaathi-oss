import * as React from 'react';
import DashboardCard from '../../Features/Core/Components/DashboardCard';
import PageHeader from '../../Features/Core/Components/PageHeader';
import { Cell, Grid } from 'baseui/layout-grid';
import { useStyletron } from 'baseui';
import { AppWrapper } from '../../Features/Core/Components/AppWrapper';
import CommentBox from '../../Features/Timeline/Components/CommentBox';
import { CommentBadge } from '../../Features/Timeline/Components/CommentBadge';
import { HeadingMedium } from 'baseui/typography';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <PageHeader title="Dashboard" icon="area-chart" />
      <AppWrapper className="app-content">
        <Grid gridMaxWidth={0} gridMargins={0} gridGaps={0}>
          <Cell span={[12, 4, 3, 3]}>
            <Link
              to="/spaces?view=my-tasks"
              className={css({ textDecoration: 'none' })}
            >
              <DashboardCard
                badgeColor="#2B8FC5"
                backgroundColor="#309FDB"
                numberOfTask={12}
                title="Your Tasks"
                subTitle="Your pending tasks"
              />
            </Link>
          </Cell>
          <Cell span={[12, 4, 3, 3]}>
            <DashboardCard
              badgeColor="#FBCE4A"
              backgroundColor="#FCD86E"
              numberOfTask={12}
              title="Your Tasks"
              subTitle="Your pending tasks"
            />
          </Cell>
          <Cell span={[12, 4, 3, 3]}>
            <DashboardCard
              badgeColor="#ED813E"
              backgroundColor="#F19A65"
              numberOfTask={12}
              title="Your Tasks"
              subTitle="Your pending tasks"
            />
          </Cell>
          <Cell span={[12, 4, 3, 3]}>
            <DashboardCard
              badgeColor="#9AC97F"
              backgroundColor="#81BB5F"
              numberOfTask={12}
              title="Your Tasks"
              subTitle="Your pending tasks"
            />
          </Cell>
        </Grid>
        <div
          className={css({
            marginTop: $theme.sizing.scale900,
            marginBottom: $theme.sizing.scale900,
          })}
        >
          <HeadingMedium marginTop="0" marginBottom="scale800">
            Activity
          </HeadingMedium>
          <CommentBox fullWidth={true} />
          <CommentBadge />
          <CommentBox fullWidth={true} />
          <CommentBadge />
          <CommentBox fullWidth={true} />
          <CommentBadge />
          <CommentBox fullWidth={true} />
        </div>
      </AppWrapper>
    </>
  );
}

export default Dashboard;
