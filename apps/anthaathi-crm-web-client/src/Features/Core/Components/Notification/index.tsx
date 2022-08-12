import React from 'react';
import { styled, useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { LabelMedium, LabelSmall, LabelXSmall } from 'baseui/typography';
import { Block } from 'baseui/block';

export const NotificationBar = styled('div', () => ({
  position: 'sticky',
  maxHeight: '138px',
  margin: '12px',
  boxShadow: `rgba(0, 0, 0, 0.08) 0px 0.9px 4px, rgba(0, 0, 0, 0.06) 0px 2.6px 8px, rgba(0, 0, 0, 0.05) 0px 5.7px 12px, rgba(0, 0, 0, 0.04) 0px 15px 15px`,
  borderRadius: '6px',
  border: 'medium',
  width: '540px',
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
}: NotificationProps) {
  const [css, $theme] = useStyletron();
  return (
    <div>
      <NotificationBar>
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
                    padding: '0px',
                    borderRadius: '4px',
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
                      borderColor: $theme.colors.notificationC,
                      border: '1px solid',
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
                  padding: '0px',
                  borderRadius: '4px',
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
                padding: '0px',
                borderRadius: '4px',
                backgroundColor: '#fff',
                margin: '10px 0 0 0',
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
    </div>
  );
}

export default Notification;
