import { Address } from "./address";
import { User } from "./user";

export interface Order {
    id?:Number,
    total:Number,
    linesOrders?:[],
    address:Address
    user?:User
}
