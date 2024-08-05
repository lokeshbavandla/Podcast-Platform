import { Button, Image } from "@nextui-org/react"
import PodcastDetails from "./PodcastDetails"
export default function PodcasterProfile(){
    return(
        <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-bold">Podcaster Profile</h2>

            <div className="flex gap-10">
                <div>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-md"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={250}
                        height={220}
                        />
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-4">Name</h3>
                    <div className="flex items-center gap-2 mb-10">

                        <span class="material-symbols-rounded">
                            headphones
                        </span>
                        
                        <span className="font-[600]">{22} active listners</span>
                    </div>

                    <div>
                        <Button radius="sm" className="w-full text-medium bg-orange-500 font-bold">
                            Play Random Podcast
                        </Button>
                    </div>
                </div>

            </div>

            <div>
                <h4 className="font-bold text-xl mb-3">Similar Podcast</h4>
                <PodcastDetails />
            </div>
        </div>
    )
}