var movies = [
    {
        image: './images/pulp-fiction.jpg',
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
        image: './images/grease.jpg',
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
        image: './images/practical-magic.jpg',
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
        image: './images/moulin-rouge.jpg',
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
        image: './images/amos-and-andrew.jpg',
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
        image: './images/face-off.jpg',
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
        image: './images/demolition-man.jpg',
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
        image: './images/episode-1.jpg',
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
        image: './images/be-cool.jpg',
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
        image: './images/trespass.jpg',
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
        image: './images/travolta.jpg',
    },
    'Uma Thurman': {
        image: './images/thurman.jpg',
    },
    'Samuel L. Jackson': {
        image: './images/jackson.jpg',
    },
    'Harvey Keitel': {
        image: './images/keitel.jpg',
    },
    'Olivia Newton-John': {
        image: './images/newtonjohn.jpg',
    },
    'Stockhard Channing': {
        image: './images/channing.jpg',
    },
    'Sandra Bullock': {
        image: './images/bullock.jpg',
    },
    'Nicole Kidman': {
        image: './images/kidman.jpg',
    },
    'Ewan McGregor': {
        image: './images/mcgregor.jpg',
    },
    'John Leguizamo': {
        image: './images/leguizamo.jpg',
    },
    'Nicholas Cage': {
        image: './images/cage.jpg',
    },
    'Michael Lerner': {
        image: './images/lerner.jpg',
    },
    'Dominique Swain': {
        image: './images/swain.jpg',
    },
    'Sylvester Stallone': {
        image: './images/stallone.jpg',
    },
    'Wesley Snipes': {
        image: './images/snipes.jpg',
    },
    'Natalie Portman': {
        image: './images/portman.jpg',
    },
    'Cam Gigandet': {
        image: './images/gigandet.jpg',
    },
    'Bruce Willis': {
        image: './images/willis.jpg',
    },
}

module.exports = {
    movies: movies,
    actors: actors,
}
