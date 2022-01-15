import { Order } from "./order";
import { Role } from "./role";

export interface User {
    id?:number,
    firstname:string,
    lastname:string,
    username:string,
    email:string,
    password:string,
    city:string,
    phone:string,
    enabled:Boolean,
    roles?:Role[],
    orders?:Order[]
}
