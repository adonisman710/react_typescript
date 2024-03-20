import { IClientInfo, ILinkDetail } from "../Common/interface";

export const ClientInfos: IClientInfo[] = [
    {
        cId: 1,
        cPhoto: "https://randomuser.me/api/portraits/men/20.jpg",
        cName: "Name A",
        cEmail: "a@gmail.com"
    },
    {
        cId: 2,
        cPhoto: "https://randomuser.me/api/portraits/women/21.jpg",
        cName: "Name B",
        cEmail: "b@gmail.com"
    },
    {
        cId: 3,
        cPhoto: "https://randomuser.me/api/portraits/women/23.jpg",
        cName: "Name C",
        cEmail: "c@gmail.com"
    },
    {
        cId: 4,
        cPhoto: "https://randomuser.me/api/portraits/men/50.jpg",
        cName: "Name D",
        cEmail: "d@gmail.com"
    },
    {
        cId: 5,
        cPhoto: "https://randomuser.me/api/portraits/women/80.jpg",
        cName: "Name E",
        cEmail: "e@gmail.com"
    },
]

export const LinkArray: ILinkDetail[] = [
    {
        lName: "Dashboard",
        lUrl: "dashboard"
    },
    {
        lName: "Clients",
        lUrl: "client"
    },
    {
        lName: "Client",
        lUrl: ""
    }
]

export const SubCategories = [
    "Dashboard",
    "Checkins",
    "Gallery",
    "Q&A",
    "Nutrition",
    "Supplements",
    "Workout",
    "Calendar",
    "Daily Habits",
    "Nutrition Log",
    "Log",
    "Billing"
]