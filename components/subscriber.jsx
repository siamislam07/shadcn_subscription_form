import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getSubscribers } from "@/queries"



export const Subscriber = async () => {

    const subscribers = await getSubscribers()
    console.log(subscribers);

    return (

        <div className="flex flex-col justify-center items-center my-3">
            {subscribers?.map((sub) => (
                <Card key={sub.id} className="my-2">
                    <CardHeader>
                        <CardTitle>Subscription added</CardTitle>
                        <CardDescription>Check your email</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>wow!! {sub?.name} going to rock man.</p>
                    </CardContent>
                    <CardFooter>
                        <p> Subscribed at:{" "}
                            {new Intl.DateTimeFormat("en-us").format(sub?.createdAt)}
                        </p>
                    </CardFooter>
                </Card>
            ))

            }

        </div>
    )
}