import Weather from "./components/weather/Weather";

const App = () => {
  return (
    <div className="text-center my-12.5 mr-auto ml-auto w-[90%] max-w-[700px] border-0 h-[470px] rounded-2xl px-5 py-[15px] bg-linear-to-l from bg-emerald-400 to-blue-500">
      <Weather />
    </div>
  );
};

export default App;
