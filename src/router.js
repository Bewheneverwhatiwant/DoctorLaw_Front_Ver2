import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import MileageShop from "./pages/MileageShop/MileageShop";
import MileageCharge from "./pages/MileageCharge/MileageCharge";
import AnalyzeStart from "./pages/AnalyzeStart/AnalyzeStart";

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/mileageshop",
                element: <MileageShop />
            },
            {
                path: '/mileagecharge',
                element: <MileageCharge />
            },
            {
                path: "/analyzestart",
                element: <AnalyzeStart />
            }
        ]
    }
]);