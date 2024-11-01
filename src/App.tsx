// React imports --------------------------
// Types
import { FormEvent } from "react";

// Hooks
import { useState } from "react";
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

  const [, setFetchingState] = useState<boolean>(false);
  const [fetchedBooks, setFetchedBooks] = useState<Array<bookdata_inter>>([]);
  const [dropdownOptions, ] = useState<Array<string>>(["Title", "Author", "Category"])
  const [selectedDropdownOptionIndex, setSelectedDropdownOptionIndex] = useState<number>(0);

  function mainFormSubmitCallback(event: FormEvent) {
    
    event.preventDefault();
    
    const input_textinput: HTMLInputElement | null = document.querySelector("#input_textinput");
    
    if (input_textinput !== null) {

      setFetchingState(true);

      const selected_searchBy: string = dropdownOptions[selectedDropdownOptionIndex];

      searchBook(selected_searchBy, 
        (selected_searchBy === "category") ? 
        input_textinput.value.toUpperCase() :
        input_textinput.value
      ).then(
    
        (result: any) => {
          // output_textarea.value = JSON.stringify(result.data);
          setFetchedBooks(() => {
            let newFetchedBooks: Array<bookdata_inter> = [];
            
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
        }
      ).finally(
    
        () => {setFetchingState(false);}
    
      );
    }
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
            fetchedBooks.map((item, index) => {
              return (
                <Bookcard 
                id={index.toString()}
                bookdata={item} />
              );
            })
          }

        </form>

    </div>
  );
}