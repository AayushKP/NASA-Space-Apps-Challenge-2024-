import Background from "../components/Background";
import { IoHomeOutline } from "react-icons/io5";

function Analysis() {
  return (
    <div className="bg-[#121212] font-sans overflow-hidden">
      <div>
        <Background
          heroText={
            "Welcome to the Sundarban Community! Join us to organize, discuss, and address climate changes and gender inequality."
          }
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center justify-start">
          <div className="w-60 h-44 bg-[#D9D9D9]/50 rounded-r-xl flex justify-center items-center">
            <div className="h-40 w-52">
              <div className="h-1/3 w-10/12 flex justify-start gap-5 items-center ">
                <div className="w-8 h-8 rounded-full bg-white  flex items-center justify-center ">
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Community</div>
              </div>
              <div className="h-1/3 w-10/12 flex justify-start gap-5 items-center ">
                <div className="w-8 h-8 rounded-full bg-white  flex items-center justify-center ">
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Live Sessions</div>
              </div>
              <div className="h-1/3 w-10/12 flex justify-start gap-5 items-center ">
                <div className="w-8 h-8 rounded-full bg-white  flex items-center justify-center">
                  <IoHomeOutline />
                </div>
                <div className="text-xl">Policies</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-end mr-9  w-auto p-3 h-auto ">
          <div className="text-9xl font-semibold text-white">
            <span className="text-[#CDDC6E]">THE </span> Community
          </div>
        </div>
      </div>
    </div>
  );
}
export default Analysis;
