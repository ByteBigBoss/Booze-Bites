import { odor, passion } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import React from 'react'
import WrapperBody from '../wrappers/WrapperBody'
import { ComingSoonContent } from '@/content/coming-soon'

const ComingSoon = () => {
    return (
        <div className='min-h-screen w-full '>

            {/* TOP */}
            <div className='w-full h-[552px] bg-softCream'>

            </div>

            {/* BOTTOM */}
            <div className='w-full h-[280px] bg-spicyRed flex items-center'>
                <WrapperBody>

                    <div className='flex items-center justify-between w-full'>

                        {/* BRICKS */}
                        <div className='flex flex-col gap-[8px]'>
                            <Bricks count={10} />
                            <Bricks count={10} />
                        </div>

                        {/* TEXT BOX */}
                        <div className='text-center '>
                            <div className={cn(
                                passion.className,
                                "text-[80px] font-bold text-softCream leading-[70px] uppercase"
                            )}>{ComingSoonContent.title}</div>
                            <div className={cn(
                                odor.className,
                                "text-[20px]  text-softCream"
                            )}>{ComingSoonContent.subtitle}</div>
                        </div>

                        {/* BRICKS */}
                        <div className='flex flex-col gap-[8px]'>
                            <Bricks count={10} />
                            <Bricks count={10} />
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