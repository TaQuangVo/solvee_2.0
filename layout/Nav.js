import React from 'react'
import style from "../styles/Nav.module.css"
import Image from "next/image"
import Link from "next/link"

//image
import contactUsIcon from "../public/contacts.png"
import emailIcon from "../public/email1.png"
import facebookIcon from "../public/facebook.png"
import tiktokIcon from "../public/tik-tok.png"
import instagramIcon from "../public/instagram.png"

export default function Nav() {
    return (

            <div className={style.container}>
                <div className={style.containerBackdrop}></div>
                <div className={style.contentWraper}>
                    <div className={style.logo}>
                        <h2>Solvee</h2>
                        <span>.</span>
                    </div>
                    
                    <div className={style.icons}>
                        <div className={style.contactIcon}>
                            <Image src={contactUsIcon} alt="Freepik Contact Mail Icon" layout="responsive" objectFit="fill"/>
                        </div>
                        <div className={style.divider}></div>
                        <div className={style.hambuger}></div>
                    </div>
                    <div className={style.slideIn}>
                        <div className={style.navBackdrop}></div>
                        <div className={style.navHeader}>
                            <span>Nav meny</span>
                            <div className={style.cross}></div>
                        </div>
                        <div className={style.navBody}>
                            <div className={style.linkWraper}>
                                <Link href="#">Home</Link>
                                <Link href="#">About</Link>
                                <Link href="#">Service</Link>
                                <Link href="#">Contact</Link>
                            </div>
                        </div>
                        <div className={style.navFooter}>
                            <div className={style.mediaIcon}>
                                <Image src={instagramIcon} alt="Freepik Icon" layout="responsive" objectFit="fill"></Image>
                            </div>
                            <div className={style.mediaIcon}>
                                <Image src={facebookIcon} alt="Freepik Icon" layout="responsive" objectFit="fill"></Image>
                            </div>
                            <div className={style.mediaIcon}>
                                <Image src={tiktokIcon} alt="Freepik Icon" layout="responsive" objectFit="fill"></Image>
                            </div>
                            <div className={style.mediaIcon}>
                                <Image src={emailIcon} alt="Freepik Icon" layout="responsive" objectFit="fill"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
