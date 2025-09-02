import { SignInButton, SignUpButton } from "@clerk/nextjs"
import Image from "next/image"

const LandingPage = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row gap-5 p-5">
            <div className="flex justify-center">
                <Image
                    src='/assets/test.svg'
                    alt="Logo"
                    width={400}
                    height={400}
                    className="w-1/2 lg:w-full"
                />
            </div>

            <div className="flex flex-col items-center ">
                <h1 className="font-extrabold text-light-1 text-4xl mb-5 lg:mb-7 text-center lg:text-left">Title line</h1>
                <p className="text-light-1 text-xl lg:text-3xl mb-5 lg:mb-10 text-center lg:text-left">
                    Join today
                </p>

                <SignInButton>
                    <button 
                        className="lg:w-50 text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-slate-300 hover:bg-logoblue border-4 border-blue-500"
                    >
                        Log in
                    </button>
                </SignInButton>

                <SignUpButton>
                    <button
                        className="lg:w-50 text-black mx-5 my-2 lg:mx-0 lg:my-2 px-6 py-2 rounded-lg bg-slate-300 hover:bg-antilogo border-4 border-red-500"
                    >
                        Register
                    </button>
                </SignUpButton>

            </div>

        </div>
        </>
    )
}

export default LandingPage