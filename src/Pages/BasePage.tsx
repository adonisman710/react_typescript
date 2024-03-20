import React from "react";
import LeftNav from "../Components/LeftNav";
import TopNav from "../Components/TopNav";

const BasePage = ({children} : React.PropsWithChildren) => {
    return (
        <div className="relative flex flex-row w-full">
            <LeftNav/>
            <div className="relative w-full pl-[50px]">
                <div className="relative flex flex-col w-full">
                    <TopNav/>
                    <div className="w-full flex justify-center pt-[60px]">
                        <div className="w-[90%] max-w-[1250px] flex justify-center py-[20px]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasePage;