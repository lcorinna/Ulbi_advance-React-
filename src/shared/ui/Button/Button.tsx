import {ButtonHTMLAttributes, FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum TheButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	className?: string;
	theme?: TheButton;
}

export const Button: FC<ButtonProps> = (props) => {

	const {
		className,
		children,
		theme, 
		...otherProps
	} = props;

	return (
		<button 
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};