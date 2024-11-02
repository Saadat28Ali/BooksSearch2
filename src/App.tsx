// React imports --------------------------
// Types
import { FormEvent } from "react";

// Hooks
import { useState, useEffect } from "react";
// ----------------------------------------

// Asset imports --------------------------
import { searchBook } from "../public/scripts/searchBook";

// Component imports ----------------------
import Searchbar from "./components/Searchbar/Searchbar";
import Submitbutton from "./components/Submitbutton/Submitbutton";
import Bookcard from "./components/Bookcard/Bookcard";

// Type imports
import { bookdata_inter } from "./components/Bookcard/Bookcard";

// ------------------------------------------------------------------------

export default function App() {

  // Last input query
  const [searchBy, setSearchBy] = useState<string>("");
  const [searchFor, setSearchFor] = useState<string>("");

  // State for fetching data
  const [fetchingState, setFetchingState] = useState<boolean>(false);
  const [fetchedBooks, setFetchedBooks] = useState<Array<bookdata_inter>>([]);
  const [pageNo, setPageNo] = useState<number>(0);
  const [pageSize,] = useState<number>(5);

  // (Search by) Dropdown state
  const [dropdownOptions, ] = useState<Array<string>>(["Title", "Author", "Category"])
  const [selectedDropdownOptionIndex, setSelectedDropdownOptionIndex] = useState<number>(0);

  function fetchData() {
    setFetchingState(true);
    searchBook(searchBy, searchFor, pageNo, pageSize).then(
      (result: any) => {
        setFetchedBooks(() => {
          let newFetchedBooks: Array<bookdata_inter> = [];
          
          console.log(result);
          
          result.data.forEach((bookitem: any) => {
            newFetchedBooks.push({
              id: bookitem._id, 
              title: bookitem.title, 
              author: bookitem.author, 
              category: bookitem.category, 
              cover_url: bookitem.cover_url, 
              description: bookitem.descriptions
            });
          });
          
          return newFetchedBooks;
        });
        console.log("Set Fetched Books");
      }
    ).finally(
      () => {
        setFetchingState(false);
        console.log(fetchedBooks);
      }
    );

  }

  useEffect(() => {
    if (searchFor !== "" && searchBy !== "") {
      console.log("Fetching book data");
      fetchData();
    }
  }, [pageNo, searchBy, searchFor]);

  function mainFormSubmitCallback(event: FormEvent) {
    console.log("Form submitted");
    event.preventDefault();
    setPageNo(0);
    setSearchBy(() => {
      let newSearchBy: string = dropdownOptions[selectedDropdownOptionIndex];
      return newSearchBy;
    });
    const input_textinput: HTMLInputElement | null = document.querySelector("#input_textinput");
    if (input_textinput !== null) setSearchFor(input_textinput.value);
    // fetchData();
    // if (input_textinput !== null) {

    //   setFetchingState(true);

    //   const selected_searchBy: string = dropdownOptions[selectedDropdownOptionIndex];

    //   searchBook(selected_searchBy, 
    //     (selected_searchBy === "category") ? 
    //     input_textinput.value.toUpperCase() :
    //     input_textinput.value, 
    //     pageNo, pageSize
    //   ).then(
    
    //     (result: any) => {
    //       // output_textarea.value = JSON.stringify(result.data);
    //       setFetchedBooks(() => {
    //         let newFetchedBooks: Array<bookdata_inter> = [];
            
    //         result.data.forEach((bookitem: any) => {
    //           newFetchedBooks.push({
    //             id: bookitem._id, 
    //             title: bookitem.title, 
    //             author: bookitem.author, 
    //             category: bookitem.category, 
    //             cover_url: bookitem.cover_url, 
    //             description: bookitem.descriptions
    //           });
    //         });
            
    //         return newFetchedBooks;
    //       });
    //     }
    //   ).finally(
    
    //     () => {setFetchingState(false);}
    
    //   );
    // }
  }

  function changePageNo(decrement = false) {

    if (decrement && pageNo > 0) {
      console.log("Decrement page no");
      setPageNo((oldPageNo: number) => {
        let newPageNo: number = oldPageNo;
        return newPageNo - 1;
      })
    } else if (!decrement) {
      console.log("Increment page no");
      setPageNo((oldPageNo: number) => {
        let newPageNo: number = oldPageNo;
        return newPageNo + 1;
      })

    }
    // const input_textinput: HTMLInputElement | null = document.querySelector("#input_textinput");
    
    // if (input_textinput !== null) {

    //   setFetchingState(true);

    //   const selected_searchBy: string = dropdownOptions[selectedDropdownOptionIndex];

    //   searchBook(selected_searchBy, 
    //     (selected_searchBy === "category") ? 
    //     input_textinput.value.toUpperCase() :
    //     input_textinput.value, 
    //     pageNo, pageSize
    //   ).then(
    
    //     (result: any) => {
    //       // output_textarea.value = JSON.stringify(result.data);
    //       setFetchedBooks(() => {
    //         let newFetchedBooks: Array<bookdata_inter> = [];
            
    //         result.data.forEach((bookitem: any) => {
    //           newFetchedBooks.push({
    //             id: bookitem._id, 
    //             title: bookitem.title, 
    //             author: bookitem.author, 
    //             category: bookitem.category, 
    //             cover_url: bookitem.cover_url, 
    //             description: bookitem.descriptions
    //           });
    //         });
            
    //         return newFetchedBooks;
    //       });
    //     }
    //   ).finally(
    
    //     () => {setFetchingState(false);}
    
    //   );
    // }

  }

  return (
    <div
    className="
    App

    w-full
    min-h-screen

    bg-bgDark
    ">
      
      <form
        id="main_form"
        onSubmit={mainFormSubmitCallback}
        className="
        flex
        flex-col
        justify-center
        items-center

        md:gap-5
        gap-0
        "
        >
          <div
          className="
          text-bgLight
          "> {fetchingState.toString()} </div>
          <div
          className="
          min-h-96

          gap-5
          "
          >
            <Searchbar 
            id="input_textinput" 
            placeholderText="Enter a book title..." 
            dropdownOptions={dropdownOptions}
            selectedOptionIndex={selectedDropdownOptionIndex}
            setSelectedOptionIndex={setSelectedDropdownOptionIndex}
            />

            <Submitbutton 
            id="submit_button"
            text="Submit"
            />
          </div>

          {
            (fetchedBooks.length) ? 
            (
              <div
              className="
              page_buttons_div
              
              flex-row
              ">
                {/* <Submitbutton id="prevPage" text="<" callback={() => {changePageNo(true)}}/> */}
                <button id="prevPage" onClick={(event) => {event.preventDefault(); changePageNo(true);}}> &lt; </button>
                <div
                className="
                min-w-16
                min-h-16

                rounded-lg
                m-5

                bg-bgLight

                flex
                flex-row
                justify-center
                items-center

                font-grotesk
                leading-5
                "> {pageNo} </div>
                {/* <Submitbutton id="nextPage" text=">" callback={() => {changePageNo(false)}}/> */}
                <button id="nextPage" onClick={(event) => {event.preventDefault(); changePageNo(false);}}> &gt; </button>
              </div>
            ) :
            (
              <></>
            )
          }

          {
            fetchedBooks.map((item, index) => {
              return (
                <Bookcard 
                key={index}
                id={index.toString()}
                bookdata={item} />
              );
            })
          }
          
        </form>

    </div>
  );
}