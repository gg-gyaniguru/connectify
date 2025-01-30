import {ReactNode} from 'react';
import tw from '@/utilities/tailwindcss';

type Container = {
    className?: string;
    children: ReactNode
}

const Container = ({className, children}: Container) => {
    return (
        <div
            className={'w-dvw h-dvh fixed left-0 top-0 right-0 bottom-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'}>
            <div
                className={tw('w-[90%] max-w-[25rem] m-auto fixed left-0 top-6 right-0 bottom-6 bg-white/15 rounded-3xl', className)}>
                <div className={'w-[90%] m-auto absolute left-0 top-0 right-0 bottom-0'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;