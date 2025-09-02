Currently, this crashes as a result of UserProfile within the page.tsx file in the directory: app/(auth)/onboarding/page.tsx.
In order to re-create the error:
1) Launch with the app with "npm run dev"
2) then register a user (along with confirmation of user registration)
3) the app should crash with the following error:
"ClerkRuntimeError: Clerk: <UserProfile/> cannot render unless a user is signed in. Since no user is signed in, this is no-op."

Of note, when I re-load the page or modify the code in any way, this error disappears and the the page renders correctly, with a simple "Welcome" message and the clerk profile ready for the users info to be updated.
I am currently unsure how to proceed, and any help would be immensely helpful.

