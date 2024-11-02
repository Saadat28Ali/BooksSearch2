// Type imports
import { MouseEventHandler } from "react";

function Button(
    {
        id, 
        text, 
        callback, 
        disabled
    }: 
    {
        id: string, 
        text: string, 
        callback?: MouseEventHandler, 
        disabled?: boolean
    }
) {
    return (
        <div
        className="
        Button
        ">
            <button
            id={id}
            onClick={(callback) ? callback : () => {}}
            disabled={disabled}
            className="
            min-w-16
            min-h-16

            p-4
            rounded-lg
            shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
            
            bg-primary
            disabled:bg-bgLight2

            font-mirage
            font-bold
            text-xl
            text-bgDark

            active:scale-95
            "
            >
                {text}
            </button>
        </div>
    );
}

export default Button;