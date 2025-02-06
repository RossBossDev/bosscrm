import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import type { Page } from '@inertiajs/core'
import '../css/app.css'
export default function render(page: Page | string) {
    return createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
            return pages[`../pages/${name}.tsx`]
        },
        setup: ({ App, props }) => <App {...props} />,
    })
}
