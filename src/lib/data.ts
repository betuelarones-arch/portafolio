import { Project } from '@/types';

export const personalInfo = {
    name: 'Betuel',
    title: 'Full Stack Developer',
    description:
        'Desarrollador full stack apasionado por crear experiencias web excepcionales con tecnologías modernas.',
    avatar: '/avatar.jpg',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tusitio.com',
    github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/tuusuario',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/tuusuario',
    email: process.env.NEXT_PUBLIC_EMAIL || 'tu@email.com',
};

export const projects: Project[] = [
    {
        slug: 'proyecto-1',
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        image: '/project1.jpg',
        technologies: ['React', 'Next.js', 'Tailwind CSS'],
        demoUrl: 'https://demo1.com',
        githubUrl: 'https://github.com/tuusuario/proyecto1',
        featured: true,
    },
    {
        slug: 'proyecto-2',
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: '/project2.jpg',
        technologies: ['Node.js', 'Express', 'MongoDB'],
        demoUrl: 'https://demo2.com',
        featured: true,
    },
    {
        slug: 'proyecto-3',
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: '/project3.jpg',
        technologies: ['TypeScript', 'React', 'PostgreSQL'],
        githubUrl: 'https://github.com/tuusuario/proyecto3',
        featured: false,
    },
];
