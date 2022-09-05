import { LabelMedium, LabelSmall } from 'baseui/typography';
import { FlexFill } from '../../../Core/Components/FlexFill';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';
import { Check, Search } from 'baseui/icon';
import { PLACEMENT, StatefulPopover } from 'baseui/popover';

import { ListItemLabel } from 'baseui/list';
import React from 'react';
import { Tag } from 'baseui/tag';
import { Input, SIZE as INPUT_SIZE } from 'baseui/input';

type ListInfo = {
  id: string;
  name: string;
};
export interface PeopleSelectorProps {
  label: string;
  inputTitle?: string;
  list?: ListInfo[];
}

export function SidebarSelectorText({
  list,
  label,
  inputTitle,
}: PeopleSelectorProps) {
  const [, $theme] = useStyletron();
  const [value, setValue] = React.useState<ListInfo[]>([]);

  return (
    <div>
      <StatefulPopover
        content={() => (
          <CardType
            inputTitle={inputTitle}
            list={list}
            value={value}
            setValue={setValue}
          />
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
                const copyArray = [...value];
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
  inputTitle,
  list,
  value,
  setValue,
}: {
  inputTitle?: string;
  list?: ListInfo[];
  value: ListInfo[];
  setValue: React.Dispatch<React.SetStateAction<ListInfo[]>>;
}) => {
  const userList = list;
  const [listData, setListData] = React.useState<ListInfo[] | undefined>(list);
  const [name, setName] = React.useState<string>('');
  return (
    <div
      style={{
        borderRadius: '4px',
        width: '320px',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#fff',
      }}
    >
      <LabelMedium
        $style={{
          marginLeft: '20px',
          marginBottom: '10px',
          fontWeight: 'bold',
        }}
      >
        {inputTitle}
      </LabelMedium>
      <div>
        <div
          style={{
            borderLeftWidth: '0px',
            borderRightWidth: '0px',
            borderTopWidth: '1px',
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'hsla(0, 0%, 0%, 0.08)',
          }}
        >
          <Input
            overrides={{
              Root: {
                style: () => ({
                  margin: '10px',
                  width: '300px',
                }),
              },
            }}
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
        </div>

        {listData?.map((data, index) => (
          <div
            key={index}
            style={{
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderTopWidth: '0px',
              borderBottomWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsla(0, 0%, 0%, 0.08)',
            }}
          >
            <li
              style={{
                listStyleType: 'none',
                display: 'flex',
                marginTop: 15,
                marginBottom: 15,
                paddingLeft: 10,
              }}
              key={data.id}
              onClick={() => {
                if (value.some((obj) => obj.id === data.id)) {
                  const copyArray = [...value];
                  copyArray.splice(
                    copyArray.findIndex((obj) => obj.id === data.id),
                    1
                  );
                  console.log(copyArray);
                  setValue(copyArray);
                } else {
                  const copyArray = [...value];
                  copyArray.push(data);
                  setValue(copyArray);
                }
              }}
            >
              <Check
                size={22}
                color={
                  value.some((obj) => obj.id === data.id) ? '#000' : '#fff'
                }
              />
              <div style={{ marginLeft: 5 }}>
                <ListItemLabel>{data.name}</ListItemLabel>
              </div>
            </li>
          </div>
        ))}
        {listData?.length === 0 && name.length > 0 && (
          <LabelSmall
            $style={{
              margin: '10px',
            }}
          >
            No user found
          </LabelSmall>
        )}
      </div>
    </div>
  );
};
