import { Avatar, Button } from "@nextui-org/react";
import LikedPodcastImage from "./LikedPodcastImage";

export default function RightBar(){
    return(
        <div className="w-[20rem] relative h-[100vh] border-l-4 border-l-blue-400 px-7 pt-5">

            <div className="fixed">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <Avatar size="sm"/>
                        <span className="font-[600]">User</span>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Liked Podcaste */}

                <div className="mb-10">
                    <div className="flex justify-between items-center mb-5">
                        <span className="font-bold">Users Also Like</span>
                        <button variant="light" className="text-orange-500 font-medium hover:text-orange-400">See all</button>
                        
                    </div>

                    <div>
                        <LikedPodcastImage imageUrl="https://nextui.org/images/hero-card-complete.jpeg" title="Frontend Radio" author="React JS"/>
                    </div>
                </div>


                {/* Top Podcasters Section */}

                <div>
                    <div className="flex justify-between items-center mb-5">
                            <span className="font-bold">Top Podcasters</span>
                            <button variant="light" className="text-orange-500 font-medium hover:text-orange-400">See all</button>
                            
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <Avatar size="md" radius="sm" src="https://nextui.org/images/hero-card-complete.jpeg"/>

                            <div>
                                <h4 className="font-bold text-small">React JS</h4>
                                <p className="text-tiny">React JS</p>
                            </div>
                        </div>

                        <div>
                            <span className="text-small font-medium">{10} Podcasts</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Sign In User Card */}
           
            
        </div>
    )
}