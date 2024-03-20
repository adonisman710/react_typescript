import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import { IconButton } from '@mui/material';

interface IClientDetailStatusCard {
    editable: boolean;
    title: string;
    content: string;
}

const ClientDetailStatusCard = (props: IClientDetailStatusCard) => {
    return (
        <div className="flex flex-col bg-gray-100 rounded-xl p-[10px] justify-center">
            <div className="flex justify-between">
                <span className="text-[17px]">{props.title}</span>
                {props.editable &&
                    <IconButton className="-mt-[10px] -mr-[5px]">
                        <EditCalendarOutlinedIcon className="text-[15px] text-blue-500"/>
                    </IconButton>
                }
            </div>
            <div className="flex justify-center">
                <span className="font-normal text-[13px] text-gray-600">{props.content}</span>
            </div>
        </div>
    )
}

export default ClientDetailStatusCard;