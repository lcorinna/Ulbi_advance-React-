import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavBarProps {
	className?: string;
}

export const NavBar = ({className}: NavBarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/' className={cls.mainLink}>
					Главная
				</AppLink>
				<AppLink to={'/about'}>
					О сайте
				</AppLink> 
			</div>
		</div>
	)
}
 