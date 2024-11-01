/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#131313", 
        bgLight: "#eeeeee", 
        bgLight2: "#c5c5c5", 
  
        primary: "#ffdd1e", 
        primaryLight: "#ffe57c",
      }, 
      fontFamily: {
        grotesk: "Grotesk", 
        mirage: "Mirage", 
      }, 
    },
  },
  plugins: [],
}

