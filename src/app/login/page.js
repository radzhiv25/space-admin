import { BsGoogle, BsGithub, BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "../dashboard/page";

export default function Login() {
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col">
      <div className="md:w-3/5 bg-black w-full md:p-0 p-10">
        <Image
          src="/space-login.jpg"
          width={600}
          height={600}
          alt="hey"
          className="rounded-md relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="md:w-2/5 w-full">
        <Link href="/">
          <p className="p-2 flex items-center justify-end gap-1 hover:underline cursor-pointer">
            <span>
              <BsArrowLeft className="" />
            </span>{" "}
            back
          </p>
        </Link>
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-3 flex flex-col text-gray-500 w-[400px] space-y-3 rounded-lg">
          <div>
            <h1 className="text-xl font-bold text-left text-black">Log In</h1>
            <p className="text-left text-sm">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <button className="flex justify-center items-center space-x-1 border p-2 rounded-md w-1/2">
              <BsGoogle className="text-sm" />
              <p>Google</p>
            </button>
            <button className="flex justify-center items-center space-x-1 border p-2 rounded-md w-1/2">
              <BsGithub className="text-sm" />
              <p>Github</p>
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2">or continue with</span>
            </div>
          </div>
          <form className="flex flex-col">
            <label>Email</label>
            <input
              className="border p-2 outline-none rounded-md"
              placeholder="johndoe@example.com"
            />
            <label>Password</label>
            <input
              className="border p-2 outline-none rounded-md"
              placeholder="Min. 6 characters"
            />
            <button className="mt-3 p-2 bg-black rounded-md text-white">
              <Link href='/dashboard'>Log in</Link>
            </button>
          </form>
          <div className="text-center text-sm">
            <p>
              By signing up, I agree to our{" "}
              <span className="hover:underline cursor-pointer">
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
            <p>
              Already have an account?{" "}
              <span className="hover:underline cursor-pointer">
                <Link href="/signup">Sign me up!</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
