import Background from "../components/Background";

function Home() {
  return (
    <div className="bg-[#121212] overflow-hidden">
      <div>
        <Background />
      </div>
      <div className="flex justify-center items-center">
        <div className="h-24 w-11/12 mt-3 ml-9 mr-9 bg-[#D9D9D9]/50 rounded-full"></div>
      </div>
    </div>
  );
}

export default Home;
