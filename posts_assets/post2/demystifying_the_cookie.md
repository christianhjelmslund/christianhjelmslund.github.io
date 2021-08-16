# 

<br/>

<div style="text-align: center;">

### HTTP

</div>

HTTP is a whole different topic and one could make hundreds of posts about HTTP. But, to dumb it down and simplify it a lot (!), HTTP is the protocol that we use such that the client (e.g. you and your browser for example) can communicate with a web server (you are communicating with one right now). 

A protocol is basically a set of predefined rules, that both parties agree to communicate over. In a classroom, the protocol is that if you want to say something, you raise your hand. Or if you send a letter, the protocol says that you have to provide a stamp, zip code, address, name of recipient, etc. That's just the predefined rules we have agreed upon to make sure that we are all on the same page and that your letter will reach the correct person. When you communicate over the internet, you send packets to other entities on the internet and to make sure your packets reach the correct destination, you (e.g. your browser, router, internet providers, and much more) makes sure that these packets contain some information about a destination IP address, the number of bytes each packet contains etc.


<div style="text-align: center;">

### Ok, cool - why did I need to know that?

</div>

As mentioned earlier in the teaser, cookies help maintain the state and operations you have performed on a website, and that is because HTTP, e.g. the protocol, is a stateless protocol, which means it does not keep track of what your previous packets contained and how they are linked together. Every packet you sent should in isolation be meaningful. So, what happens if you add a few items to a shopping basket and you refresh the site or visit it later? The items are still there, even though I just said that the packets you sent are discarded after use.


<div style="text-align: center;">

![https://media.giphy.com/media/FbhvYtCgfa170yRpV9/giphy.gif](https://media.giphy.com/media/FbhvYtCgfa170yRpV9/giphy.gif)


### Cookie, let me help you find one!

</div>

The packets that you send over HTTP could contain information such as receiver IP address, the actual data load, and a lot of other stuff, where some of this other stuff is cookies. So, when you add something to a shopping cart, there will be stored a piece of information in your browser (e.g. on your computer). For the subsequent requests you send, the browser will make sure to send this piece of information along. When the webserver receives the request to serve you, it will also receive this piece of information and show you customized content based on this piece of information. So, let's see how many cookies you have stored in your current browsing session. 

**Google Chrome (I'm sorry Safari, Mozilla and Edge)**

`right-click` anywhere on this page and click on `inspect`. A window will pop up and in the navigation bar, you should be able to see something called `Application` (If you can't see `Application`, try to drag the window towards the left to expand it - see image below).  Click on it and on the left there should be a pane called `Storage`, that contains a subsection called `Cookies` which you can expand. Here you will see a list of cookies and it might look a bit overwhelming. If you see, there the cookie has information about the name of the cookie, the value, the domain etc. As you can see, right now (if this is the first time you read this blog and haven't been asked about Cookie consent yet), none of the cookie's Domain should be associated with my site. 

![https://raw.githubusercontent.com/christianhjelmslund/christianhjelmslund.github.io/master/posts_assets/post2/cookies_in_chrome.png](https://raw.githubusercontent.com/christianhjelmslund/christianhjelmslund.github.io/master/posts_assets/post2/cookies_in_chrome.png)

### Let me save a cookie on your computer

Okay, please click [here](/#/cookie_consent) and it will take you to a page where we can set a cookie.
