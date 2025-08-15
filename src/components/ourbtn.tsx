import { Button } from 'antd';
import Link from 'next/link';

const ourbtn = () => {
    return (
        <>
            <div className="flex justify-center gap-5">
                <Link href={'/home'}>
                    <div>
                        <Button
                            className="custom-btn lg:h-[72px] lg:w-[100px]"
                            type="default"
                        >
                            <h2 className="lg:text-[24px] font-semibold text-amber-50">
                                Khám phá ngay
                            </h2>
                        </Button>
                    </div>
                </Link>
                <Link
                    href={'https://web.facebook.com/shin404Official'}
                    target="_blank"
                >
                    {' '}
                    <div>
                        <Button
                            className="custom-second-btn lg:h-[72px] lg:w-[100px]"
                            type="default"
                        >
                            <h2 className="lg:text-[24px] font-semibold text-amber-50">
                                Tìm hiểu thêm
                            </h2>
                        </Button>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ourbtn;
