import React, {useState} from "react";
import styles from "../styles/pages/Home.module.css";
import Emoji from "../components/UI/Emoji";
import StyledButton from "../components/UI/StyledButton";
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";

const CookieConsent = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);
    const [consentState, setConsentState] = useState(!!cookies['consent']) // to trigger render
    const [welcomeMessageInput, setWelcomeMessageInput] = useState('');
    const [didSubmitWelcomeMessage, setDidSubmitWelcomeMessage] = useState(false)

    const setOrRemoveCookie = () => {
        if (consentState) {
            removeCookie('consent')
            removeCookie('welcome_message')
            console.log(cookies)
            setConsentState(false)
        } else {
            setConsentState(true)
            const dateIn6Months = new Date();
            dateIn6Months.setDate(new Date().getDate()+150);
            setCookie('consent', true, {expires: dateIn6Months})
        }
    }

    const setWelcomeMessage = () => {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate()+1);
        console.log(tomorrow)
        setCookie("welcome_message", welcomeMessageInput, { expires: tomorrow })
        setWelcomeMessageInput('')
        setDidSubmitWelcomeMessage(true)
    }
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>Can I place a cookie on your computer? {<Emoji symbol={"🍪"}/>}</h1>
            <p className={styles.content}>
                Since there is no other way except manually parsing the URL to this site, I suppose you have reached this page by reading my post about cookies, {<NavLink to={'post2'}>Demystifying the cookie</NavLink>}. If not, read that and come back here afterwards. So, let's create a cookie!
                To avoid risking heavy fines due to GDPR regulations, I am now asking you consent to place a cookie on your computer. It will expire in 6 months or until you remove your consent.
            </p>
            <p className={styles.content}>
                <StyledButton buttonTitle={consentState ? "Remove consent" : "Give consent"} clicked={setOrRemoveCookie}/>
            </p>
            { consentState ? <div>
                <p className={styles.content}>
                    You have now given consent and you should be able to see the cookie I have just set! You can see it by following the steps that I mentioned in the blog post. There should be a cookie with the name consent and value of true. You might have to refresh the page. If you remove the consent and refresh the page, the cookie should be deleted.
                </p>
                <p className={styles.content}>
                    Alright, so far so good. Let's now create a cookie together based on some content that you write here on my site. The thing that you will write will be a welcome message for yourself when you visit my site another time. Remember, what you write is stored locally on your computer, it is not stored on my webserver.
                </p>
                <p className={styles.content}>
                    {<input className='input half-width'
                            placeholder={"type your own welcome message here..."}
                            value={welcomeMessageInput}
                            onChange={event => {
                                setDidSubmitWelcomeMessage(false)
                                setWelcomeMessageInput(event.target.value)
                            }
                            }/>}
                </p>
                <p className={styles.content}>
                    Now that you have written your welcome message, save it and go to the the {<NavLink to={'/'}>home page</NavLink>} to see the message.
                </p>
                <p>
                    <StyledButton buttonTitle={didSubmitWelcomeMessage ? "Saved" : "Save Message"} clicked={setWelcomeMessage}/>
                </p>
                <p className={styles.content}>
                    Lastly, if you remove the consent, all the cookies will be deleted including your welcome message. Try it out and play around with it while you are inspecting the cookies page. You might have to refresh the page to see the value of the cookies being updated.
                </p>
            </div> : null }
        </article>
    )
}

export default CookieConsent;