"use server"

import { EmailTemplate } from "@/components/email-template";
import { Subscriber } from "@/models/subs-model";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData) {
    try {
        const email = formData["email"]
        const fullName = formData["fullName"]

        console.log(email, fullName);

        if (!email) return null

        const foundSubscriber = await Subscriber.findOne({ email: email }).lean()

        console.log(foundSubscriber);

        if (!foundSubscriber) {
            const subscribersPayload = {
                name: fullName,
                email
            }

            await Subscriber.create(subscribersPayload)

            const message = `Hey ${fullName},

Thanks a ton for subscribing to our newsletter! 🚀 You're now part of a journey through time where we'll revisit the golden days and share some classic gems with you. Get ready to relive the memories and enjoy some good old-fashioned fun!

Stay groovy and keep rocking! 🎸

Best,
The Retro Team`;

            const sentInfo = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: email,
                subject: "Congratulations!!! Your are the man .. keep going",
                react: EmailTemplate({ message })
            })

        } else {
            throw new Error(`${email} Already Subscribed`)
        }

        revalidatePath('/')
    } catch (e) {
        throw new Error(e.message)
    }
}