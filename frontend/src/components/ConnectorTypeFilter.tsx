// type Props = {
//     selectedConnector: string[];
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   };
  
//   const ConnectorTypeFilter = ({ selectedConnector, onChange }: Props) => {
//     return (
//       <div className="border-b border-slate-300 pb-5">
//         <h4 className="text-md font-semibold mb-2">Property Rating</h4>
//         {["Type1","Type2","CCS","CHAdeMO"].map((connector) => (
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               className="rounded"
//               value={connector}
//               checked={selectedConnector.includes(connector)}
//               onChange={onChange}
//             />
//             <span>{connector} Stations</span>
//           </label>
//         ))}
//       </div>
//     );
//   };
  
//   export default ConnectorTypeFilter;