
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "@firebase/firestore";
import { async } from "@firebase/util";
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db } from "../firebase";

export default function Post({ id, username, caption, img, userImg }) {

    const { data: session } = useSession();
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)


    useEffect(() => {
        onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot) => {
            setComments(snapshot.docs)
        })

    }, [db, id])


    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
        }
        else await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
            username: session.user.username
        })
    }

    useEffect(() => {
        setHasLiked(
            likes.findIndex(like => (like.id === session?.user?.uid)) !== -1
        );
    }, [likes])

    useEffect(() => {
        onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
            setLikes(snapshot.docs)
        })

    }, [db, id])



    const commentToSend = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComments('');
        await (addDoc(collection(db, 'posts', id, 'comments'), {
            comment: comment,
            username: session.user.username,
            profileImg: session.user.image,
            timestamp: serverTimestamp(),
        }))
    }
    return (
        <div>
            <div className="bg-white my-7 border rounded-sm">

                {/* Header */}
                <div className="flex flex-1 items-center p-3 ">
                    <img
                        className="rounded-full h-12 w-12 object-cover p-1 mr-3"
                        src={userImg} />

                    <p className=" flex-1 font-bold">
                        {username}
                    </p>
                    <DotsHorizontalIcon className="h-5" />
                </div>
                {/* img */}
                <img
                    className=" w-full object-cover"
                    src={img} />
                {/* Buttons  */}

                {session && <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        {hasLiked ?
                            (
                                <HeartIconFilled onClick={likePost} className="btn text-red-500" />
                            ) :
                            (
                                <HeartIcon onClick={likePost} className="btn" />
                            )}

                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>}
                {/* captions */}
                <p className="p-5 truncate">
                    {likes.length > 0 && (<p className=" font-bold mr-1">   {likes.length} {likes.length > 1 ? "Likes" : "Like"}</p>)}
                    <span className="font-bold mr-2">{username}</span>
                    {caption}
                </p>

                {/* comments */}
                {
                    comments.length > 0 && (
                        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                            {comments.map(comment => (
                                <div key={comment.id} className="flex items-center space-x-2 mb-3">
                                    <img src={comment.data().profileImg} alt="" className="rounded-full h-7" />
                                    <p className="flex-1 text-sm">
                                        <span className=" font-bold">{comment.data().username}</span>{" "}
                                        {comment.data().comment}
                                    </p>
                                    <Moment className="pr-5 text-xs" fromNow>
                                        {comment.data().timestamp?.toDate()}
                                    </Moment>
                                </div>
                            ))}
                        </div>
                    )
                }
                {/* inputbox */}
                {session &&
                    <form className="flex items-center p-4" >
                        <EmojiHappyIcon className="btn" />
                        <input
                            className="flex-1 border-none focus-ring-0 outline-none"
                            placeholder="Add a comment here......"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            type="text" />
                        <button className="text-blue-400 font-semibold disabled:text-gray-500" disabled={!comment.trim()} onClick={commentToSend}>Post</button>
                    </form>}
            </div>
        </div>
    )
}
