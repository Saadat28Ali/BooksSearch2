// Component imports
import Dropdown from "../Dropdown/Dropdown";

// ------------------------------------------------------------------

export default function Searchbar(
    {
        id, 
        placeholderText, 
        dropdownOptions, 
        selectedOptionIndex, 
        setSelectedOptionIndex
    }: 
    {
        id: string,
        placeholderText?: string, 
        dropdownOptions: Array<string>, 
        selectedOptionIndex: number, 
        setSelectedOptionIndex: Function
    }
) {
    return (
        <div
        className="
        Searchbar
        rounded-lg
        shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]
        m-2

        bg-bgLight
        flex-row

        justify-between
        ">
            <input 
            type="text" 
            id={id}
            placeholder={placeholderText}
            className="
            outline-none
            rounded-l-lg
            p-3

            md:w-96
            w-6/12

            bg-bgLight

            text-bgDark
            text-xl
            font-mirage
            font-bold

            selection:bg-primaryLight

            "
            />

            <Dropdown 
            options={dropdownOptions}
            selectedOptionIndex={selectedOptionIndex}
            setSelectedOptionIndex={setSelectedOptionIndex}
            />

        </div>
    );
}