export default {
    id: '1',
    users: [{
        id: 'u1',
        username: 'JoseRivera',
        image: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
    }, {
        id: 'u2',
        username: 'Lukas',
        image: 'https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    }, {
        id: 'u3',
        username: 'ManuelTorres',
        image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }, {
        id: 'u4',
        username: 'Vlad',
        image: 'https://oddstuffmagazine.com/wp-content/uploads/2020/05/Bow-Lake-in-Banff-National-Park.jpg',
    }],
    messages: [{
        id: 'm1',
        content: 'How are you?',
        createdAt: '2021-02-10T12:48:00.000Z',
        user: {
            id: 'u1',
            username: 'JoseRivera',
        },
    }, {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2021-02-03T14:49:00.000Z',
        user: {
            id: 'u2',
            username: 'Lukas',
        },
    }, {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2021-02-03T14:49:40.000Z',
        user: {
            id: 'u2',
            username: 'Lukas',
        },
    }, {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2021-02-03T14:50:00.000Z',
        user: {
            id: 'u1',
            username: 'JoseRivera',
        },
    }, {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2021-02-03T14:51:00.000Z',
        user: {
            id: 'u1',
            username: 'JoseRivera',
        },
    }, {
        id: 'm6',
        content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2021-02-03T14:49:00.000Z',
        user: {
            id: 'u2',
            username: 'Lukas',
        },
    }, {
        id: 'm7',
        content: 'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2021-02-03T14:53:00.000Z',
        user: {
            id: 'u1',
            username: 'JoseRivera',
        },
    }, {
        id: 'm8',
        content: 'How is everyone?',
        createdAt: '2021-02-03T14:53:00.000Z',
        user: {
            id: 'u3',
            username: 'ManuelTorres',
        },
    }, {
        id: 'm9',
        content: 'Well, Im good XD',
        createdAt: '2021-02-03T14:53:00.000Z',
        user: {
            id: 'u4',
            username: 'Vlad',
        },
    }]
}