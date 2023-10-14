import Link from "next/link"
import styles from "./post.module.scss"
import SellItemDiv from "@/components/SellItemDiv/SellItemDiv"
import { useState } from "react"

export default function(){
    const [mobileSellBool,setMobileSellBool] = useState(false);
    const [accessoriesSellBool,setAccessoriesSellBool] = useState(false);
    return(
        <div>
            <div className={styles.postPageHeader}>
                <Link href={"/"}><img src="/images/backButtonBlack.png" alt="backButton" /></Link>
                <img src="/images/olxLogo.png" alt="olxLogo" />
            </div>
            <div className={styles.postYourAd}>POST YOUR AD</div>

            <div className={styles.chooseCategoryDiv}>
                <div className={styles.chooseCategoryyHeading}><span>CHOOSE A CATEGORY</span></div>
                <div className={styles.sellItemsDiv}>
                    <div>
                        <div onClick={()=> {setMobileSellBool(true);setAccessoriesSellBool(false)}}>
                            <SellItemDiv name="Mobiles" imgUrl="/icons/sellIcons/mobiles.svg" imgAlt="mobile" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo" />
                        </div>
                        <SellItemDiv name="Vehicles" imgUrl="/icons/sellIcons/vehicles.svg" imgAlt="vehicles" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Property for Sale" imgUrl="/icons/sellIcons/propertySale.svg" imgAlt="propertySale" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Property for Rent" imgUrl="/icons/sellIcons/property.svg" imgAlt="propertyRent" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Electronics & Home Appliances" imgUrl="/icons/sellIcons/business.svg" imgAlt="electronics" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Bikes" imgUrl="/icons/sellIcons/bike.svg" imgAlt="bikes" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Business, Industrial & Agriculture" imgUrl="/icons/sellIcons/business.svg" imgAlt="business" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Services" imgUrl="/icons/sellIcons/services.svg" imgAlt="services" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Jobs" imgUrl="/icons/sellIcons/jobs.svg" imgAlt="jobs" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Animals" imgUrl="/icons/sellIcons/animal.svg" imgAlt="animals" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Furniture & Home Decor" imgUrl="/icons/sellIcons/furniture.svg" imgAlt="furniture" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Fashion & Beauty" imgUrl="/icons/sellIcons/fashion.svg" imgAlt="fashion" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Books, Sports & Hobbies" imgUrl="/icons/sellIcons/books.svg" imgAlt="books" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>

                        <SellItemDiv name="Kids" imgUrl="/icons/sellIcons/kids.svg" imgAlt="kids" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/>   
                    </div>
                    <div className={styles.chooseCategorySecondDiv}>
                        <div className={mobileSellBool?styles.chooseCategorySecondDivShow : styles.chooseCategorySecondDivHide}>
                            <SellItemDiv name="Tablets"/>   
                            <div onClick={() => {setAccessoriesSellBool(true)}}>
                                <SellItemDiv name="Accessories" arrowForwImg="/icons/arrowDown.svg" logoAlt="logo"/> 
                            </div> 
                            <SellItemDiv name="Smart Watches"  />   
                            <SellItemDiv name="Mobile Phones" />   
                        </div>
                    </div>
                    <div className={styles.chooseCategoryThirdDiv}>
                        <div className={accessoriesSellBool ? styles.accessoriesShow : styles.accessoriesHide}>
                            <SellItemDiv name="Charging Cables"  />
                            <SellItemDiv name="Converters"  />
                            <SellItemDiv name="Chargers"  />
                            <SellItemDiv name="Screen"  />
                            <SellItemDiv name="Screen Protectors"  />
                            <SellItemDiv name="Mobile Stands"  />
                            <SellItemDiv name="Ring Lights"  />
                            <SellItemDiv name="Selfie Sticks"  />
                            <SellItemDiv name="Power Banks"  />
                            <SellItemDiv name="Headphones"  />
                            <SellItemDiv name="Earphones"  />
                            <SellItemDiv name="Covers & Cases"  />
                            <SellItemDiv name="Exernal Memory"  />
                            <SellItemDiv name="Other Accessories"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}