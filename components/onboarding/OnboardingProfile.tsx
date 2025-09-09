'use client';

import { UserProfile } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

const OnboardingProfile = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6c47ff]"></div>
            </div>
        );
    }

    if (!isSignedIn) {
        return (
            <div className="text-center">
                <p className="text-red-500">Please sign in to access your profile.</p>
            </div>
        );
    }

    return (
        <UserProfile
            routing="hash"
            appearance={{
                elements: {
                    rootBox: "mx-auto",
                    card: "shadow-lg"
                }
            }}
        />
    );
};

export default OnboardingProfile;
