interface ImageLogoProps {
    src: string;
    level: string;
    porcent: string;
}

export const ImageLogo = ({ src, level, porcent }: ImageLogoProps) => {

    return (
        <>
            <img className="imageSkill" src={src} />
            <h3 className="levelImageSkill">{level}</h3>
            <h2 className="porcentImageSkill">{porcent}</h2>
        </>
    )
}
