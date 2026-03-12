import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { processCardPayment } from '../services/paymentService';

const PaymentScreen = ({ route }: any) => {
  const [loading, setLoading] = useState(false);
    const { confirmPayment } = useStripe(); // solo para inicializar

      const handlePay = async () => {
          setLoading(true);
              try {
                    // Aquí iría tu llamada al backend para crear PaymentIntent
                          const paymentIntentSecret = "pi_xxx_secret_xxx"; // ← viene del backend

                                const result = await processCardPayment(
                                        paymentIntentSecret,
                                                { /* datos de la tarjeta */ },
                                                        route.params.orderId
                                                              );

                                                                    Alert.alert(' Pago exitoso', 'Tu pedido está confirmado');
                                                                          // Navegar a pantalla de éxito
                                                                              } catch (error: any) {
                                                                                    Alert.alert('X Error en el pago', error.message || 'Inténtalo de nuevo');
                                                                                        } finally {
                                                                                              setLoading(false);
                                                                                                  }
                                                                                                    };

                                                                                                      return (
                                                                                                          <View style={{ flex: 1, padding: 20 }}>
                                                                                                                <CardField
                                                                                                                        postalCodeEnabled={false}
                                                                                                                                placeholders={{ number: '4242 4242 4242 4242' }}
                                                                                                                                        cardStyle={{ backgroundColor: '#FFFFFF' }}
                                                                                                                                                style={{ width: '100%', height: 50, marginVertical: 20 }}
                                                                                                                                                      />

                                                                                                                                                            <TouchableOpacity onPress={handlePay} disabled={loading}>
                                                                                                                                                                    {loading ? <ActivityIndicator color="#fff" /> : <Text>PAGAR CON TARJETA</Text>}
                                                                                                                                                                          </TouchableOpacity>
                                                                                                                                                                              </View>
                                                                                                                                                                                );
                                                                                                                                                                                };

                                                                                                                                                                                export default PaymentScreen;