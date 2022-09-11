import { AppWrapper } from '../../Features/Core/Components/AppWrapper';
import { NumberedStep, ProgressSteps } from 'baseui/progress-steps';
import React, { useRef, useState } from 'react';
import DashboardCard from '../../Features/Core/Components/DashboardCard';
import { useStyletron } from 'baseui';
import PageHeader from '../../Features/Core/Components/PageHeader';
import { Button } from 'baseui/button';
import { Input, SIZE } from 'baseui/input';
import { Icon } from '../../Features/Core/Components/Icon';
import { RenderForm } from '../../Features/FormRender/Components/RenderForm';
import { StandardGrid } from '../../Features/Core/Components/Grid';

export function TaskCreateContainer() {
  const [current, setCurrent] = useState(0);

  const [css, $theme] = useStyletron();

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

              <div
                className={css({
                  width: '100%',
                  marginLeft: '0',
                  marginRight: 0,
                })}
              >
                <StandardGrid className={css({})}>
                  <DashboardCard
                    onClick={() => {
                      setCurrent((prev) => prev + 1);
                    }}
                    badgeColor={$theme.colors.primaryHeaderA}
                    backgroundColor={$theme.colors.primaryHeaderB}
                    numberOfTask={<Icon icon="layout-blank" />}
                    title="Blank Task"
                    subTitle="Start empty task"
                  />
                  {Array.from({ length: 1 }).map((_, index) => (
                    <DashboardCard
                      key={index}
                      onClick={() => {
                        setCurrent((prev) => prev + 1);
                      }}
                      badgeColor="#2B8FC5"
                      backgroundColor="#309FDB"
                      numberOfTask={12}
                      title="Your Tasks"
                      subTitle="Your pending tasks"
                    />
                  ))}
                </StandardGrid>
              </div>
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
