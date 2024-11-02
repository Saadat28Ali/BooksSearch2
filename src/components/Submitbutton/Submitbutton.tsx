// Type imports
import { MouseEventHandler } from "react";

function Submitbutton(
    {
        id, 
        text, 
        callback
    }: 
    {
        id: string, 
        text: string, 
        callback?: MouseEventHandler
    }
) {
    return (
        <div
        className="
        Submitbutton
        ">
            <button
            type="submit"
            id={id}
            onClick={(callback) ? callback : () => {}}
            className="
            min-w-16
            min-h-16

            p-4
            rounded-lg
            shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
            
            bg-primary

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

export default Submitbutton;