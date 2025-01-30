import {twMerge as unique} from 'tailwind-merge';
import {ClassValue as Style, clsx as logic} from 'clsx';

const tailwindcss = (...inputs: Style[]) => {
    return unique(logic(...inputs));
}

export default tailwindcss;