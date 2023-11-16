"use client";

import { AnimatePresence } from "framer-motion";
import { Transition } from "./components/Transition";
import { ProjetcButton } from "./components/Button/Project";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/framer";
import { Avatar } from "./components/Avatar";
import { ParticlesContainer } from "./components/Particles";

export default function Home() {
    return (
        <AnimatePresence mode="wait">
            <Transition>
                <main className="bg-primary/60 h-full w-full">
                    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto z-20">
                            <motion.h1
                                variants={fadeIn("down", 0.2)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="h1 z-20"
                            >
                                Transformando Habilidade e
                                <br /> Complexidade{" "}
                                <span className="text-accent">
                                    em Conectividade.
                                </span>{" "}
                            </motion.h1>

                            <motion.p
                                variants={fadeIn("down", 0.3)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16  z-20"
                            >
                                Em um mundo de redes intrincadas e dados
                                volumosos, a maestria em transformar desafios
                                complexos em soluções conectadas não é apenas
                                uma habilidade, mas uma arte. Neste cenário,
                                cada decisão importa, cada configuração faz a
                                diferença, moldando um futuro digital mais coeso
                                e integrado.
                            </motion.p>

                            <div className="flex justify-center xl:hidden relative">
                                <ProjetcButton />
                            </div>
                            <motion.div
                                variants={fadeIn("down", 0.4)}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="hidden xl:flex"
                            >
                                <ProjetcButton />
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-screen h-full absolute right-0 bottom-0">
                        <div className="bg-none xl:bg-explosion xl:bg-corver xl:bg-right xl:bg-no-repeat w-screen h-full absolute mix-blend-color-dodge -z-10 translate-z-0 " />

                        <ParticlesContainer />

                        <motion.div
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="w-full h-full bottom-30 max-w-[737px] max-h-[678px] absolute -bottom-20 right-10 lg:bottom-0 lg:right-[8%]"
                        >
                            <Avatar />
                        </motion.div>
                    </div>
                </main>
            </Transition>
        </AnimatePresence>
    );
}
