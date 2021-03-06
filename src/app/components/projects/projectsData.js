export const LAPTOP =
  "https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png";
export const SCREEN_SHOTS = {
  culturaLink: require("../../assets/culturalink.png"),
  culturaLinkSm: require("../../assets/culturalink_small.png"),
  eureka: require("../../assets/eureka_meal_planner.png"),
  eurekaSm: require("../../assets/eureka_meal_planner_small.png"),
  ADP: require("../../assets/ADP.png"),
  ADPSm: require("../../assets/ADP_small.png"),
  mailChimp: require("../../assets/mail-chimp.png"),
  mailChimpSm: require("../../assets/mail-chimp_small.png"),
  PSP: require("../../assets/PSP.png"),
  PSPSm: require("../../assets/PSP_small.png"),
  myDinova: require("../../assets/my_dinova.png"),
  myDinovaSm: require("../../assets/my_dinova_small.png"),
  myGarden: require("../../assets/my-garden-ss.png"),
  myGardenSm: require("../../assets/my-garden-ss_small.png"),
  cageSmash: require("../../assets/cage-smash-ss.png"),
  cageSmashSm: require("../../assets/cage-smash-ss_small.png"),
  pineapple: require("../../assets/pineapple.png"),
  pineappleSm: require("../../assets/pineapple_small.png"),
  humdrumGrill: require("../../assets/humdrum_grill.png"),
  responseiveMessage: require("../../assets/responseive_message.png"),
  twinBridgesLake: require("../../assets/twin_bridges_lake.png"),
  twinBridgesLakeSm: require("../../assets/twin_bridges_lake_small.png"),
  theLabz: require("../../assets/the_labz.png"),
  theLabzSm: require("../../assets/the_labz_small.png")
};
export const PROJECTS = {
  eureka: {
    appTitle: "Eureka Holistic Nutrition",
    blurb:
      "A meal planner app created for Eureka Holistic Nutrition.  Generates a personalized meal plan PDF from the user's provided input.  Integrated with WordPress.",
    client: "Eureka Holistic Nutrition",
    details: ["Frontend", "Backend"],
    features: [
      {
        title: "MailChimp",
        img: ""
      },
      {
        title: "pdf-lib",
        img: ""
      }
    ],
    href: "eureka",
    languages: {
      main: "JavaScript",
      all: []
    },
    link: "http://eurekaholisticnutrition.com/meal-planner",
    scale: "Small Business Tool",
    screenShot: SCREEN_SHOTS.eureka,
    screenShotSmall: SCREEN_SHOTS.eurekaSm,
    stackLevels: ["Professional", "Frontend", "Fullstack"],
    technology: ["React", "Redux", "SASS", "Webpack", "Express", "Wordpress"]
  },
  myDinova: {
    appTitle: "myDinova",
    blurb:
      "A business diner rewards platform.  I've work as the Front End developer for Dinova since 2019.  I develop new features, optimize existing code, and search for missed edge cases.",
    client: "Dinova Inc, Alpharetta GA",
    details: ["Frontend", "UI Design", "UX Design"],
    features: [
      {
        title: "Google Maps",
        img: ""
      },
      {
        title: "Localization",
        img: ""
      },
      {
        title: "Restaurant Filter",
        img: ""
      },
      {
        title: "Cypress Testing",
        img: ""
      }
    ],
    href: "myDinova",
    languages: {
      main: "React",
      all: []
    },
    link: "https://apps.dinova.com",
    scale: "Large-Scale Application",
    screenShot: SCREEN_SHOTS.myDinova,
    screenShotSmall: SCREEN_SHOTS.myDinovaSm,
    stackLevels: ["Professional", "Frontend"],
    technology: ["React", "Redux", "SASS", "Webpack", "Cypress"]
  },
  twinBridgesLake: {
    appTitle: "Twin Bridges Lake",
    blurb:
      "A Single Page Application for Twin Bridges Lake. I was approaced by the owner of Twin Bridges Lake and asked to build a website to advertise services.  Twin Bridges Lake is very happy with the increase of business since the site has gone live.",
    client: "Twin Bridges Lake, Lawrenceville GA",
    details: ["Frontend Development", "Web Design", "Bootstrap"],
    features: [
      {
        title: "Google Maps",
        img: ""
      },
      {
        title: "Flicker API for Image Gallery",
        img: ""
      }
    ],
    href: "twinBridgesLake",
    languages: {
      main: "React",
      all: ["Bootstrap, React Bootstrap, SASS"]
    },
    link: "http://www.twinbridgeslake.fish",
    scale: "Small Business Solution",
    screenShot: SCREEN_SHOTS.twinBridgesLake,
    screenShotSmall: SCREEN_SHOTS.twinBridgesLakeSm,
    stackLevels: ["Professional", "Frontend", "Fullstack"],
    technology: [
      "React",
      "Redux",
      "SASS",
      "Express",
      "MongoDB",
      "Webpack",
      "Heroku",
      "Google Maps",
      "Flickr API"
    ]
  },
  cageSmash: {
    appTitle: "cageSmash",
    blurb:
      "A variation of Whack-a-Mole using Nicholas Cage's face!  I built this game while at The Iron Yard where placeCage.com was my instructors go to image placeholder. My first time working with DOM Manipuation, this rudamentary application is one of my favorite creations.",
    client: "Personal",
    details: ["Frontend Development", "Game Development"],
    href: "cageSmash",
    languages: {
      main: "JavaScript",
      all: [""]
    },
    link: "http://cage-smash.surge.sh/",
    scale: "Personal",
    screenShot: SCREEN_SHOTS.cageSmash,
    screenShotSmall: SCREEN_SHOTS.cageSmashSm,
    stackLevels: ["Personal", "Frontend"],
    technology: ["JavaScript", "HTML/CSS"]
  },
  ADP: {
    appTitle: "ADP Monitoring Services",
    blurb:
      "I performed as the sole frontend developer on this project. I also built out the REST API. RabbitMQ and socket.io were combined with React and Express to provide ADP with a dashboard updated with the most current status of their active services.",
    client: "ADP, Atlanta",
    details: [
      "Frontend Development",
      "Web Design",
      "Socket Connections",
      "API Design"
    ],
    href: "ADP",
    features: [
      {
        title: "Waterfall Chart",
        img: ""
      },
      {
        title: "plotly.js",
        img: ""
      }
    ],
    languages: {
      main: "MERN",
      all: ["React, Express, SASS"]
    },
    scale: "Large-Scale Application",
    screenShot: SCREEN_SHOTS.ADP,
    screenShotSmall: SCREEN_SHOTS.ADPSm,
    stackLevels: ["Professional", "Frontend", "Fullstack"],
    technology: [
      "React",
      "SASS",
      "Express",
      "MongoDB",
      "Socket.io",
      "RabbitMQ",
      "Webpack"
    ]
  },
  theLabz: {
    appTitle: "The Labz",
    blurb:
      "My previous project manager approached me asking for assistance in building a protype for his first startup.  With two weeks before his first demo, I hit create-react-app and got to work on this music collaboration tool.",
    client: "The Labz, Atlanta GA",
    details: ["Fullstack Development", "Web Design", "Audio Visualizer"],
    features: [
      {
        title: "Audio Visualizer",
        img: ""
      }
    ],
    href: "theLabz",
    languages: {
      main: "MERN",
      all: ["Express, Bootstrap, React Bootstrap, SASS"]
    },
    // link: "https://thereallabz.now.sh",
    scale: "Rapid Prototype",
    screenShot: SCREEN_SHOTS.theLabz,
    screenShotSmall: SCREEN_SHOTS.theLabzSm,
    stackLevels: ["Professional", "Frontend", "Fullstack"],
    technology: [
      "React",
      "Redux",
      "SASS",
      "Express",
      "MongoDB",
      "Webpack",
      "Audio Web API"
    ]
  },
  mailChimp: {
    appTitle: "MailChimp",
    blurb:
      "Given only a two week time frame, a partner developer and I delivered this award winning (Most Loved Website) year-end newsletter to mailChimp in the nick of time. Lazy loading with scroll dependant animations, GIF images.",
    client: "MailChimp, Atlanta",
    details: ["Frontend Development", "Web Design"],
    href: "mailChimp",
    languages: {
      main: "JavaScript / SASS",
      all: [""]
    },
    // link: "https://mailchimp.com/2016/",
    routeSuffix: "MailChimp",
    scale: "Small Design Centered Application",
    screenShot: SCREEN_SHOTS.mailChimp,
    screenShotSmall: SCREEN_SHOTS.mailChimpSm,
    stackLevels: ["Professional", "Frontend"],
    technology: ["JavaScript", "SASS"]
  },
  PSP: {
    appTitle: "PSP Printing",
    blurb:
      "A step by step design proofing system. PSP provides promotional signage to large companies such as Barnes and Nobel and Kroger. They wanted a way to streamline the process of requesting, modifying, and aprroving image proofs. Includes an alert system for instant feedback between the client and PSP allowing faster and more accurate production and delivery.",
    client: "PSP, Atlanta",
    details: ["Frontend Development", "Web Design"],
    href: "PSP",
    languages: {
      main: "Angular2",
      all: [""]
    },
    scale: "Large-Scale Application",
    screenShot: SCREEN_SHOTS.PSP,
    screenShotSmall: SCREEN_SHOTS.PSPSm,
    stackLevels: ["Professional", "Frontend"],
    technology: ["Agnular2", ".NET Core", "SASS", "Gulp"]
  },
  culturaLink: {
    appTitle: "CulturaLink",
    blurb:
      "ClutraLink was my first professional project. I performed as the sole frontend developer. The app is a complete business solution providing CulturaLink Interpretation Services with with video, voice, and document translation services as well as billing reports, revenue charts, client and interpreter management, permissions, and individual portals for client, admin, and interpreter access.",
    client: "CulturaLink, Atlanta",
    details: ["Frontend Development", "Web Design", "Data Visualization"],
    href: "culturaLink",
    languages: {
      main: "React",
      all: [""]
    },
    // link: "http://theculturalink.com/",
    scale: "Large-Scale Application",
    screenShot: SCREEN_SHOTS.culturaLink,
    screenShotSmall: SCREEN_SHOTS.culturaLinkSm,
    stackLevels: ["Professional", "Frontend", "Fullstack"],
    technology: [
      "React",
      "TypeScript",
      "Express",
      "Sequelize",
      "Jest",
      "HighCharts",
      "socket.io",
      "Videyo",
      "Webpack"
    ]
  },
  myGarden: {
    appTitle: "myGarden",
    blurb:
      "myGarden was the first MVP i ever built.  Created during my time at The Iron Yard, this application served as my final project.  A click and drag garden planner with a consice library.",
    client: "Personal",
    details: ["Frontend Development", "Web Design", "Backend API Architecture"],
    href: "myGarden",
    languages: {
      main: "Angular",
      all: [""]
    },
    // link: "http://my-garden.surge.sh/#/",
    scale: "Personal",
    screenShot: SCREEN_SHOTS.myGarden,
    screenShotSmall: SCREEN_SHOTS.myGardenSm,
    stackLevels: ["Personal", "Frontend", "Fullstack"],
    technology: ["Angular", "SASS", "Adonis", "Postgress", "Gulp"]
  },
  pineapple: {
    appTitle: "pineapple",
    blurb:
      "An instagram 'clone' I created during my time at The Iron Yard. Upload links to your favorite images.",
    client: "Personal",
    details: ["Frontend Development", "Responsive Design"],
    href: "pineapple",
    languages: {
      main: "JavaScript",
      all: [""]
    },
    // link: "http://tiy-humdrum-project-instagram-cone.surge.sh/#/",
    scale: "Personal",
    screenShot: SCREEN_SHOTS.myGarden,
    screenShotSmall: SCREEN_SHOTS.pineappleSm,
    stackLevels: ["Personal", "Frontend"],
    technology: ["JavaScript", "AJAX", "HTML/CSS"]
  }
};
// humdrumGrill: {
//     appTitle: 'Humdrum Grill',
//     blurb:
//         'An expample restaurant website mockup. Built during my time at The Iron Yard as practice for implementing Pixle Perfect applications.',
//     client: 'Personal',
//     details: ['Frontend Development', 'Pixel Perfect'],
//     href: 'humdrumGrill',
//     languages: {
//         main: 'JavaScript',
//         all: ['']
//     },
//     link: 'http://tiy-humdrum-project.surge.sh/#',
//     scale: 'Personal',
//     screenShot: SCREEN_SHOTS.humdrumGrill,
//     stackLevels: ['Personal', 'Frontend'],
//     technology: ['JavaScript', 'HTML/CSS']
// },
// responseiveMessage: {
//     appTitle: 'Responsive Beginnings',
//     blurb:
//         'My early learnings in creating a responsive design. Built during my time at The Iron Yard.',
//     client: 'Personal',
//     details: ['Frontend Development', 'Responsive Design'],
//     href: 'responseiveMessage',
//     languages: {
//         main: 'JavaScript',
//         all: ['']
//     },
//     link: 'http://tiy-humdrum-responsive.surge.sh/',
//     scale: 'Personal',
//     screenShot: SCREEN_SHOTS.responseiveMessage,
//     stackLevels: ['Personal', 'Frontend'],
//     technology: ['JavaScript', 'HTML/CSS']
// }
