import { Button, buttonVariants } from "@/components/ui/button";
import { Head, Link } from "@inertiajs/react";
export default function Home() {
  return (
    <>
      <div className="notch"></div>
      <div className="p-2 h-svh">
        <div className="bg-grain-blue w-full h-full bg-cover p-1 rounded-md grid grid-cols-5 grid-rows-3">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={route("dashboard")}
          >
            j
          </Link>
        </div>
      </div>
    </>
  );
}
