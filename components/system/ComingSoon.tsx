import { odor, passion } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import { ComingSoonContent } from '@/content/coming-soon'
import Image from 'next/image'
import CountdownTimer from './CountdownTimer'

const ComingSoon = () => {
    return (
        <div className='min-h-screen w-full flex flex-col'>

            {/* TOP */}
            <div className='w-full min-h-[552px] mobile:min-h-[352px] mid:min-h-[452px] bg-softCream relative'>

                <div className='flex w-full justify-center absolute bottom-[-50px] mobile:bottom-[-12px] mid:bottom-[-12px] mobile:items-end mid:items-end'>
                    <div className='relative w-[500px] h-[500px] mobile:w-[140px] mobile:h-[140px] mid:w-[280px] mid:h-[280px]'> <Image src={"/av/av-1.svg"} alt='av1' fill className='object-cover mt-[34px] ml-[80px] mobile:mt-[14px] mobile:ml-[20px] mid:mt-[36px] mid:ml-[30px]' /></div>
                    <div className='relative w-[427px] h-[427px] mobile:w-[280px] mobile:h-[280px] mid:w-[380px] mid:h-[380px]'> <Image src={"/av/av-2.svg"} alt='av2' fill className='object-cover mt-[66px] mobile:mt-[16px] mid:mt-[26px]' /></div>
                    <div className=' relative w-[500px] h-[500px] mobile:w-[140px] mobile:h-[140px] mid:w-[280px] mid:h-[280px]'><Image src={"/av/av-3.svg"} alt='av3' fill className='object-cover ml-[-100px] mt-[16px] mobile:mt-[6px] mobile:ml-[-20px] mid:mt-[24px] mid:ml-[-30px]' /></div>
                </div>

            </div>

            {/* BOTTOM */}
            <div className='w-full min-h-[280px] py-[80px] flex-1  bg-spicyRed flex items-center'>
                <WrapperBody>

                    <div className='w-full flex flex-col items-center pb-[60px]'>
                        <CountdownTimer targetDate='2024-12-25' />
                    </div>
                    <div className='flex items-center justify-between w-full mid:flex-col mobile:flex-col'>

                        {/* BRICKS */}
                        <div className='flex flex-col gap-[8px] mobile:hidden mid:hidden'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>

                        {/* TEXT BOX */}
                        <div className='text-center '>
                            <div className={cn(
                                passion.className,
                                "text-[80px] mobile:text-[3rem] mobile:leading-[40px] font-bold text-softCream leading-[70px] uppercase"
                            )}>{ComingSoonContent.title}</div>
                            <div className={cn(
                                odor.className,
                                "text-[20px] mobile:text-[15px]  text-softCream"
                            )}>{ComingSoonContent.subtitle}</div>
                        </div>

                        {/* BRICKS */}
                        <div className='flex gap-[8px] mid:pt-[30px] mobile:pt-[30px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>
                        <div className='hidden flex-col gap-[8px] mid:flex mobile:flex'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>
                        </div>


                    </div>

                </WrapperBody>
            </div>

        </div>
    )
}

export default ComingSoon

interface BricksProps {
    count: number;
    className?: string;
}

export const Bricks = ({
    count,
    className = "w-[10px] h-[10px] bg-softCream opacity-65"
}: BricksProps) => {

    return (
        <div className='flex gap-[6px]'>
            {Array.from({ length: count }).map((_, key) => (
                <div key={key} className={className}></div>
            ))}
        </div>
    )

}