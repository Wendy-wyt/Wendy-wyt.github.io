import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-5">
            <div className="bg-file bg-contain bg-center bg-no-repeat h-20 md:h-40 lg:h-64 aspect-square cursor-pointer"></div>
            <Link to=""><div className="bg-intro_border h-fit cursor-pointer p-5 rounded-full">CHECK OUT MY CV!</div></Link>
        </div>
    )
}
