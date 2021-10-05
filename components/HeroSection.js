import style from "../styles/HeroSection.module.css"

export default function HeroSection() {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.figuresWraper}>
                <svg className={style.lillaCirkel} viewBox="0 0 212 106">
                    <defs>
                        <linearGradient id="lilla-linear-gradient" x1="572" y1="313" x2="784" y2="313" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#AB78FE"/><stop offset="1" stopColor="#E884FF"/>
                        </linearGradient>
                    </defs>
                    <path d="M678,260A106,106,0,0,0,572,366H784A106,106,0,0,0,678,260Z" transform="translate(-572 -260)"/>
                </svg>
                <svg className={style.yellowCirkel} viewBox="0 0 212 106">
                    <defs>
                        <linearGradient id="yellow-linear-gradient" x1="572" y1="313" x2="784" y2="313" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FFF490"/><stop offset="1" stopColor="#FFCF6E"/>
                        </linearGradient>
                    </defs>
                    <path d="M678,260A106,106,0,0,0,572,366H784A106,106,0,0,0,678,260Z" transform="translate(-572 -260)"/>
                </svg>
                <svg viewBox="0 0 209 209" className={style.orangeCirkel}>
                    <defs>
                        <linearGradient id="yellow-full-linear-gradient" y1="104.5" x2="209" y2="104.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fff490"/>
                            <stop offset="1" stopColor="#fa8483"/>
                        </linearGradient>
                    </defs>
                    <circle cx="104.5" cy="104.5" r="104.5"/>
                </svg>
                <svg viewBox="0 0 209 209" className={style.redCirkel}>
                    <defs>
                        <linearGradient id="red-full-linear-gradient" y1="104.5" x2="209" y2="104.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#FF767A"/>
                            <stop offset="1" stopColor="#FF7DC2"/>
                        </linearGradient>
                    </defs>
                    <circle cx="104.5" cy="104.5" r="104.5"/>
                </svg>
                <svg className={style.blueTriangle} viewBox="0 0 422.85 327">
                    <defs>
                        <linearGradient id="blue-linear-gradient" x1="217.82" y1="-38.51" x2="210.41" y2="384.28" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#95d4f6"/>
                            <stop offset="1" stopColor="#9cfcd1"/>
                            <stop offset="1" stopColor="#ffc897"/>
                        </linearGradient>
                    </defs>
                <polygon points="422.35 327 422.85 326.23 211.43 0 0 326.23 0.5 327 422.35 327"/>
                </svg>
                <svg className={style.blueSquare} viewBox="0 0 237 237">
                    <defs>
                    <linearGradient id="blue-square-linear-gradient" x1="-3.37" y1="-4.82" x2="249.24" y2="250.79" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#68c8f6"/><stop offset="1" stopColor="#c8c8f6"/>
                    </linearGradient>
                </defs>
                <rect width="237" height="237"/>
                </svg>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.backDevIcon}>
                    <h4>{"</>"}</h4>
                </div>
                <div className={style.sectionText}>
                    <h1>Web</h1>
                    <h1>Mordern</h1>
                    <h1>Solution.</h1>
                    
                </div>
            </div>
        </div>
    )
}
