import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import OnboardingProfile from '@/components/onboarding/OnboardingProfile';
import type { NextApiRequest, NextApiResponse } from 'next'

const Page = async () => {
    const { userId } = await auth();
    const user = await currentUser();

    // If no user is authenticated, redirect to sign-in
    if (!user) {
        redirect('/login');
    }

    return (
        <main className="mx-auto flex flex-col justify-start px-10 py-20"> 
            <div className="text-center">
                <h1 className="head-text">Welcome</h1>
                <p className="mt-3 text-base-regular text-light-2">
                    Complete your profile to get started
                </p>
            </div>

            <div className="mt-10">
                <OnboardingProfile />
            </div>
        </main>
    );
};

export default Page