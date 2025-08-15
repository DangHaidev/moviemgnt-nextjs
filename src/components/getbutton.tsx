import { Button } from 'antd';

const getbutton = () => {
    return (
        <>
            <div className="flex justify-center gap-5">
                <div className="">
                    <Button
                        className="custom-btn lg:h-[72px] lg:w-[100px]"
                        type="default"
                    >
                        <h2 className="lg:text-[24px] font-semibold text-amber-50">
                            Khám phá ngay
                        </h2>
                    </Button>
                </div>
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
            </div>
        </>
    );
};

export default getbutton;
