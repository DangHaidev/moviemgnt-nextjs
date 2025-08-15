import Ourbtn from './ourbtn';
import Image from 'next/image';

const comunity = () => {
    return (
        <>
            <div id="community">
                <div className="flex justify-content justify-center max-lg:flex-col m-8 md:m-20 border-2 rounded-4xl">
                    <div className="flex flex-col items-center justify-center lg:w-1/2 p-5 md:p-10">
                        <h1 className="text-center">
                            Tham gia cộng đồng nghiện Shin-chan tại đây!!
                        </h1>
                        <h3 className="text-center mt-4 mb-6 text-2xl text-gray-400">
                            Với hơn 25k thành viên và đa dạng nội dung về
                            Shin-chan, cùng chúng mình nhập hội nhé
                        </h3>
                        <Ourbtn />
                    </div>
                    <div className="overflow-hidden lg:w-1/2 object-center object-cover rounded-b-4xl lg:rounded-tr-4xl">
                        <Image src="/assets/fami.webp" alt="family" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default comunity;
