import { Button, Card, CardBody, Divider, Input, Select, SelectItem, Tab, Tabs, Textarea} from "@nextui-org/react";
import { navItems } from "../constants/constants";

export default function PodcastForm(){
    return(
        <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-bold">Podcast Info</h2>

            <div>
                <Input 
                    placeholder="Podcast Title"
                    isClearable
                    isRequired
                    label="Podcast Title"
                    labelPlacement="outside"
                    size="lg"
                    radius="sm"
                />
            </div>

            <div>
                <Select
                    label="Select an AI Voice" 
                    labelPlacement="outside"
                    placeholder="Select A Voice"
                    size="lg"
                    radius="sm"
                    isRequired
                >
                    {
                        navItems.map((item)=>(
                            <SelectItem key={item.title}>
                                {item.title}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>

            <div>
                <Textarea
                    label="Description"
                    size="lg"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    disableAutosize
                    disableAnimation
                    classNames={{
                        input: "resize-y min-h-[40px]",
                        label: 'text-medium mb-1'
                    }}
                    radius="sm"
                />
            </div>

            <Divider />

            <div>
                <Textarea
                    label="AI Prompt to Generate Podcast"
                    size="lg"
                    labelPlacement="outside"
                    placeholder="Enter text to generate AI Audio"
                    disableAutosize
                    disableAnimation
                    classNames={{
                        input: "resize-y min-h-[40px]",
                        label: 'text-medium mb-1'
                    }}
                    radius="sm"
                />
                
                <div className="mt-7">
                    <Button radius="sm" className="text-medium px-4 bg-orange-500 font-bold">
                        Generate Podcast
                    </Button>
                </div>
            </div>

            <div>
                    <Tabs
                        aria-label="Options"
                        size="lg"
                        radius="sm"
                    >

                        <Tab key="ai-image" title="AI Prompt to Generate Thumbnail">
                            <Textarea
                                label="AI Prompt to Generate Podcast"
                                size="lg"
                                labelPlacement="outside"
                                placeholder="Enter text to generate AI Audio"
                                disableAutosize
                                disableAnimation
                                classNames={{
                                    input: "resize-y min-h-[40px]",
                                    label: 'text-medium mb-1'
                                }}
                                radius="sm"
                            />
                            
                            <div className="mt-7">
                                <Button radius="sm" className="text-medium px-4 bg-orange-500 font-bold">
                                    Generate Podcast
                                </Button>
                            </div> 
                        </Tab>
                        <Tab key="custom-image" title="Upload Custom Image">
                            <Card>
                                <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>  
                        </Tab>
                        
                    </Tabs>
                </div>
                
                <div className="mb-10">
                    <Button radius="sm" className="w-full text-medium px-4 bg-orange-500 font-bold">
                        Submit & Publish Podcast
                    </Button>
                </div>
                
        </div>
    )
}