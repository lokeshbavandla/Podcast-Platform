import { Listbox, ListboxItem } from "@nextui-org/react";
import { navItems } from "../constants/constants";
import { useState } from "react";

export default function LeftBar(){
    const [currentNavItem, setCurrentNavItem] = useState('Home')

    return(
        <div className="w-[17rem] relative h-[100vh] border-r-4 border-r-blue-400">
            <div className="mt-10">
                <Listbox
                    // items={navItems}
                    aria-label="Dynamic Actions"
                    onAction={(title)=>setCurrentNavItem(title)}
                >

                    {
                        navItems.map((item)=> (
                            <ListboxItem
                                key={item.title}
                                className={`my-1     py-2 rounded-none ${item.title === currentNavItem && 'bg-gray-600  font-bold'}`}
                            >
                                <div className="pl-4 flex items-center gap-2">
                                    <span class="material-symbols-rounded">
                                        {item.icon}
                                    </span>
                                    <span className={`text-medium font-medium`}>{item.title}</span>
                                </div>
                                

                            </ListboxItem>
                        ))
                    }

                </Listbox>
            </div>
           
        </div>
    )
}