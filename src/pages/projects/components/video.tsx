interface VideoProps {
    url: string
    handleClose: () => void
}

export default function Video({ url, handleClose }: VideoProps) {
    return (
        <div className="z-[50] h-screen w-screen relative bg-black">
            <div className="absolute z-[51] bg-cancel_light m-2 bg-cover bg-center h-10 md:h-16 aspect-square"
                onClick={handleClose}>
            </div>
            <video
                src={url}
                autoPlay
                controls
                className="w-full h-full" />
        </div>
    )
}
