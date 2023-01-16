import self from "../img/self.png"
// import mock from "../img/mock.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Shreel",
    lastName: "Bansal",
    resume: "Resume", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "BTECH STUDENT AT NIT SILCHAR"
        },
        {
            emoji: "📧",
            text: "shreelbansal412@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/sb412/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://github.com", //ggole drive resume link
            icon: "fa fa-udefa fa-file-pdf-o",
            label: 'pdf'
        },
        {
            link: "https://www.linkedin.com/in/shreel-bansal-a0a8b81b7",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Shreel. I'm a btech student at Nit Silchar. I am currently studying ECE at NITS",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github'],
            exposedTo: ['nodejs', 'mongo db']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        }
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ],
    myArticles :[ // This is where your articles will be detailed
        {
            title: "Article 1",
            text2: "This is a small article about XYZ",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            //source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Article 2",
            text2: "This is article about XYZ",
            live: "https://paytonpierce.dev",
            //source: "https://github.com/paytonjewell",
            image: mock2
        }
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ],
    courses: [ // This is where courses will be detailed
        {
            title: "Course 1",
            live: "https://paytonpierce.dev",
            text1: "This is my course about XYZ haiuefh9uear ufhfeaufheaur ufeahf0earehea0hd09ea eaaeieahfoihdfofe0esjaifesifusaivbfsav hsouahsuhfroushfurshfa", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Course 2",
            live: "https://paytonpierce.dev",
            text1: "This is my course about PQR which comprises of abc topics and pqr tech stack hdaofeohauf ijbcoafoeahrfie hfieahifheapihfpieh oieahfiheaifhea ",
            source: "https://github.com/paytonjewell",
            image: mock2
        }
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}