declare global {
  interface Window {
    Razorpay: any;
  }
}

export const loadRazorpay = () => {
  return new Promise<any>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => {
      resolve(window.Razorpay)
    }
    script.onerror = () => {
      reject(new Error("Razorpay SDK failed to load"))
    }
    document.body.appendChild(script)
  })
}
