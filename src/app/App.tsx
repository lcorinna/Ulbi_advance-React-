import React, { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';


export const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to='/'>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<AppRouter/>
		</div>
	)
}
