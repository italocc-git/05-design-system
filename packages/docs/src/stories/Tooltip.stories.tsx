import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    title: 'Tooltip Example',
    size: 'md',
    textColor: 'normal',
    backgroundColor: 'normal',
    active: undefined,
  },
  argTypes: {
    title: {
      control: { type: 'text'}
    },
    size: {  
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select'
      },
    },
     active: {
      control: {
        type: 'boolean'
      },
    }, 
    textColor: {
      options: ['light', 'normal', 'bold', 'extraBold'],
      control: {
        type: 'select'
      }
    },
     backgroundColor: {
      options: ['light', 'normal', 'bold', 'extraBold'],
      control: {
        type: 'inline-radio',
      },
    }, 
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const CustomTooltip: StoryObj<TooltipProps> = {
  args: {
    children: 'Large text',
    size: 'lg',
  },
}

