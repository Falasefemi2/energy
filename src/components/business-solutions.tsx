import { Check } from "lucide-react"
import home from "../assets/Rectangle.png"
import home2 from "../assets/home2.png"
import man from "../assets/Rectangle (2).png"
import hands from "../assets/hands.png"

export default function BusinessSolutions() {
    return (
        <div className="bg-[#F7F7F7] dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-400">Why should you trust us?</span>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 text-lg max-w-2xl mx-auto">
                        At the end of the day, it's not just about energy—it's about keeping life and business moving, without
                        unnecessary stress.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-[#F5F5F5] dark:border-gray-800 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-800/30 transition-shadow duration-200">
                        <div className="mb-4">
                            <img src={home} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#000000] dark:text-white mb-2">End-to-end Solutions</h3>
                        <p className="text-[#767676] dark:text-gray-300 text-sm">
                            From power and petroleum to renewable energy, we bring all your energy needs together under one roof.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-[#F5F5F5] dark:border-gray-800 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-800/30 transition-shadow duration-200">
                        <div className="mb-4">
                            <img src={home2} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#000000] dark:text-white mb-2">Reliable Supply Chain</h3>
                        <p className="text-[#767676] dark:text-gray-300 text-sm">We keep things running smoothly, so you don't have to worry about shortages.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-[#F5F5F5] dark:border-gray-800 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-800/30 transition-shadow duration-200">
                        <div className="mb-4">
                            <img src={man} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#000000] dark:text-white mb-2">Scalable Options</h3>
                        <p className="text-[#767676] dark:text-gray-300 text-sm">
                            Do you need metering solutions for your home, a fueling solution for your business, or funding for an oil
                            and gas project, we have you covered.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-[#F5F5F5] dark:border-gray-800 shadow-[0_4px_20px_0_#E2E2E240] dark:shadow-gray-900/20 hover:shadow-lg dark:hover:shadow-gray-800/30 transition-shadow duration-200">
                        <div className="mb-4">
                            <img src={hands} alt="" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#000000] dark:text-white mb-2">Expert Financing</h3>
                        <p className="text-[#767676] dark:text-gray-300 text-sm">
                            Providing businesses with the support they need to secure capital in a demanding, capital-intensive
                            industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

