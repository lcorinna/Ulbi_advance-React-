import { resolve } from 'path';
import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
	// @ts-ignore
	// имитируем задержку загрузки
	setTimeout(() => resolve(import('./AboutPage')), 1000)
})); 