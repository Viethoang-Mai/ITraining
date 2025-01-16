export const metadata = {
    title: "Giới thiệu | Mind-map Flow ",
    description: "Học tập hiệu quả với bản đồ tư duy",
};
import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="">
            <div className=" mx-auto px-10 py-10">
                <div className="row-up flex gap-x-8 items-center sm:flex-col sm:gap-y-10 sm:w-full">
                    <div className="w-full xl:w-5/12 sm:w-full">
                        <h1 className="text-[40px] font-bold mb-5">About Us</h1>
                        <p className="text-lg">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum.In the first place we have granted to God, and
                            by this our present charter confirmed for us and our
                            heirs forever that the English Church shall be free,
                            and shall have her rights entire, and her liberties
                            inviolate; and we will that it be thus observed;
                            which is apparent from
                        </p>
                    </div>
                    <Image
                        src={"../../../assets/images/AboutUs.png"}
                        alt="Mind map"
                        width={668}
                        className="w-full xl:w-8/12 lg:w-7/12 h-auto block sm:w-full"
                    />
                </div>
                <div className="row-down flex gap-x-8 mt-20 justify-between items-center sm:flex-col sm:gap-y-10 ">
                    <div className="w-full xl:w-5/12 sm:w-full">
                        <h2 className="text-[40px] font-bold mb-5">
                            Our Story
                        </h2>
                        <p className="text-lg">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum.In the first place we have granted to God, and
                            by this our present charter confirmed for us and our
                            heirs forever that the English Church shall be free,
                            and shall have her rights entire, and her liberties
                            inviolate; and we will that it be thus observed;
                            which is apparent from
                        </p>
                    </div>
                    <div className="w-full  xl:w-8/12 grid grid-cols-4 md:grid-cols-2 gap-4 shadow-lg rounded-md pb-5 px-5 sm:w-full sm:justify-items-center ">
                        <Image
                            src={"../../../assets/images/avtUser1.png"}
                            alt="Mind map"
                            className="w-auto h-auto  "
                        />
                        <Image
                            src={"../../../assets/images/avtUser2.png"}
                            alt="Mind map"
                            className="w-auto h-auto"
                        />
                        <Image
                            src={"../../../assets/images/avtUser3.png"}
                            alt="Mind map"
                            className="w-auto h-auto"
                        />
                        <Image
                            src={"../../../assets/images/avtUser4.png"}
                            alt="Mind map"
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
