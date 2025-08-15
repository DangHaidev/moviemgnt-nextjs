import Highlightbox from './Highlightbox';

const about = () => {
    return (
        <>
            <div className="px-6 py-10 md:p-15 flex flex-col bg-[url(/assets/about.webp)]">
                <div className="text-center">
                    <p className="font-bold text-2xl">Về chúng mình</p>
                    <h1 className="my-4 text-4xl">
                        Đội ngũ đam mê dịch phim - Shin404
                    </h1>
                    <p className="text-2xl text-gray-400">
                        Luôn nổ lực để mang đến món ăn tinh thần đặc sắc nhất
                        cho khán giả trung thành
                    </p>
                </div>
                <div className="lg:flex max-md:flex max-md:flex-col max-lg:grid max-lg:grid-cols-2 gap-10 md:my-20 pt-20 text-center">
                    <Highlightbox
                        title={'Tâm huyết'}
                        content={
                            'Chúng mình luôn trao chuốt từng câu chữ trong mỗi bản dịch.'
                        }
                    />
                    <Highlightbox
                        title={'Kinh nghiệm'}
                        content={
                            'Chúng mình am hiểu tiếng Nhật để dịch hay và sát nghĩa.'
                        }
                    />

                    <Highlightbox
                        title={'Sáng tạo'}
                        content={
                            'Không ngừng đổi mới để đem đến những trải nghiệm độc đáo.'
                        }
                    />
                    <Highlightbox
                        title={'Đam mê'}
                        content={
                            'Dịch phim và kết nối cộng đồng là niềm vui của bọn mình.'
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default about;
