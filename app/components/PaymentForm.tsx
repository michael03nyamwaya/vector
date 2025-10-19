"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import { PaymentFormInputs, paymentFormSchema, PaymentFormProps } from "../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

function PaymentForm({ setPaymentForm }: PaymentFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema),
    })
    
    const router = useRouter()
    
    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
        setPaymentForm(data)
        // You might want to navigate to a confirmation page instead of step 3
        router.push("/confirmation", { scroll: false })
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className="text-xs text-gray-500 font-semibold">
                    Name on card
                </label>
                <input 
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text" 
                    id="cardHolder" 
                    placeholder="John Kamau" 
                    {...register("cardHolder")}
                />
                {errors.cardHolder && (
                    <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
                )}
            </div>
            
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className="text-xs text-gray-500 font-semibold">
                    Card Number
                </label>
                <input 
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text" 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    {...register("cardNumber")}
                />
                {errors.cardNumber && (
                    <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
                )}
            </div>
            
            <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                    <label htmlFor="expirationDate" className="text-xs text-gray-500 font-semibold">
                        Expiration Date
                    </label>
                    <input 
                        className="border-b border-gray-200 py-2 outline-none text-sm"
                        type="text" 
                        id="expirationDate" 
                        placeholder="MM/YY" 
                        {...register("expirationDate")}
                    />
                    {errors.expirationDate && (
                        <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
                    )}
                </div>
                
                <div className="flex flex-col gap-1 flex-1">
                    <label htmlFor="cvv" className="text-xs text-gray-500 font-semibold">
                        CVV
                    </label>
                    <input 
                        className="border-b border-gray-200 py-2 outline-none text-sm"
                        type="text" 
                        id="cvv" 
                        placeholder="123" 
                        {...register("cvv")}
                    />
                    {errors.cvv && (
                        <p className="text-xs text-red-500">{errors.cvv.message}</p>
                    )}
                </div>
            </div>
            
            <button 
                type="submit" 
                className="w-full bg-gray-700 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
                Complete Payment
                <ShoppingCart className="w-3 h-3" />
            </button>
        </form>
    )
}

export default PaymentForm