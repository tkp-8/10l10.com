import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <Head title="10l10 Intelligence"></Head>
      <div className="grain-blue">
        <div className="navbar fixed top-0 w-full z-20">
          <div className="border-b-[4px] border-[#f7f8ff]">
            <Link href={route("landing")}>
              <img
                src="/assets/img/logo_trans.svg"
                className="w-16 absolute top-0 m-2"
              />
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

          <div className="h-[5rem] bg-gradient-to-b from-black to-transparent"></div>
        </div>

        <div className="h-svh flex flex-col justify-center">
          <h1 className=" title font-cutive-mono text-9xl leading-tight text-center">
            Transform <br /> From Old to <br /> 10/10
          </h1>
          <h3 className="title text-4xl text-center font-bold mt-8">
            Powered by Advanced AI Agents
          </h3>
          <div className="mt-16 text-center">
            <Button
              class=" mb-4 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500
              hover:border-[#f7f8ff] hover:before:[box-shadow:_20px_20px_20px_30px_#331d9a] duration-500 before:duration-500
              hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur-lg origin-left
              hover:decoration-2 relative bg-[#f7f8ff]/[0.03] h-14 w-60 border border-gray-600 text-left p-3 text-[#f7f8ff] text-base
              font-semibold rounded-lg overflow-hidden  before:absolute before:w-6 before:h-6 before:content[''] before:right-1
              before:top-1 before:z-10 before:bg-blue-200 before:rounded-full before:blur-lg  after:absolute after:z-10
              after:w-10 after:h-10 after:content['']  after:bg-blue-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
            >
              See more
            </Button>
            <div>
              Or, <Link className="underline">request a demo</Link>
            </div>
          </div>
        </div>

        <div className="h-[400rem]"></div>
      </div>
    </>
  );
}
