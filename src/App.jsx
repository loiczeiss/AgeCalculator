import { useState } from "react";
import "./App.css";
import Icon from "./assets/icon-arrow.svg";

function App() {
  const [year, setYear] = useState("--");
  const [month, setMonth] = useState("--");
  const [day, setDay] = useState("--");
  const [inputDay, setInputDay] = useState('')
  const [inputMonth, setinputMonth] = useState('')
  const [inputYear, setInputYear] = useState('')

  const dateInput = new Date(`${inputYear},${inputMonth},${inputDay}`).getTime()
  
  const dateToday = new Date().getTime()
  
  const milliseconds = dateToday-dateInput

function msToYearsMonthsDays() {

  const msPerDay = 24 * 60 * 60 * 1000; // milliseconds in a day
  const msPerYear = msPerDay * 365.25; // average milliseconds in a year

  setYear(Math.floor(milliseconds / msPerYear)) ;
  const remainingMilliseconds = milliseconds % msPerYear;
  setMonth(Math.floor(remainingMilliseconds / (msPerDay * 30.44))); // average days in a month
  setDay(Math.floor((remainingMilliseconds % (msPerDay * 30.44)) / msPerDay));

}
function isDateValid(day, month, year) {
  const date = new Date(`${year}-${month}-${day}`);
  return !isNaN(date.getTime()) && date.getDate() == day && date.getMonth() + 1 == month && date.getFullYear() == year;
}
function handleButtonClick() {
  const isInputValid = isDateValid(inputDay, inputMonth, inputYear);

  if (!isInputValid ) {
    // Show an error message to the user, e.g., set an error state
    // You can also display a message in the UI
    alert("Invalid date. Please entergerg a valid date.");
    return;
  } 

  // If the date is valid, you can proceed with your calculations
  msToYearsMonthsDays(milliseconds);
}



// const calculate = () => {
  
//   console.log(dayInput)
// }
 

  return (
    <>
      <div className="flex h-screen w-screen bg-OffWhite items-center justify-center">
        <main className="flex bg-white w-10/12 sm:w-10/12 xl:w-7/12 xl:h-9/12 rounded-t-xl rounded-bl-xl rounded-br-[100px] md:rounded-br-[150px] flex-col">
          <section className="m-4 sm:m-12 mb-0 w-full">
           <div
              className="w-11/12 sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-11/12">
              <article className="flex h-min w-full sm:w-8/12 lg:w-6/12 xl:w-8/12 justify-start mb-8 sm:mb-12">
                <div className="flex flex-col mr-4 sm:mr-6">
                  <label
                    htmlFor=""
                    className="font-poppins font-bold text-sm text-SmokeyGrey mb-2"
                  >
                    DAY
                  </label>
                  <input
                    type="text"
                    className="w-16 sm:w-32 h-10 px-2 py-1 md:px-4 md:py-2 border border-SmokeyGrey focus:border-Purple 
                     outline-none rounded-md placeholder:font-poppins font-extrabold text-sm md:text-lg"
                    placeholder="DD"
                    value={inputDay}
                    onChange={(e)=> setInputDay(e.target.value)}
                  />
                </div>
                <div className="flex flex-col mr-4 sm:mr-6">
                  <label
                    htmlFor=""
                    className="font-poppins font-bold text-sm text-SmokeyGrey mb-2"
                  >
                    MONTH
                  </label>
                  <input
                    type="text"
                    className="w-16 sm:w-32 h-10 px-2 py-1 md:px-4 md:py-2 border border-SmokeyGrey focus:border-Purple  
                    outline-none rounded-md placeholder:font-poppins font-extrabold text-sm md:text-lg"
                    placeholder="MM"
                    value={inputMonth}
                    onChange={(e)=>setinputMonth(e.target.value)}
                
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="font-poppins font-bold text-sm text-SmokeyGrey mb-2"
                  >
                    YEAR
                  </label>
                  <input
                    type="text"
                    className="w-16 sm:w-32 h-10 px-2 py-1 md:px-4 md:py-2 border border-SmokeyGrey focus:border-Purple 
                     outline-none rounded-md placeholder:font-poppins font-extrabold text-sm md:text-lg"
                    placeholder="YYYY"
                    value={inputYear}
                    onChange={(e)=>setInputYear(e.target.value)}
                  />
                </div>
              </article>
              <span className="flex flex-col items-center sm:flex-row sm:items-center">
                <hr className="w-full xl:w-11/12 mb-4 sm:mb-0" />
                <button 
                onClick={()=> handleButtonClick()}
                className="bg-Purple w-12 h-12 -mt-10 md:mt-0 rounded-full xl:h-16 xl:w-16 flex items-center justify-center focus:bg-black">
                  <img className="w-1/2 h-1/2" src={Icon} alt="" />
                </button>
              </span>
            </div>
          </section>
          <section className="flex flex-col mx-4 sm:mx-12 mb-12 text-[40px] md:text-[60px] font-extrabold font-poppins justify-center h-full italic">
            <p>
              <span className="text-Purple">{year}</span> years
            </p>
            <p>
              <span className="text-Purple">{month}</span> months
            </p>
            <p>
              <span className="text-Purple">{day}</span> days
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
