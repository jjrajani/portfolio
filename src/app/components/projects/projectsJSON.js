export const LAPTOP = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;
export const SCREEN_SHOTS = {
  culturaLink: require('../../assets/culturalink.png'),
  ADP: require('../../assets/ADP.png'),
  mailChimp: require('../../assets/mail-chimp.png'),
  PSP: require('../../assets/PSP.png'),
  myGarden: require('../../assets/my-garden-ss.png'),
  cageSmash: require('../../assets/cage-smash-ss.png'),
  pineapple: require('../../assets/pineapple.png'),
  humdrumGrill: require('../../assets/humdrum_grill.png'),
  responseiveMessage: require('../../assets/responseive_message.png'),
  twinBridgesLake: require('../../assets/twin_bridges_lake.png')
};
export const PROJECTS = {
  twinBridgesLake: {
    appTitle: 'Twin Bridges Lake',
    blurb:
      'A react application built for Twin Bridges Lake pay fishing lake.  A small business solution.',
    client: 'Twin Bridges Lake, Lawrenceville GA',
    details: ['Frontend Development', 'Web Design', 'Bootstrap'],
    features: [
      {
        title: 'Google Maps',
        img: ''
      },
      {
        title: 'Flicker API for Image Gallery',
        img: ''
      }
    ],
    languages: {
      main: 'React',
      all: ['Bootstrap, React Bootstrap, SASS']
    },
    link: 'https://www.twinbridgeslake.fish',
    scale: 'Small-Scale Application',
    screenShot: SCREEN_SHOTS.twinBridgesLake,
    stackLevels: ['Professional', 'Frontend', 'Fullstack'],
    technology: [
      'React',
      'SASS',
      'Express',
      'MongoDB',
      'Webpack',
      'Heroku',
      'Google Maps',
      'Flicker API'
    ]
  },
  ADP: {
    appTitle: 'ADP Monitoring Services',
    blurb:
      'I performed as the sole frontend developer on this project and also built out a majority of the REST API. RabbitMQ and socket.io were used with React, Express, and Mongo to provide ADP product developers with a dashboard updated with the most current status of their active services.',
    client: 'ADP, Atlanta',
    details: [
      'Frontend Development',
      'Web Design',
      'Socket Connections',
      'API Design'
    ],
    features: [
      {
        title: 'Waterfall Chart',
        img: ''
      },
      {
        title: 'plotly.js',
        img: ''
      }
    ],
    languages: {
      main: 'React',
      all: ['']
    },
    scale: 'Large-Scale Application',
    screenShot: SCREEN_SHOTS.ADP,
    stackLevels: ['Professional', 'Frontend', 'Fullstack'],
    technology: [
      'React',
      'SASS',
      'Express',
      'MongoDB',
      'Socket.io',
      'RabbitMQ',
      'Webpack'
    ]
  },
  culturaLink: {
    appTitle: 'CulturaLink',
    blurb:
      'ClutraLink was my first professional project. I performed as the sole frontend developer. The app is a complete business solution providing CulturaLink not only with Video, Voice, and Document Translation Services but also Billing Reports, Revenue Charts and CSV Reports, Client and Interpreter Management, Permissions, and Individual Portals for Client, Admin, and Interpreter access.',
    client: 'CulturaLink, Atlanta',
    details: ['Frontend Development', 'Web Design'],
    languages: {
      main: 'React',
      all: ['']
    },
    link: 'http://theculturalink.com/',
    scale: 'Large-Scale Application',
    screenShot: SCREEN_SHOTS.culturaLink,
    stackLevels: ['Professional', 'Frontend', 'Fullstack'],
    technology: [
      'React',
      'TypeScript',
      'Express',
      'Sequelize',
      'Jest',
      'HighCharts',
      'socket.io',
      'Videyo',
      'Webpack'
    ]
  },
  mailChimp: {
    appTitle: 'MailChimp Annual Report',
    astrisk:
      "*Award winning for a design that I did not create.  However, this award demonstrates my (and my partner's) ability to communicate with designers and deliver their creations.",
    blurb:
      'Given only a two week time frame, a partner developer and I delivered this award winning* year-end newsletter to mailChimp in the nick of time. Lazy loading with scroll dependant animations, GIF images.',
    client: 'MailChimp, Atlanta',
    details: ['Frontend Development', 'Web Design'],
    languages: {
      main: 'JavaScript',
      all: ['']
    },
    link: 'https://mailchimp.com/2016/',
    routeSuffix: 'MailChimp',
    scale: 'Small Design Centered Application',
    screenShot: SCREEN_SHOTS.mailChimp,
    stackLevels: ['Professional', 'Frontend'],
    technology: ['Ruby on Rails', 'JavaScript', 'SASS']
  },
  PSP: {
    appTitle: 'PSP Printing',
    blurb:
      'A step by step desing proofing system. PSP provides promotional signage to large companies such as Barnes and Nobel or Kroger. They wanted a way to streamline the process of requesting, modifying, and aprroving image proofs. Includes an alert system for instant feedback between the client and PSP allowing faster and more accurate production and delivery.  Companies can define their signage space and sizes per store to easily maintain their store signage capacity and create new orders more efficiently.',
    client: 'PSP, Atlanta',
    details: ['Frontend Development', 'Web Design'],
    languages: {
      main: 'Angular2',
      all: ['']
    },
    scale: 'Large-Scale Application',
    screenShot: SCREEN_SHOTS.PSP,
    stackLevels: ['Professional', 'Frontend'],
    technology: ['Agnular2', '.NET Core', 'SASS', 'Gulp']
  },
  myGarden: {
    appTitle: 'myGarden',
    blurb:
      'myGarden is a tool I built to help in the early stages of planning a small home garden. As a child my mother always had a garden but I was always too busy running around playing to pay much attention to her technique.  As an adult I decided I wanted to have a small garden too but found it quite overwhellming when looking through online garden resources.  I decided to create a solution.  I removed the verbosity of the usual gardening almanac opting to fill my library with only the basics one needs to get started.  Then I added a click and drag space planner to help determine what one can plant in their available space. This way, one can get gardening easier, faster, and educated.',
    client: 'Personal',
    details: ['Frontend Development', 'Web Design', 'Backend API Architecture'],
    languages: {
      main: 'Angular',
      all: ['']
    },
    link: 'http://my-garden.surge.sh/#/',
    scale: 'Personal',
    screenShot: SCREEN_SHOTS.myGarden,
    stackLevels: ['Personal', 'Frontend', 'Fullstack'],
    technology: ['Angular', 'Adonis', 'Postgress', 'Gulp']
  },
  cageSmash: {
    appTitle: 'cageSmash',
    blurb:
      "A variation of Whack-a-Mole using Nicholas Cage's face!  I built this game while at The Iron Yard where placeCage.com was my instructors go to image placeholder. My first time working with DOM Manipuation, this rudamentary application is one of my favorite creations.",
    client: 'Personal',
    details: ['Frontend Development', 'Game Development'],
    languages: {
      main: 'JavaScript',
      all: ['']
    },
    link: 'http://cage-smash.surge.sh/',
    scale: 'Personal',
    screenShot: SCREEN_SHOTS.cageSmash,
    stackLevels: ['Personal', 'Frontend'],
    technology: ['JavaScript', 'HTML/CSS']
  },
  pineapple: {
    appTitle: 'pineapple',
    blurb: "An instagram 'clone' I created during my time at The Iron Yard.",
    client: 'Personal',
    details: ['Frontend Development', 'Responsive Design'],
    languages: {
      main: 'JavaScript',
      all: ['']
    },
    link: 'http://tiy-humdrum-project-instagram-cone.surge.sh/#/',
    scale: 'Personal',
    screenShot: SCREEN_SHOTS.pineapple,
    stackLevels: ['Personal', 'Frontend'],
    technology: ['JavaScript', 'HTML/CSS']
  },
  humdrumGrill: {
    appTitle: 'Humdrum Grill',
    blurb: 'An expample restaurant website mockup.',
    client: 'Personal',
    details: ['Frontend Development'],
    languages: {
      main: 'JavaScript',
      all: ['']
    },
    link: 'http://tiy-humdrum-project.surge.sh/#',
    scale: 'Personal',
    screenShot: SCREEN_SHOTS.humdrumGrill,
    stackLevels: ['Personal', 'Frontend'],
    technology: ['JavaScript', 'HTML/CSS']
  },
  responseiveMessage: {
    appTitle: 'Responsive Beginnings',
    blurb: 'My early learnings in creating a responsive design.',
    client: 'Personal',
    details: ['Frontend Development', 'Responsive Design'],
    languages: {
      main: 'JavaScript',
      all: ['']
    },
    link: 'http://tiy-humdrum-responsive.surge.sh/',
    scale: 'Personal',
    screenShot: SCREEN_SHOTS.responseiveMessage,
    stackLevels: ['Personal', 'Frontend'],
    technology: ['JavaScript', 'HTML/CSS']
  }
};
