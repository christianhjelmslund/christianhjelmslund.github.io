import React from "react";
import styles from "../styles/pages/Home.module.css";
import Emoji from "../components/UI/Emoji";
import {NavLink} from "react-router-dom";

const Services = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>Services {<Emoji symbol={"👨‍💻"}/>}</h1>
            <p className={styles.content}>
                As can be seen from the {<NavLink to={'about'}>About</NavLink>} page, I am currently employed and doing my thesis, so when I refer to services I am not looking for a coding gig, but smaller tasks such as:
            </p>
            <ul>
                <li>
                    Resume reviews
                </li>
                <li>
                    Coding help/reviews (if I can help you with that problem)
                </li>
                <li>
                    Tips if you want to consider a career path as a Software Engineer
                </li>
                <li>
                    Project/idea feedback
                </li>
                <li>
                    General inquiries
                </li>
            </ul>
            <h1 className={styles.subsection}>Quick background</h1>
            <p className={styles.content}>
                You might think I'm being a bit overconfident listing all these services I offer since I am not accomplished yet and still studying - I understand this logic. Therefore, I'll quickly just paint a more clear picture of me and what I think I can offer. I am entering my last semester, which means I have studied Computer Science and Engineering related topics for 5 years. When I started my degree in 2016, I had never coded once before and I can say that I was one of the only ones which had not. The first semester was the most challenging one for me during these 5 years, so if you are in a position where you are about to start University or you are struggling with what is considered "basic" coding challenges and comparing yourself with your fellow peers, I have been in your shoes. Besides this, I have had various student jobs, that were relatively different which is also why I feel I have a broad skill-set and essentially why I think I have services to offer.
            </p>
            <ul>
                <li>
                    Sole iOS developer hired by my University
                </li>
                <li>
                    Half year interning full time, where DevOps, CI/CD, microservices, QA and writing high-performance code
                </li>
                <li>
                    Analyst/consulting
                </li>
                <li>
                    Full stack developer in fast-paced startup/scaleup
                </li>
            </ul>
            More detailed explanation can be seen in my <a rel="noopener noreferrer" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/christianhjelmslund-61487.appspot.com/o/resume.pdf?alt=media&token=5db45a1a-132e-4544-9ce1-39fd202b627c">resume</a>
            <p className={styles.content}>
                I would also say that I am easy to talk to and good at understanding people and put myself in their position. For all the services I list above, I would see it as two-way communication, where we would discuss it together and have a dialogue (more or less).
            </p>
            <p className={styles.content}>
                Despite all of this, I am willing to do this on some sort of don't-pay-me-if-you-are-unsatisfied-basis. You can see my Github, LinkedIn, resume, etc. but in the end, I have no reviews and it might be hard for me to justify to you, why I would be good at resume reviews for example. I am also just interested in expanding my network and talk to people, so I think I would get something out of it nonetheless. Lastly, you can always reach out and give me some context and I'll let you know if I feel I can offer something of value or not.
            </p>

            <h1 className={styles.subsubsection}>Resume review</h1>
            <p className={styles.content}>
                The resume review would mainly be in regards to candidates who have a tech or engineering background. I have been following various career groups, had different jobs and I think I have a good feeling about how to create a good resume. If you are part of IDA (Danish engineering union), they do offer these kinds of services <a rel="noopener noreferrer" target="_blank" href="https://studerende.ida.dk/fra-studie-til-job/cv-assistenten/">here</a>. I haven't used it myself, but you can try, and if you don't like it and still feel you'd like some consulting, you can reach out to me and we can take a look.
            </p>

            <h1 className={styles.subsubsection}>Coding help/review or IT concepts explained</h1>
            <p className={styles.content}>
                Obviously, this one is very broad. There are so many languages, tools, techniques, and niches within software engineering, so if you need help with something really specific, I would encourage you to write a post on Stackoverflow or Reddit. However, if you are struggling with general concepts and want someone to discuss this, I could be of help. Examples could be stuff like how does the internet work, in what way are front end and back end related, what is a blockchain, etc. Again, I strongly encourage you to use the information available and you can definitely find answers that are more clear and better than mine, but I know it is nice to have a person to ask questions to.
            </p>

            <h1 className={styles.subsubsection}>Tips if you want to consider a career path as a Software Engineer</h1>
            <p className={styles.content}>
                Do you wonder how it is to be a software engineer? Feel free to ask everything from what is the first thing I do when I get into work, to perks, work-life balance, salary, what I don't like, and more. I would happily be available and discuss that.
            </p>

            <h1 className={styles.subsubsection}>Project/idea feedback</h1>
            <p className={styles.content}>
                If you have an idea about a potential project/startup, but you aren't sure whether it is feasible from a technical perspective or if it is a good idea in general, I would love to discuss it and chip in with my opinion about it.
            </p>

            <h1 className={styles.subsubsection}>General inquiry</h1>
            <p className={styles.content}>
                Be creative. Based on what you see here and my profile in general, if there is something you'd think I could help with let me know. This can be everything from being a teaching assistant to a mix of everything above. I don't even know.
            </p>
        </article>
    )
}

export default Services