"use client"
import React from 'react';
import style from './loader.module.scss';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
// import { Spinner } from '@nextui-org/react';

const Loader = ({ show, size, className, children }) => {
    return (
        <span className={cn('spinner flex flex-col items-center justify-center', !show && 'hidden')}>
            <Loader2
                className={cn(
                    'animate-spin spining text-primary',
                    size === 'small' && 'h-6 w-6',
                    size === 'medium' && 'h-8 w-8',
                    size === 'large' && 'h-12 w-12',
                    className,
                )}
            />
            {children}
        </span>
    )
}

export default Loader