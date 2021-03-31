import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

// stripe
import {loadStripe} from '@stripe/stripe-js';
import CardForm from '../components/CardForm';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
  const stripe:any = useStripe();
  const elements:any = useElements();



  return (
      <IonRow style={{height: '100%'}} className="ion-justify-content-center ion-align-items-center">

      <Elements stripe={stripePromise}>
        <CardForm/>
      </Elements>
      </IonRow>

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
