import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div className="grow flex flex-col justify-center items-center space-y-5">
            <Link to="https://drive.google.com/file/d/1k59_pFCDccwIL1Cwt1cMy8hQ6kJwUUIu/view?usp=sharing"><div className="bg-file bg-contain bg-center bg-no-repeat h-20 md:h-60 lg:h-64 aspect-square cursor-pointer m-5"></div>
            </Link>
            <Link to="https://drive.google.com/file/d/1k59_pFCDccwIL1Cwt1cMy8hQ6kJwUUIu/view?usp=sharing">
                <div className="bg-intro_border h-fit cursor-pointer p-3 md:p-5 rounded-full font-semibold md:font-bold tracking-normal md:tracking-wide text-base md:text-lg hover:shadow hover:shadow-white">CHECK OUT MY CV!</div>
            </Link>
        </div>
    )
}
