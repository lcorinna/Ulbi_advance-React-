import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
	// @ts-ignore
	// имитируем задержку загрузки
	setTimeout(() => resolve(import('./MainPage')), 1000)
}));  