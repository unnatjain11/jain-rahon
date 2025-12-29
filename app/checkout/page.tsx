"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
// import { CheckoutForm } from "@/components/checkout-form"
import { Progress } from "@/components/ui/progress"
import { Shield, Truck, CreditCard } from "lucide-react"

// Form validation schema
const checkoutSchema = z.object({
  // Billing Information
  billingFirstName: z.string().min(2, "First name is required"),
  billingLastName: z.string().min(2, "Last name is required"),
  billingEmail: z.string().email("Invalid email address"),
  billingPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  billingAddress: z.string().min(5, "Address is required"),
  billingCity: z.string().min(2, "City is required"),
  billingState: z.string().min(2, "State is required"),
  billingPincode: z.string().min(6, "Valid pincode is required"),
  
  // Shipping Information (if different)
  sameAsBilling: z.boolean().default(true),
  shippingFirstName: z.string().optional(),
  shippingLastName: z.string().optional(),
  shippingEmail: z.string().email("Invalid email address").optional(),
  shippingPhone: z.string().optional(),
  shippingAddress: z.string().optional(),
  shippingCity: z.string().optional(),
  shippingState: z.string().optional(),
  shippingPincode: z.string().optional(),
}).refine(
  (data) => {
    if (!data.sameAsBilling) {
      return !!data.shippingFirstName && 
             !!data.shippingLastName && 
             !!data.shippingEmail && 
             !!data.shippingPhone && 
             !!data.shippingAddress && 
             !!data.shippingCity && 
             !!data.shippingState && 
             !!data.shippingPincode;
    }
    return true;
  },
  {
    message: "Shipping information is required when different from billing",
    path: ["shippingAddress"],
  }
);

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const formValues = useRef<CheckoutFormValues | null>(null);

  // Mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle cart check and redirect in a separate useEffect
  useEffect(() => {
    // Only redirect to cart if:
    // 1. We're on the client
    // 2. The cart is empty
    // 3. We're not coming from a payment process (no URL search params)
    if (isClient && cartItems.length === 0 && typeof window !== 'undefined' && !window.sessionStorage.getItem("orderItems")) {
      router.push("/cart");
    }
  }, [isClient, cartItems, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      sameAsBilling: true,
    },
  });

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Process the order after payment
  const processOrder = async () => {
    if (!formValues.current) return;
    
    setIsSubmitting(true);
    
    try {
      // Build customer name for the success page
      const customerName = `${formValues.current.billingFirstName} ${formValues.current.billingLastName}`;
      
      // Generate a unique order ID using timestamp and random number
      const orderId = `EAS${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 1000)}`;
      
      // Create order data object with all necessary details
      const orderData = {
        orderId,
        customerName,
        email: formValues.current.billingEmail,
        phone: formValues.current.billingPhone,
        items: cartItems,
        total: getCartTotal(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
      
      console.log("Order created:", orderData);
      
      // Save complete order data to sessionStorage
      sessionStorage.setItem("orderData", JSON.stringify(orderData));
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Order Placed Successfully",
        description: "Your order has been placed successfully!",
      });
      
      // Navigate to success page with only the order ID in URL
      router.push(`/checkout/success?order=${orderId}`);
      
      // Delay cart clearing until after navigation to avoid redirect issues
      setTimeout(() => {
        clearCart();
      }, 500);
      
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Failed",
        description: "There was an error processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form submission and Razorpay integration
  const onSubmit = (data: CheckoutFormValues) => {
    // Store form data for later processing
    formValues.current = data;
    
    // Initialize Razorpay payment
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_your_key_here', // Replace with your Razorpay key
      amount: getCartTotal() * 100, // Amount in paisa
      currency: 'INR',
      name: 'Jain Traders',
      description: 'Payment for order',
      image: '/logo.png', // Optional
      order_id: '', // If you have order ID from backend, set it here
      handler: function (response: any) {
        // Payment success handler
        console.log('Payment successful:', response);
        processOrder();
      },
      prefill: {
        name: `${data.billingFirstName} ${data.billingLastName}`,
        email: data.billingEmail,
        contact: data.billingPhone,
      },
      notes: {
        address: data.billingAddress,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  // Use consistent initial render structure to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p>Loading checkout...</p>
      </div>
    );
  }

  // Now we're on the client, we can safely check cart items
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p>Checking your cart...</p>
      </div>
    );
  }

  // Only render the full checkout form when we're on the client and have items
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Billing Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Billing Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingFirstName">First Name</Label>
                  <Input 
                    id="billingFirstName" 
                    {...register("billingFirstName")} 
                  />
                  {errors.billingFirstName && (
                    <p className="text-red-500 text-sm">{errors.billingFirstName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingLastName">Last Name</Label>
                  <Input 
                    id="billingLastName" 
                    {...register("billingLastName")} 
                  />
                  {errors.billingLastName && (
                    <p className="text-red-500 text-sm">{errors.billingLastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingEmail">Email</Label>
                  <Input 
                    id="billingEmail" 
                    type="email" 
                    {...register("billingEmail")} 
                  />
                  {errors.billingEmail && (
                    <p className="text-red-500 text-sm">{errors.billingEmail.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingPhone">Phone</Label>
                  <Input 
                    id="billingPhone" 
                    {...register("billingPhone")} 
                  />
                  {errors.billingPhone && (
                    <p className="text-red-500 text-sm">{errors.billingPhone.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="billingAddress">Address</Label>
                <Input 
                  id="billingAddress" 
                  {...register("billingAddress")} 
                />
                {errors.billingAddress && (
                  <p className="text-red-500 text-sm">{errors.billingAddress.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City</Label>
                  <Input 
                    id="billingCity" 
                    {...register("billingCity")} 
                  />
                  {errors.billingCity && (
                    <p className="text-red-500 text-sm">{errors.billingCity.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingState">State</Label>
                  <Input 
                    id="billingState" 
                    {...register("billingState")} 
                  />
                  {errors.billingState && (
                    <p className="text-red-500 text-sm">{errors.billingState.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="billingPincode">Pincode</Label>
                  <Input 
                    id="billingPincode" 
                    {...register("billingPincode")} 
                  />
                  {errors.billingPincode && (
                    <p className="text-red-500 text-sm">{errors.billingPincode.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="sameAsBilling" 
                checked={sameAsBilling}
                onCheckedChange={(checked) => {
                  setSameAsBilling(!!checked);
                }}
                {...register("sameAsBilling")}
              />
              <Label htmlFor="sameAsBilling">
                Shipping address is the same as billing
              </Label>
            </div>
            
            {/* Shipping Information (if different) */}
            {!sameAsBilling && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shippingFirstName">First Name</Label>
                    <Input 
                      id="shippingFirstName" 
                      {...register("shippingFirstName")} 
                    />
                    {errors.shippingFirstName && (
                      <p className="text-red-500 text-sm">{errors.shippingFirstName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shippingLastName">Last Name</Label>
                    <Input 
                      id="shippingLastName" 
                      {...register("shippingLastName")} 
                    />
                    {errors.shippingLastName && (
                      <p className="text-red-500 text-sm">{errors.shippingLastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shippingEmail">Email</Label>
                    <Input 
                      id="shippingEmail" 
                      type="email" 
                      {...register("shippingEmail")} 
                    />
                    {errors.shippingEmail && (
                      <p className="text-red-500 text-sm">{errors.shippingEmail.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shippingPhone">Phone</Label>
                    <Input 
                      id="shippingPhone" 
                      {...register("shippingPhone")} 
                    />
                    {errors.shippingPhone && (
                      <p className="text-red-500 text-sm">{errors.shippingPhone.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="shippingAddress">Address</Label>
                  <Input 
                    id="shippingAddress" 
                    {...register("shippingAddress")} 
                  />
                  {errors.shippingAddress && (
                    <p className="text-red-500 text-sm">{errors.shippingAddress.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shippingCity">City</Label>
                    <Input 
                      id="shippingCity" 
                      {...register("shippingCity")} 
                    />
                    {errors.shippingCity && (
                      <p className="text-red-500 text-sm">{errors.shippingCity.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shippingState">State</Label>
                    <Input 
                      id="shippingState" 
                      {...register("shippingState")} 
                    />
                    {errors.shippingState && (
                      <p className="text-red-500 text-sm">{errors.shippingState.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="shippingPincode">Pincode</Label>
                    <Input 
                      id="shippingPincode" 
                      {...register("shippingPincode")} 
                    />
                    {errors.shippingPincode && (
                      <p className="text-red-500 text-sm">{errors.shippingPincode.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-8 border-t lg:hidden">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{getCartTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="hidden lg:block">
          <Card className="p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} × {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{getCartTotal().toLocaleString()}</span>
              </div>
            </div>
            
            {/* Payment Info */}
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-base font-medium mb
