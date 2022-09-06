import { Report } from "notiflix";

export const NotFound = () => {
  return (
      <main style={{ textAlign: "center" }}>
       {    Report.warning(
        'Sorry, we couldnt find that page :(.',
        '404!'
      )};  
      
    </main>
  );
};