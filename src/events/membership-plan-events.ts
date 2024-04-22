import { TOPICS } from "./topics";

export interface MEMBERSHIP_PLAN_CREATED_EVENT{
    topic: TOPICS.MEMBERSHIP_PLAN_CREATED_TOPIC,
    data:{
        membershipPlanId: string,
        name : string,
        features : Array<string>,
        description : string,
        price : number,
        isActive : boolean,
    }
}

export interface MEMBERSHIP_PLAN_UPDATED_EVENT{
    topic: TOPICS.MEMBERSHIP_PLAN_UPDATED_TOPIC,
    data:{
        membershipPlanId: string,
        name : string,
        features : Array<string>,
        description : string,
        price : number,
        isActive : boolean,
    }
}