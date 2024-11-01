import axios from "axios";

const url = "https://saadat-ali-book-server.vercel.app/api/search"
// const url = "http://localhost:5000/api/"

function searchBook(searchBy: string, value: string) {

    return new Promise((resolve, reject) => {
        axios({
            method: "get", 
            url: url + `?searchby=${searchBy.toLowerCase()}&value=${value.toLowerCase()}`,
        }).then(
            (result) => {
                resolve(result);
            }
        ).catch(
            (error) => {
                console.log("Encountered an error during axios fetch request");
                reject(error);
            }
        );
    });
}

export { searchBook };