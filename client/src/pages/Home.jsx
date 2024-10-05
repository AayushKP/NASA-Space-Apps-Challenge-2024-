function Home() {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] relative">
      <div className="h-screen w-screen">
        <img
          src="src/assets/images/Hero.png"
          className="w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 z-10">
          <div className=" m-10 p-3 flex items-center h-20 border border-red-800">
            <div className=" h-16 w-32 ">
              <img
                src="src/assets/images/Logo.png"
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
