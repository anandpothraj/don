import { createContext, useContext, useState, useEffect} from "react";

const News = createContext();

const Context = ({ children }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [theme , setTheme ] = useState("dark");
    const [currentCat, changeCat] = useState("all");
    const [ articles , setArticles ] = useState([]);
    const [ currentIndex , setCurrentIndex ] = useState(0);

    const lastIndex = articles.length;
    const [selectedCategories , setSelectedCategories ] = useState([]);
    const apiKey = "3b8cc2ec31ed4f4c8adb3155639eb972";
    const country = "in";

    console.log(articles)

    useEffect(()=> {
        setCurrentIndex(0);
    
        const getNews = async () => {
          if(currentCat === "all"){
            const url = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
          }
          else if(currentCat === "trending"){
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
          }else{
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${currentCat}&apiKey=${apiKey}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
          }
            
        }
    
        getNews();
      
      },[currentCat])

    return (
        <News.Provider value={{ 
            lastIndex,
            name, setName,
            email, setEmail,
            theme, setTheme,
            currentCat, changeCat,
            articles , setArticles,
            currentIndex , setCurrentIndex,
            selectedCategories, setSelectedCategories,
        }}
        >
            {children}
        </News.Provider>
    )
};

export const NewsState = () => {
    return useContext(News);
};

export default Context;