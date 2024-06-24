
import { replaceMongoIdInArray } from "@/lib/transform";
import { Subscriber } from "@/models/subs-model";



export async function getSubscribers(){
    try{

        const subscribers = await Subscriber.find({}).lean()

        return replaceMongoIdInArray(subscribers)

    }catch(err){
        console.log(err.message);
    }
}