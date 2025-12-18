
# Choose yours nearest charging station

evsoft.com https://charging-stations-l4pv.onrender.com/



⚡ Electrical Vehicle Software (evsoft.com)

A full-stack web application that helps electric vehicle users locate nearby charging stations. Built with the MERN stack – MongoDB, Express, React, and Node.js – and integrates real-time geolocation and Google Maps for a seamless user experience.

🚀 Features
🔍 Search Charging Stations Near You using your device's location.

📍 Google Maps Integration for easy visualization of station locations.

🗃️ MongoDB Database to store station data with location, connector types, availability, and power output.

👤 User Authentication using JWT and protected routes.

➕ Add New Stations via a form (admin or authorized users).

🧭 Filter stations by distance, connector type, and charging speed.

🖼️ Responsive and clean UI built with React and Tailwind CSS (or your choice of styling).



| Tech                    | Description                             |
| ----------------------- | --------------------------------------- |
| MongoDB                 | NoSQL database for storing station data |
| Express.js              | Backend server and REST API             |
| React.js                | Frontend SPA                            |
| Node.js                 | Runtime environment                     |
| Google Maps API         | Map rendering and geolocation features  |
| Mongoose                | MongoDB ODM for schema definitions      |
| JWT                     | Secure authentication mechanism         |
| Tailwind CSS            | Modern utility-first CSS                |



Project Structure

/frontend           => React frontend
  /components     => Reusable UI components
  /pages          => Pages like Home, AddStation, Login,Resgister,Details
  /api-client            => api calls
  .env              => API keys and environment variables for frontend
/baceken           => Express backend
  /routes         => API routes for stations, auth
  /models         => Mongoose models (e.g., Station.models.ts, User.models.ts)
  /middlewares    => Authentication
  /shared         => types 
.env              => API keys and environment variables for backend








