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
        image: 'practical-magic.jpg',
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
        image: 'moulin-rouge.jpg',
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
        image: 'amos-and-andrew.jpg',
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
        image: 'face-off.jpg',
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
        image: 'demolition-man.jpg',
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
        image: 'episode-1.jpg',
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
        image: 'be-cool.jpg',
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
        image: 'trespass.jpg',
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
        image: 'travolta.jpg',
    },
    'Uma Thurman': {
        image: 'thurman.jpg',
    },
    'Samuel L. Jackson': {
        image: 'jackson.jpg',
    },
    'Harvey Keitel': {
        image: 'keitel.jpg',
    },
    'Olivia Newton-John': {
        image: 'newtonjohn.jpg',
    },
    'Stockhard Channing': {
        image: 'channing.jpg',
    },
    'Sandra Bullock': {
        image: 'bullock.jpg',
    },
    'Nicole Kidman': {
        image: 'kidman.jpg',
    },
    'Ewan McGregor': {
        image: 'mcgregor.jpg',
    },
    'John Leguizamo': {
        image: 'leguizamo.jpg',
    },
    'Nicholas Cage': {
        image: 'cage.jpg',
    },
    'Michael Lerner': {
        image: 'lerner.jpg',
    },
    'Dominique Swain': {
        image: 'swain.jpg',
    },
    'Sylvester Stallone': {
        image: 'stallone.jpg',
    },
    'Wesley Snipes': {
        image: 'snipes.jpg',
    },
    'Natalie Portman': {
        image: 'portman.jpg',
    },
    'Cam Gigandet': {
        image: 'gigandet.jpg',
    },
    'Bruce Willis': {
        image: 'willis.jpg',
    },
}

module.exports = {
    movies: movies,
    actors: actors,
}
