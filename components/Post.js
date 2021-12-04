import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";

export default function Post({ id, username, caption, img, userimg }) {
    return (
        <div>
            <div className="bg-white my-7 border rounded-sm">

                {/* Header */}
                <div className="flex flex-1 items-center p-5 ">
                    <img
                        className="rounded-full h-12 w-12 object-contain p-1 mr-3"
                        src={img} />

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

                <div className="flex justify-between px-4 pt-4">
                    <div className="flex space-x-4">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
                {/* captions */}
                <p className="p-5 truncate">
                        <span className="font-bold mr-2">{username}</span>
                        {caption}
                </p>

                {/* comments */}

                {/* inputbox */}

             <form className="flex items-center p-4" >
                    <EmojiHappyIcon className="btn"/>
                    <input 
                    className="flex-1 border-none focus-ring-0 outline-none"
                    placeholder="Add a comment here......" 
                    type="text" />
                    <button className="text-blue-400 font-semibold">Post</button>
             </form>
            </div>
        </div>
    )
}
