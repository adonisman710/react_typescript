import React from "react";
import BasePage from "./BasePage";
import { LinkArray } from "../Components/Database";
import LinkHistory from "../Components/Common/LinkHistory";
import { ClientInfos } from "../Components/Database";
import { IClientInfo } from "../Components/Common/interface";
import { useNavigate } from "react-router-dom";
import ClientCard from "../Components/Cards/ClientCard";

const linkElements = [LinkArray[0], LinkArray[1]];

const ClientsPage = () => {
    const navigate = useNavigate();
    const onClientDetail = (_clientInfo: IClientInfo) => {
        navigate("/clients/client/" + _clientInfo.cId);
    }
    return (
        <BasePage>
            <div className="w-full flex flex-col gap-y-[20px]">
                <div>
                    <LinkHistory links={linkElements}/>
                </div>
                <div className="flex flex-wrap gap-[10px]">
                    {ClientInfos.map((clientInfo, index) => {
                        return (
                            <div key={index} className="px-[20px] py-[10px] bg-gray-300 rounded-lg cursor-pointer"
                                onClick={() => {onClientDetail(clientInfo)}}
                            >
                                <ClientCard {...clientInfo}/>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </BasePage>
    )
}

export default ClientsPage;