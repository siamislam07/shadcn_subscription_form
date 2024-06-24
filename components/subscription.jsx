
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sendEmail } from "@/app/action/email"

const formSchema = z.object({
    fullName: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" })
})

export const Subscription = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: ""
        }
    })

    async function onSubmit(values) {
        try{
            await sendEmail(values)
            toast.success(`${values.fullName} subscribed nicely`,{
                action:{
                    label:'OK',
                    
                }
            })
        }catch(e){
            toast.error(e.message,{
                action:{
                    label:'OK',
                }
            })
        }
    }

    const { isSubmitting, isValid } = form.formState

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="md:space-y-8 space-y-7 flex flex-col items-center">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isSubmitting}
                                    className="w-full md:w-[350px]"
                                    placeholder="Enter Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isSubmitting}
                                    type="email"
                                    className="w-full md:w-[350px]"
                                    placeholder="Enter email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={!isValid || isSubmitting} type="submit" >Submit</Button>
            </form>
        </Form>
    )
}