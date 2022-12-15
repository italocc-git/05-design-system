import {TooltipProvider} from '@radix-ui/react-tooltip';
import { ComponentProps } from 'react';
import {TooltipContainer, TooltipTrigger , TooltipContent, TooltipArrow} from './styles'
import {Plus} from 'phosphor-react'
export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
    active?: boolean
}


export function Tooltip({active, ...props} : TooltipProps) {
    return (
        <TooltipProvider >
            <TooltipContainer open={active} >
                <TooltipTrigger asChild>
                    <Plus />
                </TooltipTrigger>
                <TooltipContent {...props} >
                    {props.title}
                    <TooltipArrow />
                </TooltipContent>
            </TooltipContainer>
        </TooltipProvider>
    )
}

Tooltip.displayName = 'Tooltip'