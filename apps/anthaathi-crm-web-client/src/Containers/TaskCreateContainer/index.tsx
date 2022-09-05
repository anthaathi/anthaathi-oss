import { AppWrapper } from '../../Features/Core/Components/AppWrapper';
import { NumberedStep, ProgressSteps } from 'baseui/progress-steps';
import React, { useRef, useState } from 'react';
import { Cell, Grid } from 'baseui/layout-grid';
import DashboardCard from '../../Features/Core/Components/DashboardCard';
import { useStyletron } from 'baseui';
import PageHeader from '../../Features/Core/Components/PageHeader';
import { Button } from 'baseui/button';
import { Input, SIZE } from 'baseui/input';
import { Icon } from '../../Features/Core/Components/Icon';
import { RenderForm } from '../../Features/FormRender/Components/RenderForm';

export function TaskCreateContainer() {
  const [current, setCurrent] = useState(0);

  const [css] = useStyletron();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <PageHeader title="Create new task" icon="tasks" scrollBody={ref} />
      <AppWrapper ref={ref}>
        <ProgressSteps
          current={current}
          overrides={{ Root: { style: { width: '100%' } } }}
        >
          <NumberedStep title="Select Template">
            <div className={css({ width: '100%' })}>
              <div className={css({ marginBottom: '12px', maxWidth: '320px' })}>
                <Input
                  size={SIZE.compact}
                  placeholder="Search"
                  startEnhancer={<Icon icon="search" />}
                />
              </div>

              <Grid gridMaxWidth={0} gridMargins={0}>
                {Array.from({ length: 10 }).map(() => (
                  <Cell
                    span={3}
                    overrides={{ Cell: { style: { paddingBottom: '24px' } } }}
                  >
                    <DashboardCard
                      onClick={() => {
                        setCurrent((prev) => prev + 1);
                      }}
                      badgeColor="#2B8FC5"
                      backgroundColor="#309FDB"
                      numberOfTask={12}
                      title="Your Tasks"
                      subTitle="Your pending tasks"
                    />
                  </Cell>
                ))}
              </Grid>
            </div>
          </NumberedStep>
          <NumberedStep title="Form">
            <RenderForm
              body={[
                {
                  type: 'input',
                  label: 'Title',
                  id: 'title',
                  value: '[BUG]: ',
                },
                {
                  type: 'markdown',
                  id: 'description',
                  label: 'Something',
                },
              ]}
            />

            <div className={css({ display: 'flex', marginTop: '12px' })}>
              <Button onClick={() => setCurrent((prev) => prev - 1)}>
                Previous
              </Button>
              <span className={css({ width: '8px' })} />
              <Button>Create</Button>
            </div>
          </NumberedStep>
        </ProgressSteps>
      </AppWrapper>
    </>
  );
}
