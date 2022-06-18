import * as React from 'react';
import {FormAppLayout} from '../../components/FormAppLayout';

const Index: React.FC = () => {
  return (
    <FormAppLayout title="Create new Task" subTitle="Something"></FormAppLayout>
  );
};

export default Index;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
