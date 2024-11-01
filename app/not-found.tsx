import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[94vh] px-2 py-8 flex flex-col gap-3 items-center justify-center w-full">
      <div className="flex flex-col items-center gap-3 text-center pb-4">
        <Image width={400} height={400} src="/av/av-4.svg" alt="404" className=""/>
        {/* <h2 className="text-7xl font-bold">404</h2> */}
        <p className="text-muted-foreground">Oops! Page You Looking Not Found</p>
      </div>

      <Link href="/" className={cn(
        buttonVariants({}),
        "bg-chillPaper rounded-full text-[14px] font-medium"
      )}>
        Back to homepage
      </Link>
    </div>
  );
}
