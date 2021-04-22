import React from "react";
import styles from "../../styles/PostPage.module.css";
import Emoji from "../Emoji";
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>About me {<Emoji symbol={"🤙🏼"}/>}</h1>
            <p className={styles.content}>
                I'm Christian Hjelmslund and I'm currently pursuing a Master's in Computer Science and Engineering at the Technical University of Denmark. I also work as a Student Software Engineer {<a rel="noopener noreferrer" target="_blank" href="https://www.veo.co/">Veo Technologies</a>} in the web development team. I am passionate about tech, innovation, investing, and science. This means that I can go from developing a personal portfolio tracker, buy call options, to deploy a smart contract on a blockchain. It can also mean happily cheering on while watching a live stream of a SpaceX rocket being deployed into orbit (#nerd). However, it is not all about serious matters. I am a happy person that tries to bring a positive attitude wherever I go. I enjoy Friday nights out with friends, traveling, meeting new people, investing, working out, and lastly, I have a great passion for football.
            </p>
            <h1 className={styles.title}>What is the point of this website? <Emoji symbol={"🤔"}/></h1>
            <p className={styles.content}>
                I'd say there are several points with this site. First and foremost, it should be seen as a digital platform that I can use to play with, develop some fun tools, and act as a sort of interactive resume. This is stuff like tracking my own investment portfolio, links to social media platforms, and more. Honestly, I'm not even sure yet.
            </p>
            <p className={styles.content}>
                Besides treating this as my own digital multi-purpose swiss army knife, I'd also like to be able to write some posts for everyone to read. As of now, the core focus will be on technology, software development, and the life of a developer but I will also write about investments, financial independence, and maybe if I feel daring, I might even touch the lifestyle realm. I know that combining all this stuff might sound a bit messy from a user experience point of view, but I think it'll be fine. Again, view it as a place where I can learn, create stuff, write posts, etc. but it just happens to be public. Hopefully, the posts can be interesting or relevant to some of you.
            </p>
            <p className={styles.content}>
                If I were to designate a target audience, I'd say it is people who are interested in tech or at least curious about it. If you are the type of person that has wondered what a cookie actually is, but never actually taken action to find out, you might enjoy it. Some of the topics will also be aimed at people who already know how to code, build software, and in general have a high knowledge within the domain. However, as a future engineer, it is crucial(!) to be able to explain the stuff you do to non-technical people. I hope that I can learn that here.
            </p>
            <p className={styles.content}>
                Alright, so I think you get the gist. I'd say a good starting point is to read the post on why I build this site the way I did. {<NavLink to={'posts/post1'}>Enjoy️</NavLink>}
            </p>
        </article>
    )
}

export default About