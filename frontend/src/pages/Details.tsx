import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { Button } from "@/components/ui/button";


const Detail = () => {
  const { stationId } = useParams();

  const { data: station } = useQuery(
    "fetchStationById",
    () => apiClient.fetchStationById(stationId || ""),
    {
      enabled: !!stationId,
    }
  );

  if (!station) {
    return <></>;
  }

  return (
    <>
    <div className="p-6">
      <div className="text-4xl my-8">Here are the details of your spot</div>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-gray-700 dark:bg-slate-950/90">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Station Details</p>
            
          </div>
          <Link to="/booking" className="inline-flex">
            <Button variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">
              Book your slot
            </Button>
          </Link>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-800">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-slate-50 text-left dark:bg-slate-900">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Field</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-slate-950">
              <tr>
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">Station Name</td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{station.name}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">Status</td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{station.status}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">Connector Type</td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{station.connectorType}</td>
              </tr>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">Latitude</td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{station.location.latitude}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">Longitude</td>
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-white">{station.location.longitude}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center">
            <p className="text-3xl mb-2">🔋</p>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fast Charging</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Get your EV fully charged in hours</p>
          </div>
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center">
            <p className="text-3xl mb-2">💳</p>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flexible Pricing</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Pay only for the time you use</p>
          </div>
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 text-center">
            <p className="text-3xl mb-2">📍</p>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Easy Booking</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Reserve your slot in seconds</p>
          </div>
        </div>
        </div>
    </>
  );
};

export default Detail;