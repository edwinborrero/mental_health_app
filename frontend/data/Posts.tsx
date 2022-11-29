const Posts = [
    {
        _id: 't1',
        postedBy: {
            _id: 'u1',
            username: 'JoseRivera',
            name: 'Jose Rivera',
            image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        createdAt: '2021-02-27T12:00:00.000Z',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        image: 'https://www.wallpapertip.com/wmimgs/175-1756992_its-contagious-profile-beautiful-whatsapp-dp.png',
        numberOfComments: 2,
    }, {
        _id: 't2',
        postedBy: {
            _id: 'u2',
            username: 'ManuelTorres',
            name: 'Manuel Torres',
            image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
        },
        createdAt: '2021-02-27T12:00:00.000Z',
        body: 'Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        numberOfComments: 4,
    }, {
        _id: 't3',
        postedBy: {
            _id: 'u3',
            username: 'AnaGomez',
            name: 'Ana Gomez',
            image: 'https://images.all-free-download.com/images/graphiclarge/beautiful_collection_expensive_213989.jpg'
        },
        createdAt: '2021-02-27T12:00:00.000Z',
        body: 'Hello World',
        //video: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        numberOfComments: 4,
    }, {
        _id: 't4',
        postedBy: {
            _id: 'u4',
            username: 'KatSmith',
            name: 'Kat Smith',
            image: 'https://i.pinimg.com/originals/3a/5b/c7/3a5bc774c262567f847d0bbd8768d669.jpg'
        },
        createdAt: '2021-02-27T12:00:00.000Z',
        body: 'Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        video: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        numberOfComments: 4,
    },
]

export default Posts;