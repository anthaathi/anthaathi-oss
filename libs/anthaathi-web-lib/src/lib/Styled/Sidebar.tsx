import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { styled, useStyletron } from 'baseui';
import { LabelSmall } from 'baseui/typography';
// @ts-ignore
import { ChevronUp } from '@carbon/icons-react';
import { FlexFill } from './Utils';

const animationTiming = process.env.NODE_ENV === 'test' ? 0 : 220;

const Sidebar = styled('div', {
  width: '320px',
  backgroundColor: '#EEE',
  height: '100vh',
  overflow: 'auto',
});

export const SidebarToolbar = styled('h1', ({ $theme }) => ({
  backgroundColor: $theme.colors.backgroundAccent,
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: $theme.sizing.scale800,
  paddingRight: $theme.sizing.scale800,
  color: $theme.colors.contentInversePrimary,
  marginTop: 0,
  marginBottom: 0,
  width: `calc(100% - ${$theme.sizing.scale800} - ${$theme.sizing.scale800})`,
  ...$theme.typography.HeadingXSmall,
}));

export interface SidebarItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function SidebarItem({ title, children, action }: SidebarItemProps) {
  const [css, $theme] = useStyletron();

  const [isOpen, setIsOpen] = useState(false);

  const actionRef = useRef<HTMLSpanElement>(null);

  const handleClick = useCallback(
    (
      e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
    ) => {
      if ((e.target as HTMLDivElement).closest('[data-kind="action"]')) {
        return;
      }

      setIsOpen((prev) => !prev);
    },
    [],
  );

  const [shouldRender, setShouldRender] = useState(false);

  // eslint-disable-next-line no-undef
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      ref.current = setTimeout(() => {
        setShouldRender(false);
      }, animationTiming);
    }
  }, [isOpen]);

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        data-testid="sidebar-title"
        aria-expanded={isOpen ? 'true' : 'false'}
        onKeyDown={(e) => {
          if (!(e.key === 'Enter' || e.code === 'Enter')) {
            return;
          }
          handleClick(e);
        }}
        onClick={(e) => {
          handleClick(e);
        }}
        className={css({
          display: 'flex',
          alignItems: 'center',
          height: '32px',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
          cursor: 'pointer',
          userSelect: 'none',
          transition: `background-color ${$theme.animation.easeInCurve} ${$theme.animation.timing100}`,
          ':hover': {
            backgroundColor: $theme.colors.backgroundSecondary,
          },
        })}
      >
        <LabelSmall>{title}</LabelSmall>

        <span className={css({ flexGrow: 1 })} />

        <span ref={actionRef} data-kind="action">
          {action}
        </span>

        <ChevronUp
          className={css({
            transform: isOpen ? 'rotate(0)' : 'rotate(180deg)',
            marginLeft: '12px',
          })}
        />
      </div>
      <div
        className={css({
          paddingTop: isOpen ? $theme.sizing.scale400 : 0,
          paddingBottom: isOpen ? $theme.sizing.scale400 : 0,
          paddingLeft: 0,
          paddingRight: 0,
          background: $theme.colors.backgroundPrimary,
          overflow: 'hidden',
          maxHeight: isOpen ? '1000px' : '0',
          transition: `padding ease ${$theme.animation.timing200}, max-height ease ${$theme.animation.timing200}`,
        })}
        tabIndex={isOpen ? -1 : undefined}
      >
        {shouldRender && children}
      </div>
    </>
  );
}

export interface SidebarItemLinkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  isHeading?: boolean;
}

export function SidebarItemLink({
  children,
  icon,
  onClick,
  isHeading = false,
  action,
  ...props
}: SidebarItemLinkProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!(e.key === 'Enter' || e.code === 'Enter')) {
          return;
        }

        onClick?.(e as never);
      }}
      onClick={onClick as never}
      className={css({
        cursor: 'pointer',
        ':hover': {
          backgroundColor: $theme.colors.backgroundSecondary,
        },
        height: isHeading ? '32px' : '48px',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        paddingLeft: $theme.sizing.scale600,
        paddingRight: $theme.sizing.scale600,
        color: isHeading
          ? $theme.colors.backgroundSecondary
          : $theme.colors.primaryA,
      })}
      {...props}
    >
      {icon && (
        <div
          className={css({
            width: '18px',
            height: '18px',
            marginRight: $theme.sizing.scale300,
          })}
        >
          {icon}
        </div>
      )}
      <LabelSmall>{children}</LabelSmall>
      {action && <FlexFill />}
      {action}
    </div>
  );
}

export default Sidebar;
