var movies = [
    {
        image: 'pulp-fiction.jpg',
        name: 'Pulp Fiction',
        year: 1994,
        director: 'Quentin Tarantino',
        actors: [
            'John Travolta',
            'Uma Thurman',
            'Samuel L. Jackson',
            'Harvey Keitel',
            'Bruce Willis',
        ]

    },
    {
        image: 'grease.jpg',
        name: 'Grease',
        year: 1978,
        director: 'Randal Kleiser',
        actors: [
            'John Travolta',
            'Olivia Newton-John',
            'Stockhard Channing',
        ]
    },
    {
        image: 'gcpractical-magic.jpg',
        name: 'Practical Magic',
        year: 1998,
        director: 'Griffin Dunne',
        actors: [
            'Sandra Bullock',
            'Nicole Kidman',
            'Stockhard Channing',
        ]
    },
    {
        image: 'gcmoulin-rouge.jpg',
        name: 'Moulin Rouge!',
        year: 2001,
        director: 'Baz Luhrmann',
        actors: [
            'Nicole Kidman',
            'Ewan McGregor',
            'John Leguizamo',
        ]
    },
    {
        image: 'gcamos-and-andrew.jpg',
        name: 'Amos & Andrew',
        year: 1993,
        director: 'E. Max Frye',
        actors: [
            'Nicholas Cage',
            'Samuel L. Jackson',
            'Michael Lerner',
        ]
    },
    {
        image: 'gcface-off.jpg',
        name: 'Face Off',
        year: 1997,
        director: 'John Woo',
        actors: [
            'John Travolta',
            'Nicholas Cage',
            'Dominique Swain',
        ]
    },
    {
        image: 'gcdemolition-man.jpg',
        name: 'Demolition Man',
        year: 1993,
        director: 'Randal Kleiser',
        actors: [
            'Sylvester Stallone',
            'Sandra Bullock',
            'Wesley Snipes',
        ]
    },
    {
        image: 'gcepisode-1.jpg',
        name: 'Star Wars: Episode I',
        year: 1999,
        director: 'George Lucas',
        actors: [
            'Ewan McGregor',
            'Natalie Portman',
            'Samuel L. Jackson',
        ]
    },
    {
        image: 'gcbe-cool.jpg',
        name: 'Be Cool',
        year: 2005,
        director: 'F. Gary Gray',
        actors: [
            'John Travolta',
            'Uma Thurman',
            'Harvey Keitel',
        ]
    },
    {
        image: 'gctrespass.jpg',
        name: 'Trespass',
        year: 2011,
        director: 'Joel Schumacher',
        actors: [
            'Nicole Kidman',
            'Nicholas Cage',
            'Cam Gigandet',
        ]
    }
]

const actors = {
    'John Travolta': {
        image: 'gctravolta.jpg',
    },
    'Uma Thurman': {
        image: 'gcthurman.jpg',
    },
    'Samuel L. Jackson': {
        image: 'gcjackson.jpg',
    },
    'Harvey Keitel': {
        image: 'gckeitel.jpg',
    },
    'Olivia Newton-John': {
        image: 'gcnewtonjohn.jpg',
    },
    'Stockhard Channing': {
        image: 'gcchanning.jpg',
    },
    'Sandra Bullock': {
        image: 'gcbullock.jpg',
    },
    'Nicole Kidman': {
        image: 'gckidman.jpg',
    },
    'Ewan McGregor': {
        image: 'gcmcgregor.jpg',
    },
    'John Leguizamo': {
        image: 'gcleguizamo.jpg',
    },
    'Nicholas Cage': {
        image: 'gccage.jpg',
    },
    'Michael Lerner': {
        image: 'gclerner.jpg',
    },
    'Dominique Swain': {
        image: 'gcswain.jpg',
    },
    'Sylvester Stallone': {
        image: 'gcstallone.jpg',
    },
    'Wesley Snipes': {
        image: 'gcsnipes.jpg',
    },
    'Natalie Portman': {
        image: 'gcportman.jpg',
    },
    'Cam Gigandet': {
        image: 'gcgigandet.jpg',
    },
    'Bruce Willis': {
        image: 'gcwillis.jpg',
    },
}

module.exports = {
    movies: movies,
    actors: actors,
}
