'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function nav() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hidden, setHidden] = useState(false);
    let lastScrollTop = 0;

    // Hàm để theo dõi sự kiện cuộn
    const handleScroll = () => {
        const currentScroll =
            window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    // Hook useEffect để gắn sự kiện scroll khi component mount
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div
                className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-[16px] max-lg:py-[8px] max-lg:backdrop-blur-md lg:px-[70px] lg:pt-[40px] transition-transform ${
                    hidden ? 'transform -translate-y-full' : ''
                }`}
            >
                <a
                    href="#"
                    className="flex cursor-pointer items-center gap-[10px] text-[14px] font-bold lg:gap-[15px]"
                >
                    <Image
                        className="rounded-lg max-lg:w-[48px] size-12 lg:size-20"
                        src="assets/logo1.webp"
                        alt="hehe"
                    />
                    <h1 className="font-comix text-[11px] font-[400] uppercase text-white lg:text-[17px]">
                        Shin404
                    </h1>
                </a>

                <div className="lg:hidden">
                    <Image
                        src="assets/align-text-justify-svgrepo-com.svg"
                        alt="image"
                        className="size-10"
                    />
                </div>

                <div className="flex items-center gap-[26px] rounded-full border  p-[13px] border-custom bg-gradient-custom2 max-lg:hidden">
                    <a
                        href="#"
                        className="text-[#FCFCFD] bg-gradient-custom shadow-custom-inset rounded-full px-[26px] py-[13px] text-[20px] font-[400] transition-all hover:text-[#FCFCFD] active:translate-y-1"
                    >
                        Trang chủ
                    </a>
                    <a
                        href="#explore"
                        className="rounded-full px-[26px] py-[13px] text-[20px] font-[400] transition-all"
                    >
                        Khám phá
                    </a>
                    <a
                        href="#community"
                        className="rounded-full px-[26px] py-[13px] text-[20px] font-[400] transition-all"
                    >
                        Cộng đồng
                    </a>
                    <a
                        href="#footer"
                        className="rounded-full px-[26px] py-[13px] text-[20px] font-[400] transition-all"
                    >
                        Liên hệ
                    </a>
                </div>
            </div>
        </>
    );
}

export default nav;
