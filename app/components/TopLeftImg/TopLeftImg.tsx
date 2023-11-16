import Image from "next/image";

export const TopLeftImg = () => {
    return (
        <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
            <Image
                width={"400"}
                height={"400"}
                src="/top-left-img.png"
                alt="Foto de canto superior"
                priority
            />
        </div>
    );
};
