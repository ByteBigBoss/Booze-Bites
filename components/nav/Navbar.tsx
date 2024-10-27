"use client"
import React, { useEffect, useState } from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { Button } from '@nextui-org/react'
import ThemeSwitch from '../theme/theme-switch'
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Site } from '@/config/site'
import { cn } from '@/lib/utils'
import { quando } from '@/lib/fonts'

const Navbar = () => {

    const [currentPath, setCurrentPath] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const path = usePathname();

    const [opened, { toggle, close }] = useDisclosure();


    useEffect(() => {

        const changeCurrentPath = () => {
            if (path === "/") {
                setCurrentPath("home");
            } else if (path.endsWith("about")) {
                setCurrentPath("about");
            }
        }

        changeCurrentPath();


    }, [path]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > scrollPosition) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setScrollPosition(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);



    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, type: "spring" }}

            className="w-full fixed top-0 pt-[30px] z-[100]"

        >
            <Drawer.Root offset={8} radius="md" opened={opened} onClose={close}  >
                <Drawer.Overlay />
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title className='font-bold uppercase'>{Site.siteName}</Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body>


                        <div
                            className={`px-[4px] flex flex-col items-center  text-[14px] h-auto mt-6 gap-4 w-full`}>
                            {/* HOME */}

                        </div>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
            <WrapperBody>
                <nav className='flex items-center justify-between w-full relative '>

                    {/* LEFT */}
                    <div className='z-[50] flex gap-[50px]'>
                        <Link href={'/'} className='font-bold uppercase'>{Site.siteName}</Link>

                        <div className={cn(
                            'flex items-center gap-[50px] text-[20px]',
                            quando.className
                        )}>
                            <div>
                                <Link className='text-chillPaper' href={''}>Home</Link>
                            </div>

                            <div>
                                <Link className='text-chillPaper' href={''}>Menu</Link>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className='flex items-center gap-6 z-[50] mobile:hidden mid:hidden mid:w-0 mid:h-0 mobile:w-0 mobile:h-0'>

                    </div>

                    {/* MENUBAR */}
                    <div className='hidden mobile:flex mid:flex'>
                        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />

                    </div>

                </nav>

            </WrapperBody>
        </motion.header>
    )
}

export default Navbar
