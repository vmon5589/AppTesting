import { auth, currentUser } from '@clerk/nextjs/server';
import '../../globals.css';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';
import { ClerkLoaded, Protect, RedirectToSignIn, SignedIn, UserProfile, useUser } from '@clerk/nextjs';
import { useAuth } from "@clerk/nextjs";






import { getAuth, clerkClient } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'

const Page = async () => {
    const { userId } = await auth();
    
    const user = await currentUser()
    // const { isSignedIn, user, isLoaded } = await useUser();
    
    // let usercheck = userCheck()
    // let user = usercheck[0]
    // let signedin = usercheck[1]
    console.log('Verifying user...')
    // const user = await currentUser()
    if(!user) return null
    console.log('Await Verifying user...')
   
    console.log('User exists...')
    // const userInfo = await fetchUser(user.id)
    // console.log(userInfo)
    // if(userInfo?.onboarded) redirect('/')
    // const userData = {
    //     id: user?.id,
    //     objectID: userInfo?._id,
    //     userName: userInfo ? userInfo?.username : user?.username,
    //     name: userInfo ? userInfo?.name : user?.firstName || '',
    //     bio: userInfo ? userInfo?.bio : '',
    //     image: userInfo ? userInfo?.image : user?.imageUrl
    // }
    // const userprofile = userCheck()
    // console.log(userprofile)
    // let loadcheck = userCheck()
    // console.log(loadcheck)
    // let loadcheck = await checkLoaded()
    // if (loadcheck) {
      // if (!isSignedIn) {
    // console.log(userId)
    // if (!userId) {
      return (
          
              <>
                  
                  <main className="mx-auto flex flex-col justify-start px-10 py-20"> 

                      <div className="text-center">

                          <h1 className="head-text">Welcome</h1>

                          <p className="mt-3 text-base-regular text-light-2">

                              Complete your profile to get started</p>

                      </div>

                      <div className="mt-10">
                              
                            
                            {/* userprofile */}
                            
                              {/* handleUser() */}
                              <SignedIn>
                                <UserProfile
                                    routing="hash"
                                />
                              </SignedIn>
                              
                          
                      </div>

                    

                  </main>
                  
              </>
          
      )
    // }
    
    

}

export default Page