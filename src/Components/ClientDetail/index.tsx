import React, { useState } from "react";
import { IClientInfo } from "../Common/interface";
import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import ClientDetailStatusCard from "../Cards/ClientDetail/ClientDetailStatusCard";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SubCategories } from "../Database";

import ClientDashboard from "./ClientDashboard";
import ClientCheckins from "./ClientCheckins";
import ClientGallery from "./ClientGallery";
import ClientQA from "./ClientQA";
import ClientNutrition from "./ClientNutrition";
import ClientSupplements from "./ClientSupplements";
import ClientWorkout from "./ClientWorkout";
import ClientCalendar from "./ClientCalendar";
import ClientDailyHabits from "./ClientDailyHabits";
import ClientNutritionLog from "./ClientNutritionLog";
import ClientLog from "./ClientLog";
import ClientBilling from "./ClientBilling";

interface IClientDetail {
    info: IClientInfo;
}

const ClientDetail = (props: IClientDetail) => {
    const [categoryVal, setCategoryVal] = useState(0);

    const onChangeCategory = (_: React.SyntheticEvent, newValue: number) => {
        setCategoryVal(newValue);
    }

    const getTabCategoryHTML = () => {
        switch (categoryVal) {
            case 0:
                return <ClientDashboard/>;
            case 1:
                return <ClientCheckins/>;
            case 2:
                return <ClientGallery/>;
            case 3:
                return <ClientQA/>;
            case 4:
                return <ClientNutrition/>;
            case 5:
                return <ClientSupplements/>;
            case 6:
                return <ClientWorkout/>;
            case 7:
                return <ClientCalendar/>;
            case 8:
                return <ClientDailyHabits/>;
            case 9:
                return <ClientNutritionLog/>;
            case 10:
                return <ClientLog/>;
            case 11:
                return <ClientBilling/>;
            default:
                return <ClientDashboard/>;
        }
    }

    return (
        <div className="w-full flex flex-col gap-y-[20px]">
            <div className="flex flex-col w-full bg-gray-200 rounded-lg p-[15px] pb-[0px] gap-y-[10px]">
                <div className="flex justify-end">
                    <IconButton>
                        <FavoriteBorderOutlinedIcon className="text-[15px]" color="primary"/>
                    </IconButton>
                    <IconButton>
                        <EmailOutlinedIcon className="text-[15px]" color="primary"/>
                    </IconButton>
                    <IconButton>
                        <EditCalendarOutlinedIcon className="text-[15px]" color="primary"/>
                    </IconButton>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-row gap-x-[10px] items-center">
                        <div>
                            <img src={props.info.cPhoto} alt="_clientAvatar" className="w-[60px] h-[60px] rounded-lg"/>
                        </div>
                        <div className="flex flex-col py-[10px]">
                            <div className="flex flex-row gap-x-[15px]">
                                <span className="text-[17px]">{props.info.cName}</span>
                                <span className="text-[12px] text-green-500 bg-green-100 px-[10px] pt-[3px] rounded-lg">Offline Payment</span>
                            </div>
                            <div className="flex gap-x-[5px] items-center text-gray-600 font-normal">
                                <MailOutlineOutlinedIcon className="text-[14px] mt-[3px]"/>
                                <span className="text-[15px]">{props.info.cEmail}</span>
                                <IconButton className="mt-[2px]">
                                    <PhoneIcon className="text-[15px]"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-[10px]">
                        <ClientDetailStatusCard editable={false} title="Fri" content="Check in day"/>
                        <ClientDetailStatusCard editable={false} title="Package 1" content="Package"/>
                        <ClientDetailStatusCard editable={true} title="75" content="Total Weeks"/>
                        <ClientDetailStatusCard editable={true} title="200 lbs" content="Start Weight"/>
                        <ClientDetailStatusCard editable={false} title="8984 lbs" content="Current Weight"/>
                    </div>
                </div>
                <div>
                    <Tabs value={categoryVal} onChange={onChangeCategory}>
                        {SubCategories.map((_value, index) => {
                            return (
                                <Tab key={index} label={_value} value={index} className="normal-case"/>
                            )
                        })
                        }
                    </Tabs>
                </div>
            </div>
            <div>
                {getTabCategoryHTML()}
            </div>
        </div>
    )
}


export default ClientDetail;