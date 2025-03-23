import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BorderBeam } from '@/components/magicui/border-beam'
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import axios from 'axios'
import { POST } from '../../app/api/send/route'
const Email = () => {

const [email, setEmail] = React.useState('')

const sendEmail = async (e) => {
    e.preventDefault()
    console.log('works')
    POST()
}

    return (
        <div className='flex justify-center items-center h-[700px]'>

            <Card className="w-[400px] relative overflow-hidden">


                <CardHeader>

                    <CardTitle>Please type your email</CardTitle>
                    <CardDescription>We will send you a notification when the website opens!</CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">

                                <Input id="name" placeholder="your@email.com" />
                            </div>
                            <div className="flex flex-col space-y-1.5">


                            </div>
                        </div>

                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <AnimatedSubscribeButton onClick={sendEmail} className="w-full">
                        <span className="group inline-flex items-center">
                            Follow
                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="group inline-flex items-center">
                            <CheckIcon className="mr-2 size-4" />
                            Subscribed
                        </span>
                    </AnimatedSubscribeButton>
                </CardFooter>
                <BorderBeam duration={10} size={200} />
            </Card>
        </div>
    )
}

export default Email