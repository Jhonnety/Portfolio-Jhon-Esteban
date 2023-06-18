
interface LogoProps {
    className: string;
    level: string;
    porcent: string;
    classPorcent: string,
}

export const Logo = ({ className, level, porcent, classPorcent }: LogoProps) => {
    return (
        <>
            <i className={`iconSkill fa-brands ${className} ${classPorcent}`}>
                <h3 className="levelSkill">{level}</h3>
                <h2 className="porcentSkill">{porcent}</h2>
            </i>
        </>
    )
}
