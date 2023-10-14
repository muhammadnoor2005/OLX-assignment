import { useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import {Input} from "antd";

export default function Header(){
    const [loginDivBool,setLoginBool] = useState(false);
    const [loginOptionsBool,setLoginOptionsBool]  = useState(false);
    const [emailLoginBool,setEmailLoginBool] = useState(false);
    const [emailValid,setEmailValid] = useState(false);
    const [createPasswordDivBool, setCreatePasswordDivBool] = useState(false);
    const [createPassVal,setCreatePassVal] = useState('');
    const [createConfirmPassVal,setCreateConfirmPassVal] = useState('');

    const validateEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const emailCheck = validateEmail(e.target.value);
        setEmailValid(emailCheck);
    }

    const handleCreatePass = (e) => {
        setCreatePassVal(e.target.value);
        
        if ((createConfirmPassVal.length >= 6 || createPassVal.length >= 6) && createPassVal === createConfirmPassVal){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }   
        
        console.log(createPassVal,createConfirmPassVal);
    }

    const handleCreateConfirmPass = (e) => {
        if ((createConfirmPassVal.length >= 6 || createPassVal.length >= 6) && createPassVal === createConfirmPassVal){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }
        setCreateConfirmPassVal(e.target.value);
        console.log(createPassVal,createConfirmPassVal);
    };

    const passLengthCheck = () => {
        if (createConfirmPassVal.length <= 6 || createPassVal.length <= 6){
            alert("Minimum length must be 6");
        }
        return;
    };

    const passValidate = () => {
        passLengthCheck();
        if (createPassVal !== createConfirmPassVal){
            alert("Password does not match");
            return;
        };
    }
    
    return(
        <div className={styles.header}>
            <div className={styles.upperDiv}>
                <Link href={""}><img src="/images/olxLogoBlue.png" alt="olxLogoBlue"/></Link>
                <div >
                    <Link href={""} className={styles.motor}>
                        <img src="/images/carLogo.png" alt="carLogo" />
                        <span>MOTORS</span>
                    </Link>
                </div>

                <div >
                    <Link href={""} className={styles.property}>
                        <img src="/images/buildingLogo.png" alt="propertyLogo" />
                        <span>PROPERTY</span>
                    </Link>
                </div>
            </div>
            <br/>

            <div className={styles.lowerDiv}>
            <Link href={""}><img src="/images/olxLogoBlack.png" alt="olxLogoBlack" /></Link>
                <div className={styles.locationInput}>
                    <img src="/images/searchIconGreen.png" alt="locationSearchIcon" className={styles.locationSearchIcon}/>
                    <input type="text" value="Pakistan" />
                    <img src="/icons/arrowDown.svg" className={styles.arrowDown}/>
                </div>

                <div className={styles.itemSearchBox}>
                    <input type="text" placeholder="Find Cars, Mobile Phones and more..."/>

                    <div className={styles.itemSearchButton}>
                        <img src="/images/searchIconWhite.png" alt="searchIconWhite" />
                    </div>
                </div>

                <span className={styles.loginLink} onClick={() => {setLoginBool(true);setLoginOptionsBool(true)}}>Login</span>

                <div className={styles.sellButton}>
                    <Link href={"/post"}><button>
                        <img src="/icons/sellIconBorder.svg" alt="sellButton" className={styles.sellButtonBg}/>
                        <div className={styles.sellText}>
                            <img src="/icons/addIcon.svg" alt="addIcon" />
                            <span>SELL</span>
                        </div>
                    </button>
                    </Link>
                </div>
                    {/* Code for login options */}

                <div className={loginDivBool ? styles.loginOptionsBg : styles.loginOptionsBgHide}>
                    <div className={loginOptionsBool ? styles.loginOptionsDiv :styles.loginOptionsDivHide}>
                        <div className={styles.loginBoxCross} onClick={() => {setLoginBool(false)}}><img src="/images/xIcon.png" alt="xIcon" /></div>
                        <div className={styles.loginBoxUpperPart}>
                            <img src="/images/olxLogo.png" alt="olxLogo"/>
                            <br />
                            <h1>Welcome to OLX</h1>
                            <br />
                            <span>The trusted company of buyers <br />and sellers.</span>
                        </div>
                        <br />
                        <div className={styles.loginOptions}>
                            <div>
                                <img src="/icons/iconGoogleLogin.svg" alt="googleIcon" />
                                <span>Continue with Google</span>
                            </div>
                            <div>
                                <img src="/icons/iconFblogin.svg" alt="fbIcon" />
                                <span>Continue with Facebook</span>
                            </div>
                            <div onClick={() => {setEmailLoginBool(true);setLoginOptionsBool(false);}}>
                                <img src="/icons/iconMailLogin.svg" alt="emailIcon" />
                                <span >Continue with Email</span>
                            </div>
                            <div>
                                <img src="/icons/iconPhoneLogin.svg" alt="phoneIcon" />
                                <span>Continue with Phone</span>
                            </div>
                        </div>
                        <div className={styles.loginOptionsLowerDiv}>
                            <p>By continuing, you are accepting <br /><span>OLX Terms of use</span> and<span> Privacy Policy</span></p>
                        </div>
                    </div>
                        
                    <div className={emailLoginBool ? styles.emailLoginDiv:styles.emailLoginDivHide}>
                        <div className={styles.backCrossButton}>
                            <img src="/images/backButton.png" alt="back" onClick={() => {setLoginOptionsBool(true);setEmailLoginBool(false);}}/>
                            <img src="/images/xIcon.png" alt="cross" onClick={() => {setLoginBool(false);setEmailLoginBool(false)}}/>
                        </div>
                        <div className={styles.emailLoginDivOlxLogo}>
                            <img src="/images/olxLogo.png" alt="olxLogo" />
                            <br />
                            <span>Enter your Email</span>
                        </div>
                        <br />
                        <div className={styles.emailInputDiv}>
                            <Input type="email" placeholder="Email"className={styles.emailInput} onChange={handleEmailChange}/> 
                            <button className={emailValid ? styles.nextButtonEnabled:styles.nextButtonDisabled} disabled={!emailValid} onClick={() =>{setCreatePasswordDivBool(true);setEmailLoginBool(false);setEmailValid(false)}}>Next</button>
                        </div>
                        <span>We won't reveal your email to anyone else nor use it to send you <br /> spam.</span>
                    </div>

                    <div className={createPasswordDivBool ? styles.createPasswordDivShow: styles.createPasswordDivHide}>
                        <div className={styles.loginBoxCross}>
                            <img src="/images/xIcon.png" alt="xIcon" onClick={() => {setLoginBool(false);setCreatePasswordDivBool(false)}}/>
                        </div>
                        <div className={styles.createPasswordDivOlxLogo}>
                            <img src="/images/olxLogo.png" alt="olxLogo" />
                            <br /><br />
                            <span>Create a password to log in faster next time</span>
                        </div>
                        <br />
                        <div className={styles.createPasswordFieldsDiv}>
                            <p>You are creating a password for<span>stile12@gmail.com.</span><br />This will help you login faster next time</p>
                            <br />
                            <Input type="password" placeholder="New password" className={styles.createPasswordFeild} onChange={handleCreatePass}/>
                            <span>Use minimum 6 characters, and at least one letter and one number</span>
                            <Input type="password" placeholder="Confirm new password" className={styles.createPasswordFeild} onChange={handleCreateConfirmPass}/>
                        </div>
                        <br /><br />
                        <button className={emailValid ? styles.createPassButtonEnabled:styles.createPassButtonDisabled} disabled={!emailValid} onClick={passValidate} >Create Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}