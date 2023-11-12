import { useEffect, useState } from "react";
import News from "./News";

const GetNews = (start, numberOfDivsNews) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("cachedData");

        console.log(cachedData.length);
        console.log(cachedData.length > 2);

        if (cachedData.length > 2) {
          setData(JSON.parse(cachedData));
          console.log(cachedData);
          console.log("qua");
        } else {
          const out = [];

          console.log("qui");

          for (let i = 1; i <= 2; i++) {
            const url = `https://www.unical.it/api/news/by-context/1?page=${i}&page_size=6&category=9&lang=en`;
            const response = await fetch(url);

            if (response.ok) {
              const content = await response.json();

              for (let j = 0; j < content.results.length; j++) {
                const title = content.results[j].publication.title;
                const subheading = content.results[j].publication.subheading;
                const image = content.results[j].publication.image;
                const alt = content.results[j].publication.preview_image.title;

                out.push({
                  title,
                  subheading,
                  image,
                  alt,
                });
              }
            } else {
              console.error("Errore status code:", response.status);
            }
          }

          // Salva i dati nella cache
          localStorage.setItem("cachedData", JSON.stringify(out));

          setData(out);
          console.log(out);
        }
      } catch (error) {
        console.error("Errore durante la richiesta JSON:", error);
      }
    };

    fetchData();
  }, []);

  return <News start={start} numberOfDivsNews={numberOfDivsNews} data={data} />;
};

export default GetNews;
