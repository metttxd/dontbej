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
import { CheckIcon, ChevronRightIcon, X } from 'lucide-react'
import axios from 'axios'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { cn } from "@/lib/utils";

const Email = () => {
    const [email, setEmail] = React.useState('');
    const [emailSent, setEmailSent] = React.useState(false);
    const [isEmailValid, setIsEmailValid] = React.useState(false);

    const url = import.meta.env.VITE_STATUS === 'PROD' ? import.meta.env.VITE_BACKEND_URL : import.meta.env.VITE_URL;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(value.includes('@')); // Controlla se l'email contiene "@"
    };

    const sendEmail = async () => {
        if (email.trim() === '') {
            setEmailSent(false);
            return;
        }
        setEmailSent(true);
        try {
            await axios.post(`${url}/send-email`, { email });
            console.log("Email inviata con successo:");
        window.location.reload();
        } catch (error) {
            console.error("Errore nell'invio dell'email:");
            setEmailSent(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-[700px] overflow-hidden'>
            <Card className="w-[400px] relative overflow-hidden rounded z-10">
                <CardHeader>
                    <CardTitle>Please type your email</CardTitle>
                    <CardDescription>We will send you a notification when the website opens!</CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Input
                                    id="name"
                                    placeholder="your@email.com"
                                    onChange={handleEmailChange}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className={`flex justify-between `}>
                    <AnimatedSubscribeButton
                        onClick={sendEmail}
                        className={`w-full ${!isEmailValid ? 'bg-red-800' : ''}`}
                        disabled={!isEmailValid} // Disabilita il pulsante se l'email non è valida
                    >
                        <span className="group inline-flex items-center">
                            Get Notified!
                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="group inline-flex items-center">
                            {emailSent ? (
                                <>
                                    <CheckIcon className="mr-2 size-4" />
                                    Subscribed!
                                </>
                            ) : (
                                <>
                                    <X className="mr-2 size-4" />
                                    Error
                                </>
                            )}
                        </span>
                    </AnimatedSubscribeButton>
                </CardFooter>
                <BorderBeam duration={10} size={200} />
            </Card>

            <div className="flex absolute h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] z-1",
                        "pointer-events-none",
                        "top-0 left-0"
                    )}
                />
            </div>
        </div>
    );
};

export default Email;
