import { Kafka, Producer, RecordMetadata } from "kafkajs";
import { TOPICS } from "./topics";

interface Event{
    topic: TOPICS,
    data: any
}

export abstract class KafkaPublisher<T extends Event>{
    abstract topic: T['topic'];
    protected producer: Producer;

    constructor(kafka: Kafka){
        this.producer = kafka.producer()
    }

    public async publish(data: T['data']): Promise<RecordMetadata[]>{

        try {

            await this.producer.connect();
            console.log("producer connected!!!");

            const result = await this.producer.send({
                topic: this.topic,
                messages: [{
                    value: JSON.stringify(data)
                }]
            })

            console.log("EVENT PUBLISHED TO TOPIC----->>>:", this.topic);
            return result;
        } catch (error:any) {

            console.log("Error occured in event publish: ",error);
            throw new Error(error)
        }finally{

            await this.producer.disconnect()
            console.log("Producer disconnected");
        }
    }

}