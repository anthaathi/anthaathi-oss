import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeadingSmall } from 'baseui/typography';
import React from 'react';
import { Tab, Tabs } from 'baseui/tabs-motion';

export interface PageHeaderProps {
  title: React.ReactNode;
  icon: string;
  endContent?: React.ReactNode;
  tabs?: { title: React.ReactNode; key: number | string }[];
  activeTab?: string | number;
  onChangeTab?: (key: string | number) => void;
}

function PageHeader({
  title,
  icon,
  endContent,
  tabs,
  onChangeTab,
  activeTab,
}: PageHeaderProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        position: 'sticky',
        top: '48px',
        backgroundColor: $theme.colors.backgroundPrimary,
        zIndex: 100,
        borderBottomColor: $theme.colors.borderTransparent,
        borderBottomStyle: 'solid',
        borderBottomWidth: tabs ? 0 : '1px',
      })}
    >
      <Block
        display="flex"
        alignItems="center"
        paddingTop="scale500"
        paddingLeft="scale500"
        paddingBottom="scale500"
        paddingRight="48px"
      >
        <span
          style={{
            backgroundColor: '#0076DF',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
          }}
          className={`fa fa-${icon} fa-2x`}
          aria-hidden="true"
        />
        <HeadingSmall
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
            marginLeft: '10px',
            color: '#242424',
            marginBottom: '0px',
            marginTop: '0px',
          }}
        >
          {title}
        </HeadingSmall>

        <span className={css({ flexGrow: 1 })} />
        {endContent}
      </Block>

      {tabs && (
        <Tabs
          activeKey={activeTab}
          overrides={{
            TabBorder: { style: { height: '2px' } },
            TabHighlight: { style: { height: '2px' } },
            TabList: { style: { paddingBottom: '2px', marginBottom: '-2px' } },
          }}
          onChange={({ activeKey }) => {
            onChangeTab?.(activeKey);
          }}
        >
          {tabs.map((tab) => {
            return (
              <Tab
                title={tab.title}
                key={tab.key}
                overrides={{
                  TabPanel: { style: { paddingBottom: 0, paddingTop: 0 } },
                  Tab: {
                    style: {
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      borderTopLeftRadius: '4px',
                      borderTopRightRadius: '4px',
                      fontWeight: 700,
                    },
                  },
                }}
              />
            );
          })}
        </Tabs>
      )}
    </div>
  );
}

export default PageHeader;
