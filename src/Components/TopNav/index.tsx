import React from "react";
import { IconButton } from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const TopNav = () => {
    return (
        <div className="absolute w-full flex justify-center items-center h-[60px] border-b-[1px] border-gray-200">
            <div className="w-[90%] max-w-[1250px] h-full flex items-center">
                <div className="w-full flex items-center justify-between normal-case">
                    <div className="">
                        <Button variant="text" className="px-[15px] normal-case text-black text-[14px] rounded-lg"
                            startIcon={<ArrowBackIosOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                        >
                            Client
                        </Button>
                    </div>
                    <div className="flex gap-[5px]">
                        <div className="flex items-center gap-x-[10px]">
                            <Button variant="text" className="bg-gray-100 px-[15px] normal-case text-black text-[13px] rounded-lg"
                                startIcon={<AddBoxOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                            >
                                Workout Program
                            </Button>
                            <Button variant="text" className="bg-gray-100 px-[15px] normal-case text-black text-[13px] rounded-lg"
                                startIcon={<AddBoxOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                            >
                                Nutrition Plan
                            </Button>
                            <Button variant="text" className="bg-gray-100 px-[15px] normal-case text-black text-[13px] rounded-lg"
                                startIcon={<AddBoxOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                            >
                                Supplement Plan
                            </Button>
                            <Button variant="text" className="bg-gray-100 px-[15px] normal-case text-black text-[13px] rounded-lg"
                                startIcon={<AddBoxOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                            >
                                Check in form
                            </Button>
                            <Button variant="text" className="bg-gray-100 px-[15px] normal-case text-black text-[13px] rounded-lg"
                                startIcon={<AddBoxOutlinedIcon className="text-[14px] -mt-[1px]"/>}
                            >
                                Habit form
                            </Button>
                        </div>
                        <div className="flex items-center ml-[10px]">
                            |
                        </div>
                        <div className="flex items-center">
                            <IconButton>
                                <Badge badgeContent={2} color="error">
                                    <NotificationsNoneIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <MessageOutlinedIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TopNav;