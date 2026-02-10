import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReusableFreeQuoteDialog from "@/components/functionality/ReusableFreeQuoteDialog";

export default function Banner() {
  return (
    <div className="w-full text-center bg-white p-1">
      <Button className="p-0 p !text-xs sm:!text-sm" variant="link" asChild>
        <Link href="https://client.sweepandgo.com/login/doodie-duty-ne42q" target="_blank" rel="noopener noreferrer">Are You Already a Client? <span className="max-sm:underline max-sm:[text-underline-offset:4px]">Login Here</span></Link>
      </Button>
    </div>
  );
}
