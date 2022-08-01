import { LabelMedium, LabelSmall } from 'baseui/typography';
import { FlexFill } from '../../../Core/Components/FlexFill';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';
import { Search } from 'baseui/icon';
import { StatefulPopover, PLACEMENT } from 'baseui/popover';

import { Card, StyledBody } from 'baseui/card';
import { ListItemLabel } from 'baseui/list';
import { Check } from 'baseui/icon';
import React from 'react';
import { Tag } from 'baseui/tag';
import { Input, SIZE as INPUT_SIZE } from 'baseui/input';

type ListInfo = {
  id: string;
  name: string;
};
export interface PeopleSelectorProps {
  label: string;
  list?: ListInfo[];
}

export function SidebarSelectorText({ list, label }: PeopleSelectorProps) {
  const [, $theme] = useStyletron();
  const [value, setValue] = React.useState<ListInfo[]>([]);

  return (
    <div>
      <StatefulPopover
        content={() => (
          <CardType list={list} value={value} setValue={setValue} />
        )}
        placement={PLACEMENT.bottom}
        popoverMargin={4}
        returnFocus
        autoFocus
      >
        <Block
          display="flex"
          alignContent="center"
          placeContent="center"
          marginBottom="scale200"
          alignItems="center"
          $style={{ cursor: 'pointer' }}
          onClick={() => {}}
        >
          <LabelMedium
            $style={{ fontFamily: $theme.typography.headingFontFamily }}
          >
            {label}
          </LabelMedium>

          <FlexFill />

          <Button size={SIZE.mini} kind={KIND.tertiary}>
            <Icon icon="gear" />
          </Button>
        </Block>
      </StatefulPopover>

      <>
        {value.map((data, index) => (
          <Tag
            key={index}
            onActionClick={() => {
              if (value.some((obj) => obj.id === data.id)) {
                let copyArray = [...value];
                copyArray.splice(
                  copyArray.findIndex((obj) => obj.id === data.id),
                  1
                );
                console.log(copyArray);
                setValue(copyArray);
              }
            }}
          >
            {data.name}
          </Tag>
        ))}
      </>
    </div>
  );
}

const CardType = ({
  list,
  value,
  setValue,
}: {
  list?: ListInfo[];
  value: ListInfo[];
  setValue: React.Dispatch<React.SetStateAction<ListInfo[]>>;
}) => {
  const userList = list;
  const [listData, setListData] = React.useState<ListInfo[] | undefined>(list);
  const [name, setName] = React.useState<string>('');
  return (
    <Card
      overrides={{
        Root: {
          style: () => ({
            borderRadius: '0px',
            width: '320px',
          }),
        },
      }}
    >
      <StyledBody>
        Search, here! 👋
        <Input
          size={INPUT_SIZE.compact}
          startEnhancer={<Search size="18px" />}
          placeholder="Enter text"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const keyword = e.currentTarget.value;
            if (keyword !== '') {
              const results = listData?.filter((user) => {
                return user.name
                  .toLowerCase()
                  .startsWith(keyword.toLowerCase());
              });
              setListData(results);
            } else {
              setListData(userList);
            }
            setName(keyword);
          }}
        />
        {listData?.map((data) => (
          <>
            <li
              style={{
                listStyleType: 'none',
                display: 'flex',
                marginTop: 20,
                marginBottom: 10,
              }}
              key={data.id}
              onClick={() => {
                if (value.some((obj) => obj.id === data.id)) {
                  let copyArray = [...value];
                  copyArray.splice(
                    copyArray.findIndex((obj) => obj.id === data.id),
                    1
                  );
                  console.log(copyArray);
                  setValue(copyArray);
                } else {
                  let copyArray = [...value];
                  copyArray.push(data);
                  setValue(copyArray);
                }
              }}
            >
              <Check
                size={20}
                color={
                  value.some((obj) => obj.id === data.id) ? '#000' : '#fff'
                }
              />
              <div style={{ marginLeft: 10 }}>
                <ListItemLabel>{data.name}</ListItemLabel>
              </div>
            </li>
          </>
        ))}
        {listData?.length === 0 && name.length > 0 && (
          <LabelSmall>No user found</LabelSmall>
        )}
      </StyledBody>
    </Card>
  );
};
