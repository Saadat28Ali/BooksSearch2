interface bookdata_inter {
    id: string, 
    author: string, 
    title: string, 
    category: string, 
    description: string, 
    cover_url: string
}

function removeUnderscores(s: string) {
    let s_array: Array<string> = s.split("");
    s_array.forEach((item, index) => {
        if (item === '_') {
            s_array[index] = ' ';
        }
    });
    return s_array.join("");
}

function Bookcard(
    {
        id, 
        bookdata
    }:
    {
        id: string, 
        bookdata: bookdata_inter
    }
) {

    return (
        <div
        id={id}
        className="
        Bookcard

        p-10
        md:rounded-lg
        md:shadow-[0px_0px_20px_2px_rgba(0,0,0,1)]

        bg-bgLight

        md:w-[700px]
        w-screen

        font-mirage
        text-xl
        font-bold
        ">
            <img
            src={bookdata.cover_url}
            sizes="(min-width: 200px) 300px"
            onError={
                (event: any) => {
                    event.target.src="https://placehold.co/200x300/png"; 
                }
            }
            />

            <h1
            className="
            mt-5

            text-3xl
            text-wrap
            text-center
            "
            > {bookdata.title} </h1>

            <h2
            className="
            mb-5

            text-xl
            font-normal
            "
            > {"by " + bookdata.author} </h2>

            <p
            className="
            
            p-2
            rounded-lg
            mb-5

            bg-primary

            first-letter:uppercase
            font-bold
            text-neutral-800
            text-sm
            "
            > {removeUnderscores(bookdata.category)} </p>

            <p
            className="
            font-normal
            leading-6
            font-grotesk
            text-justify
            "
            > {bookdata.description} </p>
        </div>
    );
}

export default Bookcard;
export type { bookdata_inter };