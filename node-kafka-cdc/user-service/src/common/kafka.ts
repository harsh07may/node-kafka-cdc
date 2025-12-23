// src/config/kafka.ts
import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "user-service",
    brokers: ["localhost:9092"], // Replace with your broker address
});

export const producer = kafka.producer();

export async function connectProducer() {
    await producer.connect();
    console.log("Kafka Producer connected");
}

export async function publishUserEvent(eventType: string, data: unknown) {
    try {
        await producer.send({
            topic: "user-events",
            messages: [
                {
                    // key: data.id, // Ensure strict ordering for this specific user
                    value: JSON.stringify({
                        eventType,
                        data,
                        timestamp: new Date().toISOString()
                    }),
                },
            ],
        });
    } catch (err) {
        console.error("Failed to publish to Kafka:", err);
        // In a real app, you would handle this strictly (rollback or retry)
    }
}