// React imports
import { useState } from "react";

function Dropdown(
    {
        options,  
        selectedOptionIndex, 
        setSelectedOptionIndex
    }:
    {
        options?: Array<string>,
        selectedOptionIndex?: number, 
        setSelectedOptionIndex: Function
    }
) {

    function dropdownClickCallback(event: any) {
        event.preventDefault();
        setExpanded(!expanded);
    }

    function optionClickCallback(event: any, index: number) {
        event.preventDefault();
        setSelectedOptionIndex(index);
        setExpanded(false);
    }

    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <div
        className={
        ((expanded) ? `
        Dropdown

        relative 
        
        bg-bgLight
        
        rounded-t-lg
        p-1
        ` : `
        Dropdown
        
        relative
        
        rounded-lg
        p-1
        `)
        }>
            <div
            onClick={dropdownClickCallback}
            className="
            Dropdown_Selected
            rounded-lg
            min-w-32
            min-h-10
            select-none

            bg-primary

            font-bold
            text-lg
            font-mirage
            ">
                {(options && selectedOptionIndex !== undefined) ? options[selectedOptionIndex] : ""}
            </div>
            <div
            className={
            (expanded) ? `
                Dropdown_Overlay

                rounded-b-lg
                bg-bgLight
                p-1

                absolute
                z-10
                top-11

                gap-1
            ` : `
                Dropdown_Overlay

                rounded-b-lg
                p-1

                absolute
                z-10
                top-11

                gap-1
            `}>
                {
                    (expanded) ? (
                        options?.map((item, index) => {
                            return (
                                <div 
                                key={index}
                                onClick={(event) => {optionClickCallback(event, index)}}
                                className="
                                Dropdown_Overlay_Option
                                min-w-32
                                min-x-10
                                rounded-lg
                                select-none
                                py-2
        
        
                                bg-primaryLight
        
                                font-mirage
                                font-bold
                                ">
                                    {item}
                                </div>
                            );
                        })
                    ) : <></>
                }
            </div>
        </div>
    );
}

export default Dropdown;