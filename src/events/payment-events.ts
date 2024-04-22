import { TOPICS } from "./topics";

export interface PAYMENT_CREATED_EVENT{
    topic: TOPICS.PAYMENT_CREATED_TOPIC,
    data:{
        candidateId: string
        membershipPlanId: string,
    }
}