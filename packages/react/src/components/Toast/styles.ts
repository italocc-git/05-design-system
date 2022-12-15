import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
    from: {
        transform: 'translateX(100%)',
    },
    to: {
        transform: 'translateX(0)',
    },
})

const slideOut = keyframes({
    from: {
        transform: 'translateX(0)',
    },
    to: {
        transform: 'translateX(100%)',
    },
})
const hide = keyframes({
    from: {
        opacity: 1
    },
    to: {
        opacity: 0
    }
})

export const ToastContent = styled(Toast.Root, {
    borderRadius: '$sm',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '$2',
    display: 'flex',
    justifyContent: 'space-between',
    gap: 5,
    alignItems: 'center',

    div: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        background: 'transparent',
        border: 0,
    },

    '&[data-state="open"]': {
        animation: `${slideIn} 200ms ease-out`,
    },
    '&[data-state="closed"]': {
        animation: `${slideOut} 200ms ease-out`,
    },

    variants: {
        backgroundColor: {
            'success': { backgroundColor: '$ignite300' },
            'error': { backgroundColor: '$red500' },
            'alert': { backgroundColor: '$amber500' },
            'info': { backgroundColor: '$sky500' },
            'default': { backgroundColor: '$transparent' },
        },
    }


})



export const ToastAction = styled(Toast.Action, {

})

export const ToastBox = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '$5',
    gap: 10,
    width: '390px',
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2147483647,
    outline: 'none',
})