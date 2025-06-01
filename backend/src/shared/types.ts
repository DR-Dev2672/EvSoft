export type UserType={
    _id:string,
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

export type StationType={
    id:string,
    name:string,
    location:{
        latitude:number,
        longitude:number
    },
    status:string,
    powerOutput:number,
    connectorType:string,


}