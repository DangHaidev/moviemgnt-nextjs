import Ourbtn from './ourbtn';
import Image from 'next/image';
const explore = () => {
    return (
        <>
            <div
                id="explore"
                className="bg-[url(/assets/bg.webp)] bg-no-repeat bg-center bg-cover"
            >
                <div className="p-10 lg:p-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl">
                                Trải nghiệm đa dạng các thể loại về Shin-chan
                            </h1>
                        </div>
                        <div className="text-center mt-4 mb-6 text-2xl text-gray-400">
                            <h3>
                                Khám phá các thể loại phong phú, từ Ngoại
                                truyện, Kinh Dị đến các khoảng khắc đời thường
                                ấm áp, phù hợp với mọi lứa tuổi, sở thích, và dù
                                là bất cứ ở đâu
                            </h3>
                        </div>
                    </div>

                    <Ourbtn />
                    <div className="flex justify-center relative">
                        <div className="relative mt-[3rem] max-lg:max-w-9/10 max-sm:w-full">
                            {/* Image background */}
                            <img
                                alt="video"
                                className="relative z-10"
                                src="/assets/video-bg.webp"
                                style={{ color: 'transparent' }}
                            />

                            {/* Video container */}
                            <div className="absolute inset-0 overflow-hidden max-lg:m-[2rem] max-lg:rounded-[3rem] max-sm:m-[1.25rem] max-sm:rounded-[1.9rem] lg:m-[4rem] lg:rounded-[6rem]">
                                <div className="relative max-lg:h-full">
                                    <iframe
                                        className="w-full scale-[1.2] max-lg:h-full lg:h-[600px] lg:w-[965px]"
                                        src="https://www.youtube-nocookie.com/embed/UgGdwbzvDZY?si=W8MPgCr3S7kwGkUM&autoplay=1&mute=1&loop=1&playlist=UgGdwbzvDZY"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="absolute size-50 top-1 -left-15 max-lg:hidden">
                            <img src="/assets/one.webp" alt="" />
                        </div>
                        <div className="absolute size-50 top-1 -right-15 max-lg:hidden">
                            <img src="/assets/two.webp" alt="" />
                        </div>
                        <div className="absolute size-50 bottom-1 -left-15 max-lg:hidden">
                            <img src="/assets/three.webp" alt="" />
                        </div>
                        <div className="absolute size-50 bottom-1 -right-15 max-lg:hidden">
                            <img src="/assets/four.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default explore;
