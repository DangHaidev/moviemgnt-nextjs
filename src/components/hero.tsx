import { Button } from 'antd';
import Image from 'next/image';

const nav = () => {
    return (
        <div>
            <div className="overflow-hidden bg-gray-900 py-36 sm:py-32 bg-[url(/assets/bg12.webp)]">
                <div className="mx-auto max-w-full py-30 px-6 lg:px-8">
                    <div className="mx-auto sm:pl-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 relative">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="p-5 lg:max-w-2xl max-lg:items-center">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    Nền tảng cộng đồng dành cho fan của
                                    Shin-chan
                                </h1>
                                <p className="mt-8 text-2xl text-gray-400">
                                    Nơi bạn có thể giải trí kết nối và giao lưu
                                    với những người có cùng đam mê!!!
                                </p>
                                <a href={'/home'}>
                                    <div className="lg:mr-40">
                                        {' '}
                                        <Button
                                            type="default"
                                            className="custom-btn mt-[20px] max-lg:h-[44px] max-lg:px-[24px] lg:my-25 lg:h-[72px] lg:w-[397px]"
                                        >
                                            <h2 className="lg:text-[24px] font-bold text-amber-50">
                                                Tham gia ngay
                                            </h2>
                                        </Button>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="relative -right-20 top-20">
                            <Image
                                src="assets/pc.webp"
                                alt="Product screenshot"
                                className="rounded-lg max-lg:w-[700px] max-sm:w-[600px] lg:rounded-3xl pl-5 scale-110"
                            />
                            <Image
                                src="assets/mobile.webp"
                                alt=""
                                className="rounded-lg max-lg:w-[140px] max-sm:w-[100px] max-sm:-bottom-10 max-sm:-left-20  lg:rounded-3xl -bottom-15 -left-33 absolute w-55"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nav;
