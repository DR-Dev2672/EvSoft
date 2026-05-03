const Hero = () => {
    return (
      <div className="bg-gray-800 text-white pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-blue-200 sm:text-5xl lg:text-6xl">
            Branded, White-Label EV Charging Software
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white sm:text-xl">
            Empower your business with our white-label, OCPP-compliant EV charging software. Seamlessly integrate any OCPP 1.6J or OCPP 2.0.1 charger, customize your platform, and manage operations with real-time analytics and dynamic load balancing.
          </p>
        </div>
      </div>
    );
  };
  
  export default Hero;