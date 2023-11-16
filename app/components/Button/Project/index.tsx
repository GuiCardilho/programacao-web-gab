import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProjetcButton = () => {
    return (
        <div className="mx-auto xl:mx-0">
            <Link
                href="/portfolio"
                className="relative w-[155px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group p-2"
            >
                <Image
                    src={"/my-projects.png"}
                    alt="Meus projetos Imagem"
                    width={131}
                    height={138}
                    className="animate-spin-slow cursor-pointer	w-full h-full max-w-[141px] max-h-[148px]"
                />
                <ArrowRightCircle className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
            </Link>
        </div>
    );
};
