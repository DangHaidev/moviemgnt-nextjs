import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const footer = () => {
    return (
        <>
            <div id="footer" className="p-10 md:p-20">
                <div className="flex-col flex gap-10 sm:gap-15 lg:flex-row lg:gap-32 ">
                    <div className="flex flex-col">
                        <div>
                            <Link className="flex items-center" href={'/'}>
                                <Image
                                    src="/assets/logo1.webp"
                                    className="size-20"
                                    alt="logo"
                                    width={76}
                                    height={76}
                                />
                                <h1 className="font-comix text-[12px] font-[400] uppercase text-white lg:text-[21px]">
                                    Shin404
                                </h1>
                            </Link>
                        </div>
                        <div className="flex flex-wrap min-w-2xs max-w-2xl text-2xl gap-5 mt-10">
                            <a href="#">Trang chủ</a>
                            <a href="#">Thu nhập</a>
                            <a href="#">Sự kiện</a>
                            <a href="#">Khu chợ</a>
                            <a href="#">Donate</a>
                            <a href="#">Liên hệ hợp tác</a>
                            <a href="#">Premium</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-gray-400">Email</p>
                            <h2 className="text-2xl">hotro@shin404.com</h2>
                        </div>
                        <div>
                            <p className="text-gray-400">Địa chỉ</p>
                            <h2 className="text-2xl">Hà Nội, VN</h2>
                        </div>
                        <div>
                            <p className="text-gray-400">
                                Điều khoản & bảo mật
                            </p>
                            <h2 className="text-2xl">
                                <a href="">Xem tại đây</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default footer;
