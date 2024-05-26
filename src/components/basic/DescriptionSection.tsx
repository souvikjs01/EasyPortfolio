import React from 'react'
import { descriptionState } from '@/recoilState' 
import { useRecoilState } from 'recoil'
export default function DescriptionSection() {
    const [description, setDescription] = useRecoilState(descriptionState);

    return (
        <div>
            <p>{description}</p>

            <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
        </div>
  )
}
