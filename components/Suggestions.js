import Faker from 'faker'
import { useEffect, useState } from "react";

function Suggestions() {

    const [Suggestions, setSuggestions] = useState([])



    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            ...Faker.helpers.contextualCard(),
            id: i,
            img: Faker.image.image()
        }))

        setSuggestions(suggestions)
    }, [])
    return (
        <div className="ml-10 mt-4">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm text-gray-400">Suggestions for You</h3>
                <button className="text-gray-600 font-semibold">Show All</button>
            </div>
            {
                Suggestions.map(profile => (
                    <div
                        key={profile.id}
                        className="flex items-center justify-between mt-3"
                    >

                        <img
                            className="w-10 h-10 rounded-full border p-[2px] object-cover"
                            src={profile.img} alt="" />
                        <div className=" flex-1 ml-4">
                            <p className="text-sm">{profile.username}</p>
                            <p className="text-xs text-gray-400">{profile.company.name}</p>
                        </div>
                        <button className="text-xs text-blue-400"> Follow</button>

                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions;
