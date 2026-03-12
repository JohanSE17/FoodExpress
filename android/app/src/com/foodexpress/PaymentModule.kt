package com.foodexpress

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.firebase.crashlytics.FirebaseCrashlytics

class PaymentModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

        override fun getName(): String = "PaymentModule"

            @ReactMethod
                fun processPayment(cardNumber: String, orderId: String) {
                            try {
                                            // Aquí iría la lógica nativa si usas SDK nativo
                                                        FirebaseCrashlytics.getInstance().log("Processing payment for order: $orderId")
                            } catch (e: Exception) {
                                            FirebaseCrashlytics.getInstance().recordException(e)
                                                        throw e // React Native lo capturará
                            }
                }
}
                            }
                            }
                }
}