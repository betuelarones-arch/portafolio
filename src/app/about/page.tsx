import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}. Trayectoria, habilidades, experiencia y formación en desarrollo web full stack.`,
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: `Sobre Mí - ${personalInfo.name}`,
        description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}. Trayectoria, habilidades y experiencia.`,
        url: '/about',
        siteName: personalInfo.name,
        locale: 'es_ES',
        images: [
            {
                url: personalInfo.avatar,
                width: 500,
                height: 500,
                alt: personalInfo.name,
            },
        ],
    },
};

export default function AboutPage() {
    const skills = [
        'JavaScript/TypeScript',
        'React & Next.js',
        'Node.js & Express',
        'PostgreSQL & MongoDB',
        'Tailwind CSS',
        'Git & GitHub',
        'Docker',
        'AWS',
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: `Sobre Mí - ${personalInfo.name}`,
        description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
        mainEntity: {
            '@type': 'Person',
            name: personalInfo.name,
            jobTitle: personalInfo.title,
            url: personalInfo.siteUrl,
            image: `${personalInfo.siteUrl}${personalInfo.avatar}`,
            sameAs: [personalInfo.github, personalInfo.linkedin],
        },
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Mí</h1>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={personalInfo.avatar}
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            ¡Hola! Soy {personalInfo.name}
                        </h2>
                        <div className="prose text-gray-700 space-y-4">
                            <p>
                                Soy un desarrollador full stack apasionado por crear experiencias
                                web excepcionales. Con más de X años de experiencia, me especializo
                                en construir aplicaciones modernas y escalables.
                            </p>
                            <p>
                                Mi enfoque está en escribir código limpio, mantenible y eficiente,
                                siempre buscando las mejores prácticas y las últimas tecnologías
                                para entregar productos de alta calidad.
                            </p>
                            <p>
                                Cuando no estoy programando, me gusta contribuir a proyectos de
                                código abierto, escribir artículos técnicos y aprender nuevas
                                tecnologías.
                            </p>
                        </div>
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Habilidades Técnicas
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                            >
                                <p className="font-semibold text-gray-800">{skill}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Experiencia</h2>
                    <div className="space-y-6">
                        {[
                            {
                                role: 'Full Stack Developer Senior',
                                company: 'Empresa Actual',
                                period: '2022 - Presente',
                                description:
                                    'Lideré el desarrollo de aplicaciones web escalables, optimizando rendimiento y mentorizando a desarrolladores junior.',
                            },
                            {
                                role: 'Desarrollador Frontend',
                                company: 'Empresa Anterior',
                                period: '2020 - 2022',
                                description:
                                    'Construcción de interfaces modernas con React y TypeScript, implementando diseño responsivo y pruebas unitarias.',
                            },
                            {
                                role: 'Desarrollador Junior',
                                company: 'Primera Empresa',
                                period: '2018 - 2020',
                                description:
                                    'Desarrollo de funcionalidades en aplicaciones web, mantenimiento de bases de datos y soporte técnico.',
                            },
                        ].map((item) => (
                            <div
                                key={item.role}
                                className="border-l-4 border-blue-600 pl-4 py-2"
                            >
                                <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                                <p className="text-blue-600 font-medium">{item.company}</p>
                                <p className="text-gray-500 text-sm mb-2">{item.period}</p>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Formación</h2>
                    <div className="space-y-6">
                        {[
                            {
                                degree: 'Ingeniería en Sistemas Computacionales',
                                school: 'Universidad Ejemplo',
                                period: '2014 - 2018',
                            },
                            {
                                degree: 'Máster en Desarrollo Web Full Stack',
                                school: 'Bootcamp Online',
                                period: '2019',
                            },
                        ].map((item) => (
                            <div key={item.degree} className="flex items-start gap-4">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">
                                        {item.degree}
                                    </h3>
                                    <p className="text-gray-600">{item.school}</p>
                                    <p className="text-gray-400 text-sm">{item.period}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Intereses</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Open Source',
                            'Escritura Técnica',
                            'Inteligencia Artificial',
                            'Ciberseguridad',
                            'DevOps',
                            'UI/UX Design',
                            'Cloud Computing',
                            'IoT',
                        ].map((interest) => (
                            <div
                                key={interest}
                                className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-colors"
                            >
                                <p className="font-semibold text-blue-800">{interest}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">¿Trabajemos Juntos?</h2>
                    <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                        Estoy abierto a nuevas oportunidades y proyectos interesantes. No dudes en
                        contactarme para colaborar.
                    </p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
                    >
                        Contáctame
                    </a>
                </section>
            </div>
        </div>
    );
}