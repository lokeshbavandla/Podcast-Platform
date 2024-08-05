import { Input } from "@nextui-org/react"
import PodcastDetails from "./PodcastDetails"

export default function DiscoverPage(){
    return(
        <div className="flex flex-col gap-7">
            <div>
                <Input
                    placeholder="Search for Podcasts...."
                    isClearable
                    radius="sm"
                    size="lg"

                    startContent={<span class="material-symbols-rounded">
                        search
                    </span>}
                />
            </div>
             <div>
                <h2 className="mb-7 text-2xl font-bold">Discover Trending Podcasts</h2>
                <div className="flex flex-wrap items-center justify-between gap-5">
                {
                    [1,2,3, 4, 5, 6, 7].map(()=>(
                        <PodcastDetails />
                    ))
                }
                </div>
            </div>
        </div>
    )
}