'use server'


import { auth } from '@clerk/nextjs/server';
import mongoose from 'mongoose'

let isConnected: boolean = false
// Promise returns nothing, doesnt resolve to any value (void)
// strictQuery ensures db queries are only those included in schema 
export const connectToDB = async (): Promise<void> => {

    
}