import axios from "axios";

const url = "https://saadat-ali-book-server.vercel.app/api/search"
// const url = "http://localhost:5000/api/search"
// const url = "https://books-server-git-pagesupport-saadat28alis-projects.vercel.app/api/search";

function searchBook(searchBy: string, value: string, pageNo: Number, pageSize: Number) {

    return new Promise((resolve, reject) => {
        axios({
            method: "get", 
            url: url + `?searchby=${searchBy.toLowerCase()}&value=${value.toLowerCase()}&pageno=${pageNo}&pagesize=${pageSize}`,
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