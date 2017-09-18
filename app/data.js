const movies = [
    {
        image: require('./images/pulp-fiction.jpg'),
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
        image: require('./images/grease.jpg'),
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
        image: require('./images/practical-magic.jpg'),
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
        image: require('./images/moulin-rouge.jpg'),
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
        image: require('./images/amos-and-andrew.jpg'),
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
        image: require('./images/face-off.jpg'),
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
        image: require('./images/demolition-man.jpg'),
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
        image: require('./images/episode-1.jpg'),
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
        image: require('./images/be-cool.jpg'),
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
        image: require('./images/trespass.jpg'),
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
        image: require('./images/travolta.jpg'),
    },
    'Uma Thurman': {
        image: require('./images/thurman.jpg'),
    },
    'Samuel L. Jackson': {
        image: require('./images/jackson.jpg'),
    },
    'Harvey Keitel': {
        image: require('./images/keitel.jpg'),
    },
    'Olivia Newton-John': {
        image: require('./images/newtonjohn.jpg'),
    },
    'Stockhard Channing': {
        image: require('./images/channing.jpg'),
    },
    'Sandra Bullock': {
        image: require('./images/bullock.jpg'),
    },
    'Nicole Kidman': {
        image: require('./images/kidman.jpg'),
    },
    'Ewan McGregor': {
        image: require('./images/mcgregor.jpg'),
    },
    'John Leguizamo': {
        image: require('./images/leguizamo.jpg'),
    },
    'Nicholas Cage': {
        image: require('./images/cage.jpg'),
    },
    'Michael Lerner': {
        image: require('./images/lerner.jpg'),
    },
    'Dominique Swain': {
        image: require('./images/swain.jpg'),
    },
    'Sylvester Stallone': {
        image: require('./images/stallone.jpg'),
    },
    'Wesley Snipes': {
        image: require('./images/snipes.jpg'),
    },
    'Natalie Portman': {
        image: require('./images/portman.jpg'),
    },
    'Cam Gigandet': {
        image: require('./images/gigandet.jpg'),
    },
    'Bruce Willis': {
        image: require('./images/willis.jpg'),
    },
}

export {
    movies,
    actors,
}
