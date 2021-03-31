import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import './Tab3.css';

// stripe
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe:any = useStripe();
  const elements:any = useElements();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
          Realizar Pagamento
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51IOUQLFwTfXJuzFuHYQKSj4cfcFQQSHBJkBwBBPsCHJ7CQcnLCEzgjxhIxd7YZvMdCAYY4TlmDz70zBE1v99KV4T00hnAyvvtk');

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
