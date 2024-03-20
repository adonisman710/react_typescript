import React, { useEffect, useState } from "react";
import BasePage from "./BasePage";
import { useParams } from "react-router-dom";
import { ClientInfos, LinkArray } from "../Components/Database";
import { IClientInfo } from "../Components/Common/interface";
import LinkHistory from "../Components/Common/LinkHistory";
import ClientDetail from "../Components/ClientDetail";

const linkElements = [LinkArray[0], LinkArray[1], LinkArray[2]];

const ClientDetailPage = () => {
    let {cId} = useParams();
    const [cInfo, setCInfo] = useState<IClientInfo | null>(null);
    useEffect(() => {
        if (cId) {
            getClientInfo();
        }
    }, [cId]);

    const getClientInfo = () => {
        const cResults = ClientInfos.filter((element) => element.cId === Number(cId));
        if (cResults && cResults.length > 0) {
            setCInfo(cResults[0]);
        }
    }

    return (
        <BasePage>
            <div className="w-full flex flex-col gap-y-[20px]">
                <div>
                    <LinkHistory links={linkElements}/>
                </div>
                <div className="flex justify-center text-[30px] font-bold">
                    {cInfo ?
                        <ClientDetail info={cInfo}/>
                        :
                        <div className="flex justify-center text-[30px] text-red-400">
                            No Info
                        </div>
                    }
                </div>
            </div>
        </BasePage>
    )
}

export default ClientDetailPage;