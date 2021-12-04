import Post from "./Post";


const posts=[
    {
        id:'123',
        username:"Parshuram",
        userImg:"https://avatars.githubusercontent.com/u/28673434?v=4",
        img:'https://elle.in/wp-content/uploads/2019/07/uploads/vidya-vox-mashups.jpg',
        caption:"Code like dying tomorrow"
    },
    {
        id:'123',
        username:"Parshuram",
        userImg:"https://avatars.githubusercontent.com/u/28673434?v=4",
        img:'https://avatars.githubusercontent.com/u/28673434?v=4',
        caption:"Code like dying tomorrow"
    },
    {
        id:'123',
        username:"Parshuram",
        userImg:"https://avatars.githubusercontent.com/u/28673434?v=4",
        img:'https://avatars.githubusercontent.com/u/28673434?v=4',
        caption:"Code like dying tomorrow"
    }
]


export default function Posts() {
    return (
        <div>
        {posts.map((post)=>(
            <Post 
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
            
        </div>
    )
}
