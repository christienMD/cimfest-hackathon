import React from 'react';
import CIMFEST from "../../../assets/images/cimfest.png";
import BLUE from "../../../assets/images/blue.png";
import G2G from "../../../assets/images/g2g.jpg";
import ALPHA_BETTER from "../../../assets/images/alpha_better.jpeg";


interface LogoProps {
    src: string;
    alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => (
    <img src={src} alt={alt} className="h-20 w-auto mx-8" />
);

const TrustedBy: React.FC = () => {
    const logos = [
        { src: CIMFEST, alt: 'Cameroon International Music Festival' },
        { src: BLUE, alt: 'blue' },
        { src: G2G, alt: 'g2g' },
        { src: ALPHA_BETTER, alt: 'alpha_better_records' },
    ];

    return (
        <section className="bg-[#23213A] py-4 flex justify-center">
            <div className="px-8 py-4 flex flex-col items-center space-y-4">
                <h2 className="text-white text-lg font-semibold">Trusted by</h2>
                <div className="flex justify-between">
                    {logos.map((logo, index) => (
                        <Logo key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;

