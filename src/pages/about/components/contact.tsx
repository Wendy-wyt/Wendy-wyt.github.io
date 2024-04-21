import { Link } from "react-router-dom"


const Contact = () => {
    return (
        <div className="w-full h-content flex items-center justify-center mt-10 mb-16">
            <div className="w-[800px] h-[180px] bg-google_map bg-center bg-no-repeat bg-cover rounded-lg relative">
                <div className="h-[180px] bg-contact rounded-lg absolute top-10 inset-x-10 px-10">
                    <div className="flex flex-row h-full w-full items-center space-x-40 justify-center">
                        <div className="h-[140px] w-[140px] rounded-full bg-avatar bg-center bg-cover"></div>
                        <div className="w-fit text-nowrap flex flex-col space-y-3">
                            <p>Yuting Wu</p>
                            <p>Pittsburgh, PA</p>
                            <p>wytapplication@gmail.com</p>
                            <div className="flex flex-row space-x-3 py-2">
                                <Link className="cursor-pointer" to="https://github.com/Wendy-wyt"><div className="h-5 aspect-square bg-github_dark bg-cover"></div></Link>
                                <Link className="cursor-pointer" to="https://www.linkedin.com/in/yuting-wu-0101/"><div className="h-5 aspect-square bg-linkedin_dark bg-cover"></div></Link>
                                <div className="h-5 aspect-square bg-email_dark bg-cover"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact