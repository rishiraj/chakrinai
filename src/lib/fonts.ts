import localFont from 'next/font/local'
import { Merriweather_Sans } from 'next/font/google'

export const merriweatherSans = Merriweather_Sans({
    variable: '--font-merriweather-sans',
    subsets: ['latin'],
    display: 'swap',
})

export const awesomeSerif = localFont({
    src: '../../public/assets/fonts/AwesomeSerif.otf',
    variable: '--font-awesome-serif',
    display: 'swap',
})

export const handwriting = localFont({
    src: '../../public/assets/fonts/Handwriting.otf',
    variable: '--font-handwriting',
    display: 'swap',
})

export const fitfully = localFont({
    src: '../../public/assets/fonts/FitfullyRegular.ttf',
    variable: '--font-fitfully',
    display: 'swap',
})