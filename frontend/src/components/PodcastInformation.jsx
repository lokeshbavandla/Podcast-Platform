import { Button, Avatar, Image } from "@nextui-org/react";
import PodcastDetails from "./PodcastDetails";

export default function PodcastInformation(){
    return(

        <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-bold">Podcast Info</h2>

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
                    <h3 className="text-3xl font-bold mb-4">Next JS Title</h3>
                    <div className="flex items-center gap-4 mb-10">
                        <Avatar size="sm"/>
                        <span className="font-[600]">User</span>
                    </div>

                    <div>
                        <Button radius="sm" className="w-full text-medium bg-orange-500 font-bold">
                            Play Podcast
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-xl mb-3">Description</h4>
                <p className="text-gray-400 text-medium">Description</p>
            </div>

            <div>
                <h4 className="font-bold text-xl mb-3">Transcription</h4>
                <p className="text-gray-400 text-medium">Description</p>
            </div>

            <div>
                <h4 className="font-bold text-xl mb-3">Thumbnail Prompt</h4>
                <p className="text-gray-400 text-medium">Thumbnail Prompt</p>
            </div>

            <div>
                <h4 className="font-bold text-xl mb-3">Similar Podcast</h4>
                <PodcastDetails />
            </div>

            
        </div>
    )
}