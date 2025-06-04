import { FormProvider, useForm, useFormContext } from "react-hook-form";

import { useEffect } from "react";
import type {StationType} from "../../../backend/src/shared/types";
import Details from "./Details";



export type StationFormData = {
    name:string,
    location:{
        latitude:number,
        longitude:number,
    },
    status:string,
    powerOutput:number,
    connectorType:string,
  
  };

  type Props={
    station?:StationType;
    onSave:(stationFormData:FormData)=>void;
    isLoading:boolean;
  }

function ManageStationForm( {onSave,isLoading,station}:Props) {


    const formMethods=useForm<StationFormData>();
    const {handleSubmit,reset}=formMethods;

    useEffect(()=>{
      reset(station); 
    },[station,reset]);

    const onSubmit=handleSubmit((formDataJson:StationFormData)=>{
      const formData=new FormData();
      if(station){
        formData.append("stationId",station._id);
      }
      formData.append("name",formDataJson.name);
      formData.append("latitude",formDataJson.location.latitude.toString());
      formData.append("longitude",formDataJson.location.longitude.toString());
      formData.append("status",formDataJson.status.toString());
      formData.append("powerOutput",formDataJson.powerOutput.toString());
      formData.append("connectorType",formDataJson.connectorType.toString());
    
     

      onSave(formData);

    })


  return (
    <FormProvider  {...formMethods} >

        <form className="flex flex-col gap-10" onSubmit={onSubmit}>
          <Details />
            
            
            <span className="flex justify-end ">

            
            <button type="submit" disabled={isLoading} className=" bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:isLoading disabled:bg-gray-500">{isLoading ? "Saving..." : "Save"}</button>
            
            </span>
        </form>

    </FormProvider>
  )
}

export default ManageStationForm