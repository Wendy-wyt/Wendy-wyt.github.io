import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="w-full flex justify-center py-5">
            <div className="w-10/12 flex flex-col md:flex-row justify-between text-nowrap">
                <p>Design By @Yuting Wu 2024/04</p>
                <div className="flex flex-row space-x-3">
                    <Link className="cursor-pointer" to="https://github.com/Wendy-wyt"><div className="h-7 md:h-5 aspect-square bg-github_light bg-cover"></div></Link>
                    <Link className="cursor-pointer" to="https://www.linkedin.com/in/yuting-wu-0101/"><div className="h-7 md:h-5 aspect-square bg-linkedin_light bg-cover"></div></Link>
                    <Link to="mailto:wytapplication@gmail.com"><div className="h-7 md:h-5 aspect-square bg-email_light bg-cover"></div></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer