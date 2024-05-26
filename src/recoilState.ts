import { atom } from 'recoil';


interface Project {
    name: string;
    description: string;
}

interface Experience {
    company: string;
    role: string;
    duration: string;
}

interface Description {
    text: string;
}


export const projectsState = atom<Project[]>({
    key: 'projectsState',
    default: []
});

export const experienceState = atom<Experience[]>({
    key: 'experienceState',
    default: []
});

export const descriptionState = atom<Description[]>({
    key: 'descriptionState',
    default: []
});
