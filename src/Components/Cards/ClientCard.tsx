import React from "react";
import { IClientInfo } from "../Common/interface";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const ClientCard = (props: IClientInfo) => {
    return (
        <div className="flex flex-row gap-x-[10px]">
            <div>
                <img src={props.cPhoto} alt="_clientAvatar" className="w-[60px] h-[60px] rounded-lg"/>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <span>
                        {props.cName}
                    </span>
                </div>
                <div className="flex gap-x-[5px] items-center">
                    <MailOutlineOutlinedIcon className="text-[12px] mt-[2px]"/>
                    <span>{props.cEmail}</span>
                </div>
            </div>
        </div>
    )
}

export default ClientCard;