import { Image } from "@nextui-org/react";

export default function PodcastDetails(){
    return(
        <div>
                    <Image
                    alt="Card background"
                    className="object-cover rounded-md"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                    width={250}
                    height={220}
                    />
                    
                    <div className="flex flex-col mt-2">
                        <span className="font-medium text-large">Hello</span>
                        <span className="text-medium text-gray-500">Podcast</span>
                    </div>
        </div>
    )
}