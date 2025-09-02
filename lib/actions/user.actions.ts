'use server'


import { revalidatePath } from 'next/cache';
import User from '../models/user.model'
import { auth } from '@clerk/nextjs/server';
import { connectToDB } from '../mongoose'
// import { useUser } from '@clerk/clerk-react';





interface CreateUserParams {

    userId: String;

    email: String;

    username: String;

    name: String;

    image: String

}


export const createUser = async({

    userId,

    username,

    name,

    email,

    image

    

}: CreateUserParams): Promise<void> => {

    try{

        connectToDB()

        await User.create({

            id: userId,
            username,
            name,
            email,
            image

        })

    } catch(err: any) {

        throw new Error(`Failed to create user: ${err.messagegit}`)

    }

}
interface updateUserParams {
    userId: string;
    email?: string;
    username?: string;
    name?: string;
    bio?: string;
    image?: string;
    path?: string;
}

export const updateUser = async ({
    userId,
    name,
    email,
    username,
    bio,
    path,
    image
}: updateUserParams): Promise<void> => {
    try{

        connectToDB()
        await User.findOneAndUpdate(
            {id: userId},
            {
                name,
                email,
                username,
                bio,
                path,
                image,
                onboarded: true
            }
        )

        if(path === '/profile/edit') revalidatePath(path)

    } catch(err: any) {
        throw new Error(`Failed to update user info: ${err.message}`)
    }
}
export const fetchUser = async (inUserId: string) => {
    
    // const { isSignedIn, user, isLoaded } = useUser();
    const { userId, redirectToSignIn } = await auth();
    console.log(userId)
    if (userId) {
        console.log(userId)
        try {
            connectToDB()

            return await User.findOne({
                id: inUserId
            })
        } catch(err: any) {
            throw new Error(`Failed to fetch user: ${err.message}`)
        }
    } else {
        console.log(userId)
        return "Loading"
    }
}