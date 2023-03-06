import { Spinner } from "phosphor-react";

const LoadingScreen = () => {
  return (
    <div className="absolute z-20 top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col items-center text-primary">
        <Spinner size={90} className="animate-spin" />
        <h3 className="animate-pulse">Carregando...</h3>
      </div>
    </div>
  );
};

export default LoadingScreen;
