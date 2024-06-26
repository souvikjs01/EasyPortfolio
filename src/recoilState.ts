import { atom } from 'recoil';



interface Project {
    name: string;
    description: string;
}
// Project Type
interface ProjectItem {
    image?:string;
    projectName?: string;
    description?: string;
    technologies?: string[];
    github?: string;
    hosted?: string;
}
// Experience Type
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
export const fetchCount = atom({
    key: 'fetchCount',
    default: 0
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
interface ListItem {
    link?: string;
    name?: string;
    icon?: any;
}
export const LinkedInNavbar = atom <ListItem> ({
    key: 'LinkedInNavbar',
    default: {}
})
export const GithubNavbar = atom <ListItem> ({
    key: 'GithubNavbar',
    default: {}
})
export const InstaNavbar = atom <ListItem> ({
    key: 'InstaNavbar',
    default: {}
})
export const NavbarItems = atom<ListItem[]>({
    key: 'NavbarItems',
    default: [],
})
// Hero 

export const HeroImage = atom({
    key: 'HeroImage',
    default: 'heroDefault.jpg'
})

export const AboutImage = atom({
    key: 'AboutImage',
    default: '/aboutDefault.jpg'
})

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

export const Resume = atom({
    key:'Resume',
    default: ''
})

export const AboutText = atom({
    key:'AboutText',
    default: ''
})

// Technologies 
interface ListItem {
    skill?: string;
    color?: any;
    icon?: any;
}

export const Technology_ = atom<ListItem[]>({
    key: 'Technology_',
    default: []
})

// Address
export const Address = atom({
    key: 'Address',
    default: ''
})
export const Email = atom({
    key: 'Email',
    default: ''
})
export const Mobile = atom({
    key: 'Mobile',
    default: ''
})

// Social Links
interface SocialMediaLinked {
    url?: string;
    name?: string;
    icon?: any;
    color?: string;
}


export const SocialHandles = atom<SocialMediaLinked[]>({
    key: 'SocialHandles',
    default: []
})




export const temp2Form = atom({
    key:'temp2Form',
    default: false
})

// export const projectsState = atom<Project[]>({
//     key: 'projectsState',
//     default: []
// });

export const ThemeState = atom<String>({
    key: 'ThemeState',
    default: 'dark'
});
interface ExperienceItem {
    years?: string;
    role?: string;
    company?: string;
    description?: string;
    stack?: string[];
  }
export const projectState = atom<ProjectItem[]>({
    key: 'projectState',
    default: []
});

export const experienceState = atom<ExperienceItem[]>({
    key: 'experienceState',
    default: []
});

export const descriptionState = atom<String>({
    key: 'descriptionState',
    default: ''
});
