const HttpHelper = () => {


    const getFromTitle = async (DataUrl, setData) => {
        const baseUrl = "https://www.omdbapi.com/?apikey=d35db9b2&t=" + DataUrl;
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        setData.push(data);
    }

    return {
        getFromTitle,

    }
}

export default HttpHelper;