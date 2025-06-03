export type UserType={
    _id:string,
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

export type StationType={
    _id:string,
    name:string,
    userId: string,
    status:string,
    powerOutput:number,
    connectorType:string,
    lastUpdated: Date,
    location:{
        latitude:number,
        longitude:number,
    }
   


}