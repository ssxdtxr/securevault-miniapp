import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type VariantType = 'primary' | 'outlined'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType
}

const variants: Record<VariantType, string> = {
  primary: twMerge(
    // Базовые стили
    'flex items-center justify-center font-medium text-[16px] text-white bg-[#0055FF] py-4 w-full rounded-xl',

    // Состояния
    'hover:bg-[#0044CC]',
    'active:bg-[#003399]',
    'focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:ring-opacity-50',

    // Анимация
    'transition-colors duration-200'
  ),
  outlined: twMerge(
    // Базовые стили
    'flex items-center justify-center font-medium text-[16px] text-[#0055FF] bg-white py-4 w-full rounded-xl ring-2 ring-[#0055FF]',

    // Состояния
    'hover:bg-[#F0F7FF] hover:outline-[#003399] hover:text-[#003399]',
    'active:bg-[#E0EEFF] active:outline-[#002266] active:text-[#002266]',

    // Анимация
    'transition-all duration-200 ease-in-out'
  ),
}

export const Button = ({ children, variant = 'primary', ...rest }: PropsWithChildren<IButton>) => {
  return (
    <button className={variants[variant]} {...rest}>
      {children}
    </button>
  )
}
