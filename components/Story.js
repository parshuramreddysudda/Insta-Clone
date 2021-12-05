import faker from 'faker';

export default function Story({img,username}) {
    return (
        <div>
            <img 
            className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500  object-cover cursor-pointer hover:scale-125 transition transform ease-out"
            src={faker.image.image()}


            />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}
