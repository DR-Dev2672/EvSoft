
import { useFormContext } from 'react-hook-form';
import type { StationFormData } from './ManageStationForm';

function Details() {

  const {
        register,
        formState: { errors },
      } = useFormContext<StationFormData>();
  return (
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
            {...register("location.latitude", { required: "This field is required" })}
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
            {...register("location.longitude", { required: "This field is required" })}
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
          {...register("powerOutput", { required: "This field is required" })}
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
            
                {["Type1", "Type2", "CCS", "CHAdeMO"].map((str)=>
                   (<option value={str}>{str}</option>)
                )}
        </select>
        {errors.status &&(
            <span>{errors.status.message}</span>
        )}
            
        
      </label>


    </div>
  
  )
}

export default Details