import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Pagina de Contacto',
    keywords: ['Contact Page','Wascar Alvarez'],
}
export default function ContactPage() {
    return (
        <>
            <span className="flex min-h-screen flex-col text-7xl">Contact Page</span>
        </>
    )
}