import { TOPICS } from "./topics";

export interface USER_CREATED_EVENT{
    topic: TOPICS.USER_CREATED_TOPIC,
    data:{
        name: string,
        email: string,
        phone: number,
        userType: string,
        isActive: boolean,
        userId: string
    }
}

export interface USER_UPDATED_EVENT{
    topic: TOPICS.USER_UPDATED_TOPIC,
    data:{
        name: string,
        email: string,
        phone: number,
        userType: string,
        isActive: boolean,
        userId: string
    }
}