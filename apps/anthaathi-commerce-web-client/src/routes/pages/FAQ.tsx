import { FAQ } from '~/Features/CMSComponents/Components/FAQ';

export default function FAQPage() {
  return (
    <FAQ
      title="FAQs"
      list={[
        {
          question: 'How do I check out?',
          answer:
            "As soon as you have finished adding items to your shopping cart and are ready to place an order, select the 'Checkout' tab. Follow the steps by entering the requested details for your delivery and the payment details until you receive the order confirmation and an e-mail summary of your order.",
        },
        {
          question:
            'Are there any hidden charges when I make a purchase online?',
          answer:
            'There are NO hidden charges when you make a purchase on www.nrtcfresh.com. The price you see on the product page is just what you pay.',
        },
        {
          question: 'How do I get a receipt?',
          answer:
            'You will receive an electronic receipt on your registered email address, the order confirmation that will summarize your order and the payment details. When your shopping basket is delivered, you will be given a detailed delivery note of your received order by the driver.',
        },
      ]}
    />
  );
}
