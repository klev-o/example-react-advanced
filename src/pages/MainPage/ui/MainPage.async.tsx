import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await import('./MainPage'))

// export const MainPageAsync = lazy(() => new Promise(res => {
//     // @ts-ignore
//     setTimeout(() => res(import('./MainPage')), 2000)
// }))
