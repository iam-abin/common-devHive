import { Kafka, Consumer, KafkaMessage } from "kafkajs";
import { TOPICS } from "./topics";

interface Event {
	topic: TOPICS;
	data: any;
}

export abstract class KafkaConsumer<T extends Event> {
	abstract topic: T["topic"];
	abstract groupId: string;
	abstract onMessage(data: T["data"], topic:string, message: KafkaMessage): void;
	protected consumer!: Consumer;
	protected kafka: Kafka;

	constructor(client: Kafka) {
		this.kafka = client;
	}

	async subscribe(): Promise<void> {
		this.consumer = this.kafka.consumer({
			groupId: this.groupId,
		});

		// Connect to the Kafka cluster
		await this.consumer.connect();
		console.log("consumer connected!!!");

		await this.consumer.subscribe({ topic: this.topic });

		// Consume messages from all subscribed topics
		await this.consumer.run({
			eachMessage: async ({ topic, partition, message }) => {

				const parsedMessage: string | null | undefined =
					message?.value?.toString();
				console.log(`MESSAGE RECEIVED FROM topic <<<----- ${topic}`);

				if (parsedMessage) {
					// converting a json string to js object
					const parsedObject = JSON.parse(parsedMessage);
					this.onMessage(parsedObject, topic, message);
				} else {
					console.log("parsed message is null or undefined");
					return;
				}
			},
		});
	}

    async disconnect(): Promise<void> {
        console.log(`Consumer is Disconnecting from topic ${this.topic} of ${this.groupId} GroupId`);
        await this.consumer.disconnect();
    }
}
