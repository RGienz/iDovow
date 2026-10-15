import Image4 from "../../reference/image/sageGreen4.png";
export default function Drawer() {
    return (
        <div>
            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-12 snap-start">
                <img
                    src={Image4}
                    alt="firstPage"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 animate-slow-zoom"
                    
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto text-[#2c2c2c] space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">

                    <p className="uppercase tracking-[0.25em] px-4 text-[10px] sm:text-xs md:text-sm">
                        Together with their Family
                    </p>

                    <div className="relative flex flex-col items-center text-center w-full px-4">
                        <h1 className="font-windsong leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                            Lorenzo
                        </h1>

                        <span className="font-windsong italic text-gray-500 my-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            &
                        </span>

                        <h1 className="font-windsong leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                            Carolyn
                        </h1>
                    </div>

                    <div className="uppercase tracking-[0.2em] leading-relaxed text-gray-600 text-[10px] sm:text-xs md:text-sm">
                        <p>Invite you to their</p>
                        <p className="mt-1 font-semibold text-gray-800">Wedding Celebration</p>
                    </div>

                    <div className="font-light tracking-[0.15em] text-gray-800 border-y border-gray-400/60 py-3 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[340px] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        XX <span className="text-gray-300 font-thin mx-1 sm:mx-2">|</span>
                        XX <span className="text-gray-300 font-thin mx-1 sm:mx-2">|</span>
                        XXXX
                    </div>

                    <div className="uppercase tracking-[0.2em] text-gray-600 space-y-6 w-full text-[10px] sm:text-xs md:text-sm">
                        <div>
                            <p className="text-gray-400 mb-1 text-[9px] sm:text-[10px] md:text-xs">
                                At
                            </p>
                            <p className="font-medium text-gray-800">
                                X:XX XX
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg">
                                Casa Hotel
                            </p>
                            <p className="text-gray-500 normal-case mt-1 max-w-md mx-auto text-[10px] sm:text-xs md:text-sm">
                                1548 Street, Los Angeles, CA
                            </p>
                        </div>
                    </div>

                    <p className="font-medium tracking-[0.2em] text-gray-500 uppercase text-xs sm:text-sm md:text-base">
                        Reception to Follow
                    </p>

                    <div className="opacity-40 text-stone-600 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-300">
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-full h-full"
                        >
                            <circle cx="26" cy="36" r="16" />
                            <circle cx="41" cy="31" r="14" />
                            <path d="M41 17 L44 11 L41 8 L38 11 Z" fill="none" />
                            <path d="M38 11 L44 11 M41 17 L41 8" />
                        </svg>
                    </div>

                    <div className="animate-bounce text-stone-400 tracking-widest uppercase opacity-70 text-[9px] sm:text-xs md:text-sm pt-4">
                        ↓ Scroll Down
                    </div>

                </div>
            </section>
        </div>
    )
}