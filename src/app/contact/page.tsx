import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Contacto',
    description:
        `Ponte en contacto con ${personalInfo.name}. Envíame un mensaje para colaborar en proyectos, oportunidades laborales o simplemente para saludar.`,
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: `Contacto - ${personalInfo.name}`,
        description: `Ponte en contacto con ${personalInfo.name}. Envíame un mensaje para colaborar en proyectos o oportunidades laborales.`,
        url: '/contact',
        siteName: personalInfo.name,
        locale: 'es_ES',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contacto - ${personalInfo.name}`,
    description: `Página de contacto de ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
    mainEntity: {
        '@type': 'Person',
        name: personalInfo.name,
        email: personalInfo.email,
        url: personalInfo.siteUrl,
    },
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
                <p className="text-lg text-gray-600 mb-8">
                    ¿Tienes un proyecto en mente o quieres colaborar? Estaré encantado de
                    escucharte. Puedes enviarme un mensaje directamente o contactarme a
                    través de mis redes sociales.
                </p>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <form
                        action={`https://formsubmit.co/${personalInfo.email}`}
                        method="POST"
                        className="space-y-6"
                    >
                        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Asunto
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="¿De qué se trata?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-y"
                                placeholder="Escribe tu mensaje aquí..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <p className="text-blue-600 text-sm break-all">{personalInfo.email}</p>
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="font-semibold text-gray-900 mb-1">GitHub</p>
                        <p className="text-blue-600 text-sm break-all">{personalInfo.github}</p>
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <p className="font-semibold text-gray-900 mb-1">LinkedIn</p>
                        <p className="text-blue-600 text-sm break-all">{personalInfo.linkedin}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
