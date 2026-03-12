import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { logCrash } from '../utils/crashlytics';

export const processCardPayment = async (
  paymentIntentSecret: string,
    cardDetails: any,
      orderId: string
      ) => {
        try {
            const { confirmPayment } = useStripe();
                
                    const { error, paymentIntent } = await confirmPayment(paymentIntentSecret, {
                          paymentMethodType: 'Card',
                                paymentMethodData: cardDetails,
                                    });

                                        if (error) {
                                              logCrash(error, `confirmPayment - Order ${orderId}`);
                                                    throw error;
                                                        }

                                                            return { success: true, paymentIntent };
                                                              } catch (error: any) {
                                                                  logCrash(error, `processCardPayment - Order ${orderId}`);
                                                                      
                                                                          // Fallback amigable para el usuario
                                                                              if (error.code === 'Failed') {
                                                                                    throw new Error('X Tarjeta rechazada. Prueba con otra tarjeta o método de pago.');
                                                                                        }
                                                                                            throw error;
                                                                                              }
                                                                                              };