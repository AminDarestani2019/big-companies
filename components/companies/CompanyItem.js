import { useRouter } from "next/router";
import Card from "../ui/Card";

export default function CompanyItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li 
    onClick={showDetailsHandler}
    className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer h-[500px] flex flex-col">
    <Card className="flex flex-col flex-grow p-4">
        {/* تصویر ثابت */}
        <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
        <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
        />
        </div>

        {/* بدنه‌ی اصلی کارت با رشد‌دهی */}
        <div className="text-center px-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">{props.title}</h3>
            <address className="not-italic text-gray-500 mb-4 whitespace-pre-wrap line-clamp-4">{props.address}</address>
        </div>

        <div className="mt-auto text-center px-4">
            <button onClick={showDetailsHandler}
            className="mx-auto inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-8 rounded-full shadow-lg hover:from-pink-600 hover:to-red-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
            Show Details
            </button>
        </div>
    </Card>
    </li>


  );
}

