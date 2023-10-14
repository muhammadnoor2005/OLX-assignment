import styles from "./Footer.module.scss";
import Link from "next/link";


export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerUpperDiv}>
                <div>
                    <h1>POPULAR CATEGORIES</h1>
                    <br />
                    <span>Cars</span>
                    <span>Flats for rent</span>
                    <span>Mobile Phones</span>
                    <span>Jobs</span>
                </div>
                <div>
                    <h1>TRENDING SEARCHES</h1>
                    <br />
                    <span>Bikes</span>
                    <span>Watches</span>
                    <span>Books</span>
                    <span>Dogs</span>
                </div>
                <div>
                    <h1>ABOUT US</h1>
                    <br />
                    <Link href={"https://dubizzlegroup.com/"}><span>About Dubizzle Group</span></Link>
                    <Link href={"https://blog.olx.com.pk/"}><span>OLX Blog</span></Link>
                    <Link href={"https://help.olx.com.pk/hc/en-us/articles/4403042207631-How-can-you-contact-Us-"}><span>Contact Us</span></Link>
                    <Link href={"https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website"}><span>Olx For Businesses</span></Link>
                </div>
                <div>
                    <h1>OLX</h1>
                    <br />
                    <Link href={"https://help.olx.com.pk/hc/en-us"}><span>Help</span></Link>
                    <Link href={"https://www.olx.com.pk/sitemap/most-popular"}><span>Sitemap</span></Link>
                    <Link href={"https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use-"}><span>Terms of use</span></Link>
                    <Link href={"https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information"}><span>Privacy Policy</span></Link>
                </div>
                <div>
                    <h1>FOLLOW US</h1> 
                    <div className={styles.followUsDiv}>
                        <Link href={"https://twitter.com/OLX_Pakistan"}><img src="/icons/twitterIcon.svg" alt="twitterIcon" /></Link>
                        <Link href={"https://www.facebook.com/olxpakistan"}><img src="/icons/fbIcon.svg" alt="fbIcon" /></Link>
                        <Link href={"https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1"}><img src="/icons/playIcon.svg" alt="playIcon" /></Link>
                        <Link href={"https://www.instagram.com/olx.pakistan/"}><img src="/icons/instaIcon.svg" alt="instaIcon" /></Link>
                    </div>
                    <div>
                        <div className={styles.getAppDiv}>
                            <Link href={"https://apps.apple.com/pk/app/olx-pakistan/id1551315538"}><img src="/icons/appStore.svg" alt="appStore" /></Link>
                            <Link href={"https://play.google.com/store/apps/details?id=com.olx.pk"}><img src="/icons/playStore.svg" alt="appStore" /></Link>
                            <Link href={"https://appgallery.huawei.com/#/app/C104375435"}><img src="/icons/appGalleryIcon.svg" alt="appGallery" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerLowerDiv}>
                <span>Free Classifieds in Pakistan</span>
                . © 2006-2023 OLX
            </div>
        </div>
    )
}