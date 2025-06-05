

import * as apiClient from "../api-client";
import { useMutation,useQueryClient} from "react-query";
// import ManageStationForm from "../forms/ManageStationForm";
import {  useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


export type StationFormData = {
    name:string;
    location:{
        latitude:number,
        longitude:number,
    };
    status:string,
    powerOutput:number,
    connectorType:string,
  
  };

  
  


const AddStation = () => {

   const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();


const {register, formState: { errors }, handleSubmit } = useForm<StationFormData>();


 
  
  const mutation = useMutation(apiClient.addMyStation,
    {
     onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
  });
 
      
  
     

  // const handleSave = (stationFormData: FormData) => {
  //   console.log(stationFormData)
  //   mutate(stationFormData);
  // };
 const onSubmit = handleSubmit((data) => {
    // console.log("formdataa",data);
    mutation.mutate(data);
  });
  

  return (
    <form className="flex flex-col gap-10" onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
       <h1 className="text-3xl font-bold mb-3">Add Station</h1>
       <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Latitude
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("location.latitude", { required: "This field is required",valueAsNumber: true, })}
          ></input>
          {errors.location?.latitude && (
            <span className="text-red-500">{errors.location.latitude.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Longitude
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("location.longitude", { required: "This field is required" ,valueAsNumber: true})}
          ></input>
          {errors.location?.longitude && (
            <span className="text-red-500">{errors.location.longitude.message}</span>
          )}
        </label>
      </div>
      
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        PowerOutput
        <input
          type="number"
          min={0}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("powerOutput", { required: "This field is required",valueAsNumber: true })}
        ></input>
        {errors.powerOutput && (
          <span className="text-red-500">{errors.powerOutput.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        ConnectorType
        <select 
        {...register("connectorType",{required:"this field is required"})}
        className="border rounded w-full p-2 text-gray-700 font-normal">
            <option className="text-sm font-bold">Select connector type</option>
            
                {["Type1", "Type2", "CCS", "CHAdeMO"].map((str)=>
                   (<option value={str}>{str}</option>)
                )}
        </select>
        {errors.connectorType &&(
            <span>{errors.connectorType.message}</span>
        )}
            
        
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Status
        <select 
        {...register("status",{required:"this field is required"})}
        className="border rounded w-full p-2 text-gray-700 font-normal">
            <option className="text-sm font-bold">Select status type</option>
            
                {["Active","Inactive"].map((str)=>
                   (<option value={str}>{str}</option>)
                )}
        </select>
        {errors.status &&(
            <span>{errors.status.message}</span>
        )}
            
        
      </label>


    </div>
    <span className="flex justify-end ">

            
            <button type="submit"  className=" bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:isLoading disabled:bg-gray-500">{ "Save"}</button>
            
            </span>

    </form>

  )
  // <ManageStationForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddStation;