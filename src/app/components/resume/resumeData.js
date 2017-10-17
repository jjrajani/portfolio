const maxScroll = 890;

export const linkScrollPoints = {
    Frontend: 560,
    Design: 680,
    Backend: 775,
    Databases: maxScroll,
    Libraries: maxScroll,
    APIs: maxScroll,
    'Build Tools': maxScroll,
    Environments: maxScroll,
    Education: maxScroll,
    Travels: maxScroll
};

export const RESUME = [
    {
        title: 'Frontend',
        skills: 'JavaScript, TypeScript, React, AngularJS, jQuery, AJAX, REST'
    },
    {
        title: 'Design',
        skills: 'Responsive Web Design, HTML, CSS3, SASS, Bootstrap'
    },
    {
        title: 'Backend',
        skills: 'Node.js, Express, Mongoose, Sequelize'
    },
    {
        title: 'Databases',
        skills: 'MongoDB, MySQL'
    },
    {
        title: 'Libraries',
        skills: 'Redux, Mobx, Axios, Lodash, Passport.js, HighCharts, Plotly.js'
    },
    {
        title: 'APIs',
        skills: 'Google OAuth, Google Maps, YouTube, Spotify, Flickr'
    },
    {
        title: 'Build Tools',
        skills: 'Webpack, Git, Gulp'
    },
    {
        title: 'Environments',
        skills: 'Agile, SCRUM, Waterfall, Freelance, Remote'
    },
    {
        title: 'Education',
        skills: [
            {
                title: 'Frontend Engineering',
                linkURL: 'http://www.theironyard.com',
                linkText: 'The Iron Yard',
                date: 'Atlanta, 2016'
            },
            {
                title: 'All Things Considered',
                linkURL: 'http://www.hunter.cuny.edu/main/',
                linkText: 'CUNY Hunter',
                date: 'NYC, 2005-2008'
            },
            {
                title: 'Montessori Beginnings',
                linkURL: 'http://www.opmontessori.com',
                linkText: 'Old Peachtree Montessori',
                date: 'until 6th grade'
            }
        ]
    },
    {
        title: 'Travels',
        skills: 'France, UK, Uganda, Rwanda, Costa Rica, 30 US States & Canada'
    }
];
