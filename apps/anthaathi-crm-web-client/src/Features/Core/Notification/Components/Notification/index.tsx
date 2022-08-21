import React from 'react';
import { styled, useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { LabelMedium, LabelSmall, LabelXSmall } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Icon } from '../../../Components/Icon';
import { PLACEMENT, StatefulPopover } from 'baseui/popover';

export const NotificationBar = styled('div', ({ $theme }) => ({
  maxHeight: '138px',
  border: 'medium',
  width: '540px',
  backgroundColor: $theme.colors.backgroundPrimary,
}));

export interface NotificationProps {
  id: string;
  time: string;
  type: 'Alert' | 'News' | 'Report'; // badge type
  badgeColor?: string;
  severity?: 'Critical' | 'Warning'; // badge alert :
  iconType?: React.ReactNode;
  isLoading?: string;
  title: string;
  buttonTitle?: string;
  buttonIcon: React.ReactNode;
  onClick1?: () => void;
  onClick2?: () => void;
  messages: string[];
  isRead: boolean;
  noShadow?: boolean;
  position?: 'start' | 'end';
}

export function NotificationContainer() {
  return (
    <>
      <StatefulPopover
        content={() => (
          <Block $style={{ borderRadius: '10px' }}>
            <Notification
              id="1"
              type="News"
              severity="Critical"
              buttonIcon={
                <div style={{ backgroundColor: '#fff' }}>
                  <span className="fa fa-download" />
                </div>
              }
              position="start"
              buttonTitle="Download"
              isRead={true}
              title="Notification Title"
              time="2 hours ago"
              messages={['message notification']}
              badgeColor="#ED6400"
              noShadow={true}
            />
            <Notification
              id=""
              title="Something amazing"
              buttonIcon={<Icon icon="home"></Icon>}
              isRead={false}
              messages={['Something ']}
              time={new Date().toDateString()}
              type="Alert"
              noShadow={true}
              position="end"
            />
          </Block>
        )}
        overrides={{
          Body: {
            style: {
              paddingTop: 0,
            },
          },
          Inner: {
            style: {
              paddingTop: 0,
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        }}
        popoverMargin={10}
        returnFocus
        autoFocus
        placement={PLACEMENT.bottom}
      >
        <Button kind={KIND.primary} size={SIZE.compact}>
          <Icon icon="bell-o" />
        </Button>
      </StatefulPopover>
    </>
  );
}

function Notification({
  id,
  isLoading,
  time,
  type,
  severity,
  badgeColor,
  iconType,
  title,
  buttonTitle,
  buttonIcon,
  onClick1,
  onClick2,
  messages,
  isRead,
  noShadow = false,
  position,
}: NotificationProps) {
  const [css, $theme] = useStyletron();

  return (
    <NotificationBar
      $style={{
        boxShadow: noShadow
          ? 'none'
          : `rgba(0, 0, 0, 0.08) 0px 0.9px 4px, rgba(0, 0, 0, 0.06) 0px 2.6px 8px, rgba(0, 0, 0, 0.05) 0px 5.7px 12px, rgba(0, 0, 0, 0.04) 0px 15px 15px`,
        borderTopLeftRadius:
          position === undefined || position === 'start' ? '8px' : '0',
        borderTopRightRadius:
          position === undefined || position === 'start' ? '8px' : '0',
        borderBottomLeftRadius:
          position === undefined || position === 'end' ? '8px' : '0',
        borderTopBottomRadius:
          position === undefined || position === 'end' ? '8px' : '0',
      }}
    >
      <Block padding="12px 8px 12px 8px">
        <Block display="flex" justifyContent="space-between">
          <Block display="flex" alignItems="center">
            {!isRead && (
              <Button
                kind={KIND.secondary}
                size={SIZE.compact}
                $style={{
                  width: '24px',
                  height: '24px',
                  paddingLeft: '0px',
                  paddingRight: '0px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  borderBottomRightRadius: '4px',
                  backgroundColor: '#fff',
                  ':hover': { backgroundColor: $theme.colors.notificationA },
                }}
                onClick={onClick1}
              >
                <span
                  className="fa fa-circle"
                  aria-hidden="true"
                  style={{ color: $theme.colors.notificationB, fontSize: 8 }}
                />
              </Button>
            )}
            <div style={{ marginLeft: isRead ? '29px' : '5px' }}>
              {iconType}
            </div>
            <LabelXSmall
              className={[
                css({
                  padding: '1px 8px 1px 8px',
                  borderRadius: '3px',
                  marginLeft: '5px',
                }),
                type === 'Report' &&
                  css({
                    border: `1px solid ${$theme.colors.notificationC}`,
                    backgroundColor: '#fff',
                  }),
                type === 'Alert' &&
                  css({
                    backgroundColor:
                      severity === 'Warning'
                        ? $theme.colors.notificationD
                        : $theme.colors.notificationE,
                  }),
                type === 'News' &&
                  css({
                    backgroundColor: $theme.colors.notificationF,
                  }),
                badgeColor &&
                  css({
                    backgroundColor: badgeColor,
                  }),
              ].join(' ')}
            >
              {type} {type === 'Alert' && severity ? ': ' + severity : null}
            </LabelXSmall>
          </Block>
          <Block display="flex" alignItems="center">
            <LabelSmall
              $style={{
                color: $theme.colors.notificationG,
              }}
            >
              {time}
            </LabelSmall>
            <Button
              kind={KIND.secondary}
              size={SIZE.compact}
              $style={{
                width: '24px',
                height: '24px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px',
                borderBottomLeftRadius: '4px',
                borderBottomRightRadius: '4px',
                backgroundColor: '#fff',
                marginLeft: '5px',
                ':hover': { backgroundColor: $theme.colors.notificationA },
              }}
              onClick={() => {}}
            >
              <span
                className="fa fa-ellipsis-v"
                aria-hidden="true"
                style={{ color: $theme.colors.notificationH }}
              />
            </Button>
          </Block>
        </Block>
        <div style={{ marginLeft: '29px' }}>
          <LabelMedium
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              padding: '0px',
              margin: '0px',
              color: $theme.colors.notificationI,
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {title}
          </LabelMedium>
          {messages.map((data, index) => (
            <LabelSmall
              key={index}
              $style={{
                color: $theme.colors.notificationJ,
                marginTop: '5px',
              }}
            >
              {data}
            </LabelSmall>
          ))}
          <Button
            startEnhancer={buttonIcon}
            kind={KIND.tertiary}
            size={SIZE.compact}
            $style={{
              paddingLeft: '0px',
              paddingRight: '0px',
              paddingTop: '0px',
              paddingBottom: '0px',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              backgroundColor: '#fff',
              marginTop: '10px',
              marginLeft: '0px',
              marginRight: '0px',
              marginBottom: '0px',
              color: $theme.colors.notificationK,
              ':hover': {
                backgroundColor: '#fff',
                textDecoration: 'underline',
              },
            }}
            onClick={onClick2}
          >
            {buttonTitle}
          </Button>
        </div>
      </Block>
    </NotificationBar>
  );
}
