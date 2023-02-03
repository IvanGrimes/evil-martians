import {PropsWithChildren, useRef} from "react";
import s from './Button.module.css'
import {AriaButtonProps, useButton} from "@/lib/aria";
import {clsx} from "@/lib/clsx";

export type ButtonProps = PropsWithChildren<AriaButtonProps<'button'> & { className?: string }>

export const Button = ({ children, className, ...props }: ButtonProps) => {
    const ref = useRef<HTMLButtonElement | null>(null)
    const { buttonProps, isPressed } = useButton(props, ref)


    return (
        <button className={clsx(s.root, isPressed && s.pressed, className)} ref={ref} {...buttonProps}>{children}</button>
    )
}
