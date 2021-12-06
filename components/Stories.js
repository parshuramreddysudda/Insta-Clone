import faker from 'faker';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    const { data: session } = useSession();


    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
            avatar: faker.image.image(),
        }))
        setSuggestions(suggestions)
    }, [])




    return (
        <div className="flex space-x-2 p-6 bg-white
         border-gray-200 mt-8 
        rounded-sm border overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story
                    key={session.user.uid}
                    img={session.user.image}
                    username={session.user.name}
                />
            )}

            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
