import React, {useState} from "react";
import styles from "../styles/pages/Home.module.css";
import Emoji from "../components/UI/Emoji";
import StyledButton from "../components/UI/StyledButton";
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";

const CookieConsent = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const [consentState, setConsentState] = useState(!!cookies['consent'])

    const setOrRemoveCookie = () => {
        if (consentState) {
            removeCookie('consent')
            setConsentState(false)
        } else {
            setConsentState(true)
            const dateIn6Months = new Date();
            dateIn6Months.setDate(new Date().getDate()+150);
            setCookie('consent', true, {expires: dateIn6Months})
        }
    }

    return (
        <article className={styles.article}>
            <h1 className={styles.title}>Can I place a cookie on your computer? {<Emoji symbol={"🍪"}/>}</h1>
            <p className={styles.content}>
                Since there is no other way except manually parsing the URL to this site, I suppose you have reached this page by reading my post about cookies, {<NavLink to={'post2'}>Demystifying the cookie</NavLink>}. If not, read that and come back here afterwards. So, let's create a cookie!
                To avoid risking heavy fines due to GDPR regulations, I am now asking you consent to place a cookie on your computer. It will expire in 6 months or until you remove your consent. But don't worry, I am not using it for anything and if I in the future will use cookies to track something specific, I would ask for your consent again.
            </p>
            <p className={styles.content}>
                <StyledButton buttonTitle={consentState ? "Remove consent" : "Give consent"} clicked={setOrRemoveCookie}/>
            </p>
            { consentState ? <div>
                <p className={styles.content}>
                    You have now given consent and you should be able to see the cookie I have just set! You can see it by following the steps that I mentioned in the blog post. There should be a cookie with the name consent and value of true. You might have to refresh the page. If you remove the consent and refresh the page, the cookie should be deleted.
                </p>
            </div> : null }
        </article>
    )
}

export default CookieConsent;