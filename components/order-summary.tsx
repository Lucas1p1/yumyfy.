interface OrderSummaryProps {
  subtotal: number
  deliveryFee?: number
  tax?: number
  discount?: number
  total: number
}

export function OrderSummary({ subtotal, deliveryFee = 3.99, tax = 0, discount = 0, total }: OrderSummaryProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4">
      <h3 className="font-bold text-lg">Order Summary</h3>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        {deliveryFee > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium">${deliveryFee.toFixed(2)}</span>
          </div>
        )}
        {tax > 0 && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        )}
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="font-medium">-${discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
