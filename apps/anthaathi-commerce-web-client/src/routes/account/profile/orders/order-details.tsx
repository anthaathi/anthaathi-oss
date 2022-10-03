import OrderDetailsCard from "~/Features/CMSComponents/Components/OrderDetailsPage/OrderDetailsCard";
import OrderedItems from "~/Features/CMSComponents/Components/OrderDetailsPage/OrderedItems";
import PaymentAndAddressDetails from "~/Features/CMSComponents/Components/OrderDetailsPage/PaymentAndAddressDetails";

export default function OrderDetailsPage() {
  return (
    <div>
      <OrderDetailsCard
        details={{
          orderNumber: '#123',
          placedOn: '21 Mar 2021 3:50 PM',
          orderStatus: 'Partially Delivered',
          shipping: 0,
          total: 250,
          numberOfItems: 4,
          discount: 4,
        }}
      />
      <OrderedItems
        items={[
          {
            id: 1,
            name: 'Baby Yellow Pepper',
            image:
              'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
            key: '12',
            price: 12,
            numberOfItems: 2,
            currency: 'USD',
            weight_unit: 'KG',
            packaging: '500 gms',
          },
          {
            id: 2,
            name: 'Capsicum mixed',
            image:
              'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
            key: '23',
            price: 23,
            numberOfItems: 2,
            currency: 'USD',
            weight_unit: 'KG',
            packaging: '500 gms',
          },
        ]}
      />
      <PaymentAndAddressDetails
        details={{
          paymentOption: 'Debit / Credit Card',
          name: 'Jane Doe',
          apartment: '13C',
          landmark: 'La Celeste Residence, Street 1A',
          city: 'Dubai',
          country: 'UAE',
          mobileNumber: '+971-21321321',
        }}
      />
    </div>
  );
}
