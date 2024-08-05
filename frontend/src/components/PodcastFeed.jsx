import PodcastDetails from "./PodcastDetails";

export default function PodcastFeed(){
    return(

        <div>
            <h2 className="mb-7 text-2xl font-bold">Trending Podcasts</h2>
            <div className="flex flex-wrap items-center justify-between gap-5">
            {
                [1,2,3, 4, 5, 6, 7].map(()=>(
                    <PodcastDetails />
                ))
            }
            </div>
        </div>
    )
}