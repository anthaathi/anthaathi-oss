import { useStyletron } from 'baseui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { headerOpenAtom } from '../../Core/Components/Header/atom';
import { graphql, usePaginationFragment } from 'react-relay';
import { Sidebar } from '../../Core/Components/Sidebar';
import { Navigation } from 'baseui/side-navigation';
import React, { useMemo } from 'react';
import { DefaultLayoutContainerFragment$key } from '../../../__generated__/DefaultLayoutContainerFragment.graphql';
import { Button, KIND, SIZE } from 'baseui/button';
import { SidebarItem } from './SidebarItem';
import { useParams } from 'react-router';
import { idDecoder } from '../../../Utils/relay/id-generator';

export function DefaultLayoutContainer({
  $ref,
}: {
  $ref: DefaultLayoutContainerFragment$key;
}) {
  const [, $theme] = useStyletron();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { project } = useParams<{ project: string }>();

  const headerOpen = useRecoilValue(headerOpenAtom);

  const {
    data: spaces,
    hasNext,
    isLoadingNext,
    loadNext,
  } = usePaginationFragment(
    graphql`
      fragment DefaultLayoutContainerFragment on Project
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 5 }
      )
      @refetchable(queryName: "DefaultLayoutPaginationQuery") {
        spaces(first: $count, after: $cursor)
          @connection(key: "DefaultLayout_project_spaces") {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    $ref
  ) || [];

  const spacesSubnav = useMemo(() => {
    return (
      spaces.spaces?.edges
        ?.filter((res) => res?.node)
        .map((res) => ({
          itemId: `/${project}/spaces/${idDecoder(res?.node?.id || '')?.id}`,
          title: <SidebarItem title={res?.node?.name || ''} />,
        })) || []
    ).concat(
      hasNext
        ? [
            {
              itemId: '#',
              title: (
                <Button
                  overrides={{
                    Root: {
                      style: {
                        width: '100%',
                      },
                    },
                  }}
                  size={SIZE.mini}
                  kind={KIND.secondary}
                  isLoading={isLoadingNext}
                  onClick={() => loadNext(5)}
                >
                  LOAD MORE
                </Button>
              ),
            },
          ]
        : []
    );
  }, [spaces.spaces?.edges]);

  return (
    <Sidebar
      $style={{
        transform: headerOpen ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <Navigation
        items={[
          {
            title: <SidebarItem icon="dashboard" title="Dashboard" />,
            itemId: `/${project}/`,
          },
          {
            title: <SidebarItem icon="plus-square-o" title="Raise Ticket" />,
            itemId: `/${project}/raise-ticket`,
          },
          {
            title: <SidebarItem header title="Spaces" />,
            itemId: `/${project}/spaces`,
            subNav: spacesSubnav,
            ...{ header: true },
          },
          {
            title: <SidebarItem icon="users" title="Customers" />,
            itemId: `/${project}/customer`,
          },
        ]}
        activeItemId={pathname}
        onChange={({ event, item }) => {
          // prevent page reload
          event.preventDefault();
          if (item.itemId && !(item as never as { header: boolean }).header) {
            navigate(item.itemId as never);
          }
        }}
        overrides={{
          NavItem: {
            style: ({ $active }) => {
              if (!$active) {
                return {
                  paddingLeft: $theme.sizing.scale500,
                  color: $theme.colors.primarySideBarA,
                };
              }

              return {
                paddingLeft: $theme.sizing.scale500,
                backgroundImage: $theme.colors.primarySideBarA,
                borderLeftColor: $theme.colors.primaryHeaderA,
              };
            },
          },
        }}
      />
    </Sidebar>
  );
}
