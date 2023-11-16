"use client";

import clsx from "clsx";
import { Home, User, Folder, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const links = [
        {
            href: "/",
            label: "Home",
            icon: <Home />,
        },
        {
            href: "/curriculo",
            label: "Currículo",
            icon: <User />,
        },
        {
            href: "/portfolio",
            label: "Portfólio",
            icon: <Folder />,
        },
        {
            href: "/contact",
            label: "Contato",
            icon: <Mail />,
        },
    ];

    useEffect(() => {
        if (!mounted) setMounted(true);
    }, []);

    if (!mounted) return <></>;
    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
            <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-8 h-[80px]  xl:h-max py-8 bg-white/10 backdrop-bluer-sm text-3xl xl:text-xl xl:rounded-full ">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                        className={clsx(
                            "relative flex items-center group hover:text-accent transition-colors duration-300",
                            {
                                "text-accent": pathname == link.href,
                            }
                        )}
                    >
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] leading-none font-semibold capitalize">
                                <div className="text-[12px]">{link.label}</div>
                                <div className=" border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 -z-10"></div>
                            </div>
                        </div>

                        {link.icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
