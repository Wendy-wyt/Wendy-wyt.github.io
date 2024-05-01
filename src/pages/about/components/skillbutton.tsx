import { SkillDto } from '@/interfaces/skills';

const skillbutton = ({ name }: SkillDto, key: number) => {

    return (
        <div
            key={key}
            className='mx-1 md:mx-3 my-2 p-2 rounded-lg w-fit text-nowrap bg-skill_bg text-sm text-skill_text md:font-semibold'>
            {name}
        </div>
    )
}

export default skillbutton