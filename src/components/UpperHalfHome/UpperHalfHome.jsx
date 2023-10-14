import styles from "./UpperHalfHome.module.scss";
import Link from "next/link";
export default function UpperHalfHome(){
    return(
        <div>
            <div className={styles.upperCategoryDiv}>
                <div className={styles.allCategoriesText}>
                    <span>All Categories</span>
                    <img src="/icons/arrowDown.svg" alt="" />
                </div>
                <div className={styles.upperCategorySpans}>
                    <span>Mobile Phones</span>
                    <span>Cars</span>
                    <span>Motorcycles</span>
                    <span>Houses</span>
                    <span>TV - Video - Audio</span>
                    <span>Tablets</span>
                    <span>Land & Plots</span>
                </div>
            </div>
            <div className={styles.sliderImg}>
                <img src="/images/slider.jpeg" alt="slider" />
            </div>

            <div className={styles.lowerCategoryDiv}>
                <span className={styles.allCategoriesHeading}>All categories</span>
                <div className={styles.lowerCategoriesDivs}>
                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/mobile.png" alt="mobile" />
                            <span>Mobiles</span>
                        </div>
                    </Link >

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/vehicles.png" alt="vehcile" />
                            <span>Vehicles</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/propertyForSale.png" alt="propertyForSale" />
                            <span>Property For Sale</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/propertyForRent.png" alt="propertyForRent" />
                            <span>Property For Rent</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/electronics.png" alt="electronics" />
                            <span>Electronics & Home Appliances</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/bikes.png" alt="bikes" />
                            <span>Bikes</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/business.png" alt="business" />
                            <span>Business, Industrial & Agriculture </span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/services.png" alt="services" />
                            <span>Services</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/jobs.png" alt="jobs" />
                            <span>Jobs</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/animals.png" alt="animals" />
                            <span>Animals</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/furniture.png" alt="furniture" />
                            <span>Furniture & Home Decor</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/fashion.png" alt="fashion" />
                            <span>Fashion & Beauty</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/booksSports.png" alt="books" />
                            <span>Books, Sports & Hobbies</span>
                        </div>
                    </Link>

                    <Link href="" className={styles.Link}>
                        <div>
                            <img src="/images/kids.png" alt="kids" />
                            <span>Kids</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}