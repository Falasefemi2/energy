import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import bulb from "../assets/bluebulb.png"

export default function FAQSection() {
    const faqs = [
        {
            question: "What is Harlivia all about?",
            answer:
                "Harlivia is a multi-industry enterprise committed to excellence across Food Production, Real Estate, Energy, and Logistics. We create solutions that improve everyday life - whether it's through quality food, great homes, sustainable energy, or seamless cargo & logistics services.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "We specialize in developing innovative solutions across multiple sectors, focusing on sustainability and quality in everything we do. Our integrated approach allows us to create comprehensive solutions that address modern challenges.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "Our mission is to enhance daily living through thoughtful innovation and sustainable practices. We believe in creating lasting value for our customers and communities across all our business sectors.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "As a forward-thinking company, we invest in cutting-edge technologies and sustainable practices to ensure we deliver the best possible solutions in food production, real estate development, energy solutions, and logistics services.",
        },
        {
            question: "What is Harlivia all about?",
            answer:
                "We're committed to building a better future through our diverse portfolio of services and solutions. Our integrated approach allows us to create synergies across industries while maintaining the highest standards of quality and sustainability.",
        },
    ]

    return (
        <div className="w-full bg-[#F7F7F7] dark:bg-gray-950 px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm dark:shadow-gray-800/50 overflow-hidden">
                    <div className="grid lg:grid-cols-2 items-start">
                        {/* FAQ Section */}
                        <div className="p-8 space-y-6">
                            <h2 className="text-primary dark:text-blue-400 text-sm font-medium">• Frequently asked questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left text-[#000000] dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-[#767676] dark:text-gray-300 font-light">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Image Section */}
                        <div className="relative aspect-square lg:aspect-auto lg:h-full order-first lg:order-last bg-[#000000] dark:bg-gray-800 overflow-hidden">
                            <img
                                src={bulb || "/placeholder.svg"}
                                alt="Blue light bulb illustration"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

