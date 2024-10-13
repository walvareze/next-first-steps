import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pagina de precio',
    keywords: ['Pagina de precio', 'Wascar Alvarez']
}
export default function PricingPage() {
    return (
        <>
            <span className="flex min-h-screen flex-col text-7xl">Pricing Page</span>
        </>
    )
}