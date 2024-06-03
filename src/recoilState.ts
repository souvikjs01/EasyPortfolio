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

export const num = atom({
    key:'num',
    default: 0
})

export const temp1 = atom({
    key:'temp1',
    default: false
})

export const temp2 = atom({
    key:'temp2',
    default: false
})

export const temp1Form = atom({
    key:'temp1Form',
    default: false
})

// Form fields...

// Hero 

export const Name = atom({
    key: 'Name',
    default: ''
})

export const WhatYouAre = atom({
    key: 'WhatYouAre',
    default: ''
})

export const Summary = atom({
    key: 'Summary',
    default: ''
})

// Technologies 
interface ListItem {
    skill: string;
    color: any;
    icon: any;
}

export const Technology_ = atom<ListItem[]>({
    key: 'Technology_',
    default: []
})




export const temp2Form = atom({
    key:'temp2Form',
    default: false
})

export const projectsState = atom<Project[]>({
    key: 'projectsState',
    default: []
});

export const ThemeState = atom<String>({
    key: 'ThemeState',
    default: 'dark'
});

export const experienceState = atom<Experience[]>({
    key: 'experienceState',
    default: []
});

export const descriptionState = atom<String>({
    key: 'descriptionState',
    default: ''
});
