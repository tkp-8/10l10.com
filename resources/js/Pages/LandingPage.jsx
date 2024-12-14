import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <Head title="10l10 Intelligence"></Head>
      <div className="fixed top-0 border-b-[4px] border-white w-full bg-black">
        <Link href={route("landing")}>
          <img src="/assets/img/logo_trans.svg" className="w-16 absolute m-2" />
        </Link>
        <nav className="m-8 mx-[18rem]">
          <ul className="flex justify-center text-xs">
            <li className="mx-4">
              <Link href={route("login")}>Home</Link>
            </li>
            <li className="mx-4">
              <Link href={route("login")}>Team</Link>
            </li>
            <li className="mx-4">
              <Link href={route("login")}>Pricing</Link>
            </li>
            <li className="mx-4">
              <Link href={route("login")}>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h-svh flex flex-col justify-center">
        <h1 className=" title font-cutive-mono text-9xl leading-tight text-center">
          Transform <br /> From Old to <br /> 10/10
        </h1>
        <h3 className="title text-4xl text-center font-bold">
          Powered by Intelligent AI Agents
        </h3>
        <div className="flex justify-center">
          <Button className="m-8">Watch Trailer</Button>
          <Button className="m-8">Watch Trailer</Button>
        </div>
      </div>

      <div className="h-[400rem]">kreeja</div>
    </>
  );
}
