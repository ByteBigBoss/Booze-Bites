"use client"
import React, { useEffect, useState } from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import { Burger, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Site } from '@/config/site'
import { cn } from '@/lib/utils'
import { passion, quando, racing } from '@/lib/fonts'
import { Button } from '@nextui-org/react'
import BoozeBites from '@/components/icon/BoozeBites'
import Cart from '../icon/Cart'

const Navbar = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentPath, setCurrentPath] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isHome, setHome] = useState(true);

    const path = usePathname();

    const [opened, { toggle, close }] = useDisclosure();


    useEffect(() => {

        const changeCurrentPath = () => {
            if (path === "/") {
                setCurrentPath("home");
            } else if (path.endsWith("Menu")) {
                setCurrentPath("Menu");
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
                <Drawer.Content className='bg-softCream'>
                    <Drawer.Header>
                        <Drawer.Title className={cn(
                        'hidden mobile:flex text-chillPaper',
                       
                    )}> <Link href={'/'} ><BoozeBites/></Link></Drawer.Title>
                        <Drawer.CloseButton />
                    </Drawer.Header>
                    <Drawer.Body >


                        <div
                            className={`px-[4px] flex flex-col items-center  text-[14px] h-auto mt-6 gap-4 w-full`}>
                            {/* HOME */}

                        </div>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
            <WrapperBody>
                <nav className='flex items-center justify-between w-full relative '>

                    <div className={cn(
                        'hidden mobile:flex text-[1.8rem] text-chillPaper',
                        racing.className
                    )}>{Site.siteName}</div>
                    {/* LEFT */}
                    <div className='z-[50] flex gap-[50px] mobile:hidden'>
                        <Link href={'/'} ><BoozeBites/></Link>

                        <div className={cn(
                            'flex items-center gap-[50px] text-[20px]',
                            quando.className
                        )}>
                            <div className='group' onMouseEnter={()=>setHome(true)} onMouseLeave={()=>setHome(false)}>
                                <Link className='text-chillPaper' href={''}>Home</Link>
                                <motion.div
                                initial={{width:0, height:0}}
                                animate={{width: isHome?'100%':'0%', height:isHome?'3px':'0%'}}
                                exit={{width:isHome?'0%':'100%'}}
                                transition={{duration:0.4, type:'spring'}}
                                className='w-full h-[3px] bg-chillPaper mt-[6px]'></motion.div>
                            </div>

                            <div>
                                <Link className='text-chillPaper' href={''}>Menu</Link>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className='flex items-center gap-[40px] z-[50] mobile:hidden mid:hidden mid:w-0 mid:h-0 mobile:w-0 mobile:h-0'>
                           
                           <Button className='bg-transparent rounded-full border-2 border-chillPaper flex items-center gap-[12px]'>
                            <Cart/>
                            <span className={cn(
                                passion.className,
                                'text-[20px] text-chillPaper '
                            )}>0</span>
                           </Button>

                           <Link href={"/auth/login"} className={cn(
                            passion.className,
                            'text-[20px] text-chillPaper'
                           )}>Login</Link>
                            <Button className={cn(
                                passion.className,
                                "text-[20px] text-softCream bg-chillPaper px-[16px] py-[9px] rounded-[6px]"
                            )}>SignUp</Button>
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
