import {ToastProvider} from '@radix-ui/react-toast';
import { ComponentProps, useState } from 'react';
import {ToastContent, ToastAction , ToastBox} from './styles'
import { Button } from '../Button';
import { Box } from '../Box';
import { Heading } from '../Heading';
import {Text} from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContent> {
    /* active?: boolean */
    toastTitle?: string
    toastDescription?: string
}

export function Toast({toastTitle , toastDescription, ...props}: ToastProps) {
    const [open, setOpen] = useState(false);
    return(
        <ToastProvider swipeDirection='right'>
            <Button onClick={() => setOpen(true)}>
                Click to show the Toast
            </Button>

            <ToastContent open={open} onOpenChange={setOpen} {...props}>
                <Box >
                    <Heading size='sm'>{toastTitle}</Heading>
                    <Text size='xs'>{toastDescription}</Text>
                </Box>
                
                <ToastAction altText='Alt Text Example' asChild>
                    <Button size='sm' >
                        Undo
                    </Button>
                </ToastAction>
            </ToastContent>
            <ToastBox />
        </ToastProvider>
    )
}

Toast.displayName = 'Toast'