import energy from "../assets/energy.png"

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            >
                <img src={energy} alt="Energy" className="w-full h-full object-cover object-center" />
                {/* Dark overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 text-center -translate-y-30">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-14">
                    <span className="block mb-2">Unstoppable Power That</span>
                    <span className="block">Drives You Forward</span>
                </h1>

                <p className="mt-6 text-base md:text-lg text-[#767676] max-w-2xl mx-auto">
                    Power is more than electricity. It’s the fuel that keeps businesses running, homes comfortable and happy, and industries thriving. At Harlivia Energy, we don’t just sell energy; we innovate solutions that work for you.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-[#335CFF] hover:bg-blue-700 text-white p-[10px] rounded-[10px] text-sm font-medium w-[110px] h-11">
                        Contact us
                    </button>
                    <a href="#" className="text-sm font-medium bg-[#F5F7FA] p-2.5 text-[#525866]">
                        Partner with us
                    </a>
                </div>
            </div>
        </section>
    )
}

