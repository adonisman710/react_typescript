import React from "react";
import { ILinkDetail } from "./interface";

interface ILinkHistory {
    links: ILinkDetail[];
}

const LinkHistory = (props: ILinkHistory) => {
    return (
        <div className="flex gap-x-[10px]">
            {props.links.map((linkElement, index) => {
                return (
                    <div key={index} className="flex flex-row gap-x-[10px]">
                        {index < props.links.length - 1 ?
                            <div className="text-gray-500">
                                {linkElement.lName}
                            </div>
                            :
                            <div>
                                {linkElement.lName}
                            </div>
                        }
                        {index < props.links.length - 1 && 
                            <div>/</div>
                        }
                    </div>
                )
            })

            }
        </div>
    )
}

export default LinkHistory;