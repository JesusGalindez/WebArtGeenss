import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import { useAppStore } from '../stores/useAppStore';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateCartQuantity, removeFromCart, clearCart } = useAppStore();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    phone: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id);
    } else {
      updateCartQuantity(id, newQuantity);
    }
  };

  const handlePayPalSuccess = (details: any) => {
    console.log('Pago exitoso:', details);
    alert(`¡Pago completado! Orden ID: ${details.id}\nTotal: $${total}\nSe enviará confirmación por email.`);
    clearCart();
    setShowCheckout(false);
    onClose();
  };

  const handleStripePayment = () => {
    // Simulación de pago con Stripe
    alert(`Pago simulado con Stripe por $${total}\n¡Orden procesada exitosamente!\nSe enviará confirmación por email.`);
    clearCart();
    setShowCheckout(false);
    onClose();
  };

  const handleBankTransfer = () => {
    alert(`Instrucciones de transferencia bancaria:\n\nBanco: Banco Nacional\nCuenta: 1234567890\nMonto: $${total}\n\nEnvía el comprobante a: ventas@geenssarchenti.com`);
    clearCart();
    setShowCheckout(false);
    onClose();
  };

  const isFormValid = customerInfo.name && customerInfo.email && customerInfo.address;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="absolute right-0 top-0 h-full w-full sm:max-w-lg bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {!showCheckout ? (
              // Cart View
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag size={24} className="text-amber-500" />
                    <h2 className="text-xl font-bold text-gray-900">
                      Carrito ({cartItems.length})
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                      <p className="text-gray-500">Tu carrito está vacío</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
                            <p className="text-amber-600 font-bold">${item.price}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-200 rounded"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-200 rounded"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">${item.price * item.quantity}</p>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 text-sm hover:text-red-700 mt-1"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="border-t p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center space-x-1">
                          <Truck size={14} />
                          <span>Envío:</span>
                        </span>
                        <span>{shipping === 0 ? 'Gratis' : `$${shipping}`}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t pt-2">
                        <span>Total:</span>
                        <span>${total}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <CreditCard size={20} />
                      <span>Proceder al Pago</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              // Checkout View
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-amber-500 hover:text-amber-600"
                  >
                    ← Volver al carrito
                  </button>
                  <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Checkout Form */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Customer Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del Cliente</h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Nombre completo *"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        value={customerInfo.email}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                      <input
                        type="text"
                        placeholder="Dirección *"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Ciudad"
                          value={customerInfo.city}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, city: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                        <input
                          type="text"
                          placeholder="País"
                          value={customerInfo.country}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, country: e.target.value }))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Resumen del Pedido</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Envío:</span>
                        <span>{shipping === 0 ? 'Gratis' : `$${shipping}`}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-1">
                        <span>Total:</span>
                        <span>${total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  {isFormValid && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Método de Pago</h3>
                      <div className="space-y-3">
                        {/* PayPal */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">PayPal</h4>
                          <PayPalScriptProvider options={{ 
                            clientId: "test",
                            currency: "USD"
                          }}>
                            <PayPalButtons
                              createOrder={(data, actions) => {
                                return actions.order.create({
                                  intent: "CAPTURE",
                                  purchase_units: [{
                                    amount: { 
                                      currency_code: "USD",
                                      value: total.toString() 
                                    }
                                  }]
                                });
                              }}
                              onApprove={(data, actions) => {
                                return actions.order!.capture().then(handlePayPalSuccess);
                              }}
                              onError={(err) => {
                                console.error('PayPal Error:', err);
                                alert('Error en el pago con PayPal');
                              }}
                            />
                          </PayPalScriptProvider>
                        </div>

                        {/* Stripe */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">Tarjeta de Crédito/Débito</h4>
                          <button
                            onClick={handleStripePayment}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                          >
                            Pagar con Tarjeta (Demo)
                          </button>
                        </div>

                        {/* Bank Transfer */}
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">Transferencia Bancaria</h4>
                          <button
                            onClick={handleBankTransfer}
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                          >
                            Ver Datos Bancarios
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isFormValid && (
                    <div className="text-center text-gray-500 py-4">
                      Completa la información del cliente para continuar
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
