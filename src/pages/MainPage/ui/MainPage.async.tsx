import {lazy} from 'react'

export const MainPageAsync = lazy(() => import('./MainPage'))

// export const MainPageAsync = lazy(() => new Promise(res => {
//     // @ts-ignore
//     setTimeout(() => res(import('./MainPage')), 2000)
// }))