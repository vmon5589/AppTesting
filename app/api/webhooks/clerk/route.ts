import { createUser } from '@/lib/actions/user.actions'

import { verifyWebhook } from '@clerk/nextjs/webhooks'

import { NextRequest } from 'next/server'


export async function POST(req: NextRequest) {

  try {

    const evt = await verifyWebhook(req)


    // Do something with payload

    // For this guide, log payload to console

    


    if (evt.type === 'user.created') {

        const user = evt.data

        console.log('userId:',evt.data)

        await createUser({

            userId: user.id,

            email: user.email_addresses[0].email_address,

            name: `${user.first_name || ''} ${user.last_name || ''}`,

            username: user.username || '',

            image: user.image_url || '',

        })

    }

    console.log('Webhook received...')
    return new Response('Webhook received', { status: 200 })

  } catch (err) {

    console.error('Error verifying webhook:', err)

    return new Response('Error verifying webhook', { status: 400 })

  }

}