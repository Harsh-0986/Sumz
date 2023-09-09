import  {useState} from 'react'
import {linkIcon} from "../assets";

const Demo = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: ""
    });

    const handleSubmit = async (e) => {}

    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                {/* Search */}
                <form onSubmit={handleSubmit} className="relative flex justify-center items-center">
                    <img src={linkIcon} alt={"link_icon"} className={"absolute left-0 my-2 ml-3 w-5"}/>
                    <input type={"url"} placeholder={"Enter a URL"} value={article.url} onChange={(e) => {setArticle({...article, url: e.target.value})}} required className={"url_input peer"}/>
                    <button className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700" type={"submit"}>↵</button>
                </form>
                {/* Browse URL History */}

            </div>

            {/* Display results */}
        </section>
    )
}
export default Demo
