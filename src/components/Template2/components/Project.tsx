"use client"
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import React from 'react'

const projects = [
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem fuga fugit earum excepturi, alias harum officiis minus voluptatem nobis, facere aperiam corporis enim quisquam recusandae assumenda quia tenetur omnis.",
        project_title: "easy portfolio",
        tech_stacks: "React, Next, Recoil, Tailwind" ,
        deploy_link: "https://twitter.com",
        github_link: "https://google.com"
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem fuga fugit earum excepturi, alias harum officiis minus voluptatem nobis, facere aperiam corporis enim quisquam recusandae assumenda quia tenetur omnis.",
        project_title: "easy portfolio",
        tech_stacks: "React, Next, Recoil, Tailwind",
        deploy_link: "https://twitter.com",
        github_link: "https://google.com"
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem fuga fugit earum excepturi, alias harum officiis minus voluptatem nobis, facere aperiam corporis enim quisquam recusandae assumenda quia tenetur omnis.",
        project_title: "easy portfolio",
        tech_stacks: "React, Next, Recoil, Tailwind" ,
        deploy_link: "https://twitter.com",
        github_link: "https://google.com"
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem fuga fugit earum excepturi, alias harum officiis minus voluptatem nobis, facere aperiam corporis enim quisquam recusandae assumenda quia tenetur omnis.",
      project_title: "easy portfolio",
      tech_stacks: "React, Next, Recoil, Tailwind" ,
      deploy_link: "https://twitter.com",
      github_link: "https://google.com" 
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, exercitationem fuga fugit earum excepturi, alias harum officiis minus voluptatem nobis, facere aperiam corporis enim quisquam recusandae assumenda quia tenetur omnis.",
      project_title: "easy portfolio",
      tech_stacks: "React, Next, Recoil, Tailwind" ,
      deploy_link: "https://twitter.com",
      github_link: "https://google.com"
    },
]
const Project = () => {
  return (
    <div>
      <h2 className='text-3xl text-slate-300 font-bold text-center m-8 z-10'>Projects</h2>
      <div>
        <InfiniteMovingCards
            items={projects}
            direction='right'
            speed='slow'
        />
      </div>
    </div>
  )
}

export default Project
