import { PropsWithChildren } from "react";
import {clsx} from "@/lib/clsx";
import s from './Paper.module.css'

export type PaperProps = PropsWithChildren<{ className?: string }>

export const Paper = ({ className, children }: PaperProps) => (
    <div className={clsx(s.root, className)}>
        {children}
    </div>
)
