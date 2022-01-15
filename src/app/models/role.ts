import { User } from "./user";

export interface Role {
    id?:number,
    name:String,
    description:String,
    users?: User[]
}
