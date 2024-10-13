import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Pagina de About',
    keywords: ['About Page', 'Wascar Alvarez'],
}
export default function AboutPage() {
    return (
        <>
            <span className="flex min-h-screen flex-col text-7xl">About Page</span>
        </>
    )
}