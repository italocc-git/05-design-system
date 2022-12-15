import type { Meta, StoryObj } from '@storybook/react'
import {Toast, ToastProps} from '@ignite-ui/react'

export default {
    title: 'Data display/Toast',
    component: Toast,
    args: {
        toastTitle: 'Toast Title',
        toastDescription: 'Toast Description Example',
        backgroundColor: 'default',
        
    },
    argTypes: {
        toastTitle: {
            control: { type: 'text'}
        },
        toastDescription: {
            control: { type: 'text'}
        },
        backgroundColor: {
            options: ['success','error','alert','info','default'],
            control: {type: 'select'}
        }
    }
} as Meta<ToastProps>


export const Primary: StoryObj<ToastProps> = {}