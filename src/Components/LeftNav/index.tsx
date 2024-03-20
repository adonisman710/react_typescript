import React from "react";
import { IconButton } from "@mui/material";
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';

const LeftNav = () => {
    return(
        <div className="fixed w-[50px] bg-gray-200 h-screen z-10">
            <div className="h-full flex flex-col items-center text-gray-500">
                <div className="h-[60px] flex items-end">
                    <IconButton href="/">
                        <CloudCircleOutlinedIcon/>
                    </IconButton>
                </div>
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col items-center pt-[40px] gap-y-[20px]">
                        <IconButton href="/dashboard">
                            <GridViewIcon/>
                        </IconButton>
                        <IconButton href="/clients">
                            <GroupOutlinedIcon/>
                        </IconButton>
                        <IconButton href="/">
                            <Groups2OutlinedIcon/>
                        </IconButton>
                        <IconButton href="/">
                            <CreditCardOutlinedIcon/>
                        </IconButton>
                        <IconButton href="/">
                            <CalendarMonthOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="flex flex-col items-center pb-[40px] gap-y-[20px]">
                        <IconButton href="/">
                            <SettingsOutlinedIcon/>
                        </IconButton>
                        <IconButton href="/">
                            <PersonIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftNav;