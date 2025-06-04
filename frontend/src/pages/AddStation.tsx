import { useMutation } from "react-query";

import * as apiClient from "../api-client";
import ManageStationForm from "../forms/ManageStationForm";

const AddStation = () => {
  
  const { mutate, isLoading } = useMutation(apiClient.addMyStation);

  const handleSave = (stationFormData: FormData) => {
    mutate(stationFormData);
  };

  return <ManageStationForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddStation;