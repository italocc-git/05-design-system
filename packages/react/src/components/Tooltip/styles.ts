import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$ignite300',
    backgroundColor: '$white',
})

export const TooltipContent = styled(Tooltip.Content, {
    borderRadius: '4px',
    padding: '10px 15px',
    lineHeight: "$base",
    color: '$gray600',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    userSelect: 'none',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',


    variants: {
        size: {
            sm: { fontSize: '$sm' },
            md: { fontSize: '$md' },
            lg: { fontSize: '$lg' },
        },
        textColor: {
            'light': { color: '$ignite300' },
            'normal': { color: '$ignite500' },
            'bold': { color: '$ignite700' },
            'extraBold': { color: '$ignite900' }
        },
        backgroundColor: {
            'light': { backgroundColor: '$gray100', fill: '$gray100' },
            'normal': { backgroundColor: '$gray500', fill: '$gray500' },
            'bold': { backgroundColor: '$gray700', fill: '$gray700' },
            'extraBold': { backgroundColor: '$gray900', fill: '$gray900' }
        }
    },

    defaultVariants: {
        size: 'md'
    }
})

export const TooltipArrow = styled(Tooltip.Arrow, {
    /* fill: 'var(--arrow-color)' */


})