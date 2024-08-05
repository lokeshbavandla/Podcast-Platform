import { Card, CardFooter, Image } from "@nextui-org/react"

export default function LikedPodcastImage({title, author, imageUrl}){
    return(
        <>
            <Card className="relative">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={imageUrl}
                        width={270}
                        height={220}
                        />
                        <CardFooter className="absolute bottom-0 z-[100] px-4 flex-col items-start bg-slate-700 opacity-[0.95] text-white">
                            <h4 className="font-bold text-large">{title}</h4>
                            <p className="text-small">{author}</p>
                    </CardFooter>
                </Card>
        </>
    )
}