import Dropdown from "@/components/Dropdown";
import ProgressBar from "@/components/ProgressBar";

interface IImageDetails {
    src: string,
    alt: string,
    label: string
}

interface ISkillsDetails {
    name: string,
    desc: string
}

export default function SkillBar({
    imageProps,
    skillProps
}: {
    imageProps: IImageDetails,
    skillProps: ISkillsDetails
}) {
    return (
        <Dropdown 
            content={
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <img src={imageProps.src} alt={imageProps.alt} />
                        <div>{imageProps.label}</div>
                    </div>

                    <div className="flex-grow">
                        <ProgressBar percentage={0} />
                    </div>
                </div>
            } 
            dropdown={
                <div className="border border-red-600 h-[50vh]">
                    <div>
                        <h3>{skillProps.name}</h3>
                        <div>{skillProps.desc}</div>
                    </div>
                    <div>projects? w/github links, pull from db, reuse card?</div>
                </div>
            } />
    )
}