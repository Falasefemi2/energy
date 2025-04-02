import group1 from "../assets/Group (1).png"
import money from "../assets/Money Bag Icon (1) 1.png"
import oilicon from "../assets/Oil Well Icon 1.png"
import oilttruck from "../assets/Oil Truck Icon 1.png"

export default function SolarEnergySection() {
    return (
        <div className="mx-auto px-4 py-12 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="max-w-xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4">Solar Energy</h1>
                    <p className="text-[#767676] dark:text-gray-300 leading-relaxed">
                        We bring solar energy straight to your doorstep; surveyed, supplied, and installed by us. No third-party
                        stress, no overpromises—just a system that works.
                    </p>
                </div>
                <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
                    <img
                        src={group1}
                        alt="Solar Panel Icon"
                        width={273}
                        height={259.34}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="relative p-6 bg-[#E2E2E240] dark:bg-gray-800/50 rounded-lg border border-[#F5F5F5] dark:border-gray-700 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20">
                    <div className="text-6xl font-light text-[#D1D1D1] dark:text-gray-700 absolute top-4 right-4">01</div>
                    <div className="mb-4">
                        <img src={money} alt="" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Solar Panel Supply</h3>
                    <p className="text-[#767676] dark:text-gray-300">We source high-quality, long-lasting solar panels for homes and businesses.</p>
                </div>

                {/* Service 2 */}
                <div className="relative p-6 bg-[#E2E2E240] dark:bg-gray-800/50 rounded-lg border border-[#F5F5F5] dark:border-gray-700 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20">
                    <div className="text-6xl font-light text-[#D1D1D1] dark:text-gray-700 absolute top-4 right-4">02</div>
                    <div className="text-blue-600 dark:text-blue-400 mb-4">
                        <img src={oilicon} alt="" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Installation & Setup</h3>
                    <p className="text-[#767676] dark:text-gray-300">
                        Our team doesn't just sell panels, we install and optimize them for maximum efficiency.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="relative p-6 bg-[#E2E2E240] dark:bg-gray-800/50 rounded-lg border border-[#F5F5F5] dark:border-gray-700 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20">
                    <div className="text-6xl font-light text-[#D1D1D1] dark:text-gray-700 absolute top-4 right-4">03</div>
                    <div className="mb-4">
                        <img src={oilttruck} alt="" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Battery & Inverter Systems</h3>
                    <p className="text-[#767676] dark:text-gray-300">
                        We'll provide you with the right storage and conversion for round-the-clock electricity.
                    </p>
                </div>
            </div>
        </div>
    )
}

