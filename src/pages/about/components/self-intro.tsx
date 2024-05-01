
function Intro() {
    return (
        <div className="w-full flex place-content-center my-12">
            <div className="w-10/12 md:w-8/12 flex flex-col place-content-center items-center space-y-12">
                <div className="rounded-full w-60 h-60 bg-intro_border p-2">
                    <div className="rounded-full w-full h-full bg-intro bg-[length:140%] bg-[center_right]">

                    </div>
                </div>
                <p className="font-semibold md:tracking-widest font-mono text-lg md:text-xl leading-relaxed">
                    Passionate about Software Engineering, I obtained my Master’s degree in Information Systems Management from Carnegie Mellon University.
                    I continued to accumulate practical experience in web application development, service deployment, and site maintenance on cloud.
                </p>
            </div>
        </div>
    )
}

export default Intro