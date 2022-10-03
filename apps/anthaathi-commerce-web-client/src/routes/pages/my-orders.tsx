import { OrderList } from '~/Features/CMSComponents/Components/OrderList';

export default function MyOrdersPage() {
  return (
    <>
      <OrderList
        title="June 2021"
        list={[
          {
            key: '1',
            orderNumber: '#123',
            placedOn: '21 Mar 2021 3:50 PM',
            orderStatus: 'Partially Delivered',
            shipping: 0,
            total: 250,
            numberOfItems: 4,
          },
        ]}
      />

      <OrderList
        title="July 2021"
        list={[
          {
            key: '1',
            orderNumber: '#123',
            placedOn: '21 Mar 2021 3:50 PM',
            orderStatus: 'Partially Delivered',
            shipping: 0,
            total: 250,
            numberOfItems: 4,
          },
          {
            key: '3',
            orderNumber: '#1231',
            placedOn: '21 Mar 2021 3:50 PM',
            orderStatus: 'Partially Delivered',
            shipping: 0,
            total: 250,
            numberOfItems: 4,
          },
        ]}
      />
    </>
  );
}
