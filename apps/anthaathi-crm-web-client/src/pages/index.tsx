import * as React from 'react';
import {useState} from 'react';
import {Button, KIND} from 'baseui/button';
import {useStyletron} from 'baseui';
import {SIZE} from 'baseui/modal';
import {Drawer} from 'baseui/drawer';
import {HeadingMedium} from 'baseui/typography';
import {Block} from 'baseui/block';
import dynamic from 'next/dynamic';

const CreateTask = dynamic(
  () => import('../Forms/CreateTask').then((docs) => docs.CreateTask),
  {
    ssr: false,
  },
);

const Index: React.FC = () => {
  const [css, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} size={SIZE.auto}>
        <Block
          width="calc(100% - 18px)"
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <HeadingMedium marginTop="scale200" marginBottom="scale800">
            Create Issue
          </HeadingMedium>

          <CreateTask />

          <Block display="flex" flexDirection="row-reverse">
            <Button $style={{minWidth: '180px'}}>Create Issue</Button>
            <span className={css({width: '6px'})} />
            <Button kind={KIND.secondary} $style={{minWidth: '180px'}}>
              Cancel
            </Button>
          </Block>
        </Block>
      </Drawer>
      <Button onClick={() => setIsOpen(true)}>Hello</Button>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
