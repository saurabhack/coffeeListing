import { useEffect, useState } from "react";

function ProdutLists() {
    const [data, setData] = useState([]);
    const [available,setAvailable]=useState(false);
    function changeContent(){
        setAvailable(true)
    }
    function falseContent(){
        setAvailable(false)
    }

    
    async function apiFetching() {
        const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
        const result = await response.json();
        setData(result);
        setAvailable(false)
    }
    console.log(data)

    function products(){
        const dd=data.filter((val,i)=>{
            return val.available===true
        })
        setData(dd)
        setAvailable(true)
    }
    useEffect(() => {
        apiFetching();
        products()
    }, []);


    return (
        <>
            <div className=" inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 w-full lg:w-[80vw] p-5 rounded shadow-md mx-4">
                    <h1 className="text-white text-center font-bold text-2xl">Our Collection</h1>
                    <div className="text-gray-500 w-full flex justify-center mb-4">
                        <p className="w-[50%] text-sm text-center">
                            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                        </p>
                    </div>
                    <div>
                        <div className="w-full flex justify-center gap-4 text-white"><p onClick={apiFetching} className={!available ? " p-2 bg-gray-400 font-bold rounded-lg cursor-pointer":" p-2  font-bold rounded-lg cursor-pointer" }>All Products</p><p onClick={products}  className={available ? " p-2 bg-gray-400 font-bold rounded-lg cursor-pointer" : " cursor-pointer border-red p-2 rounded-lg"}>Available Now</p></div>
                    </div>
                    <div className="grid grid-cols-4 m-10 sm:grid-cols-4 lg:grid-cols-3 gap-4">
                        {data.map((val, i) => (

                            <div key={i} className="p-4  rounded  bg ">
                                { val.popular ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" class="w-20 h-6">
                                    <rect width="100" height="20" rx="4" fill="#fbbf24"></rect>
                                            <text x="50%" y="50%" fill="#000" font-size="10" font-weight="bold" dy=".35em" text-anchor="middle" font-family="Arial, sans-serif">
                                                Popular
                                            </text>
                                    </svg>
                                ):(<></>)
                                
                               } 
                                
                                <img className="w-full h-32 object-cover rounded-lg" src={val.image} alt={val.name} />
                                <div className="w-full  flex  justify-between">
                                <h2 className="text-white font-bold mt-2">{val.name}</h2>
                                <p className="font-bold rounded-lg border-r-red-900 p-2  m-2 bg-blue-400 text-black">{val.price}</p>
                                </div>
                                <div className="w-full flex items-start">
                                { val.rating>1 ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3072 7.21992C10.9493 5.61924 11.2704 4.81889 11.7919 4.70797C11.9291 4.6788 12.0708 4.6788 12.208 4.70797C12.7295 4.81889 13.0506 5.61924 13.6927 7.21992C14.0578 8.1302 14.2404 8.58535 14.582 8.89491C14.6778 8.98174 14.7818 9.05907 14.8926 9.12582C15.2874 9.3638 15.7803 9.40794 16.7661 9.49623C18.4348 9.64568 19.2692 9.7204 19.524 10.1961C19.5768 10.2947 19.6127 10.4014 19.6302 10.5118C19.7146 11.0448 19.1012 11.6028 17.8744 12.719L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5429 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5275C16.8711 17.885 17.0217 18.5638 16.8337 18.8974C16.6649 19.1971 16.3538 19.389 16.0102 19.4054C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.238 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.238 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4054C7.64609 19.389 7.33504 19.1971 7.16617 18.8974C6.97818 18.5638 7.12878 17.885 7.42997 16.5275L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5429 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.719C4.89867 11.6028 4.28527 11.0448 4.36975 10.5118C4.38724 10.4014 4.42312 10.2947 4.47589 10.1961C4.73069 9.7204 5.56507 9.64568 7.23384 9.49623C8.21962 9.40794 8.71251 9.3638 9.10735 9.12582C9.2181 9.05907 9.32211 8.98174 9.41793 8.89491C9.75954 8.58535 9.94211 8.1302 10.3072 7.21992Z" fill="#F6C768" stroke="#F6C768" stroke-width="2"/>
                                    </svg>
                                    
                                ):(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.1438 6.62759C10.9304 4.6666 11.3237 3.6861 12 3.6861C12.6763 3.6861 13.0696 4.6666 13.8562 6.6276L13.8929 6.71891C14.3373 7.82678 14.5595 8.38071 15.0123 8.7174C15.4652 9.05409 16.0596 9.10733 17.2485 9.2138L17.4635 9.23305C19.4093 9.40732 20.3822 9.49445 20.5904 10.1134C20.7985 10.7324 20.076 11.3898 18.631 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.881 14.5776C16.8492 14.659 16.8227 14.7423 16.8018 14.8271C16.6898 15.2818 16.7969 15.7645 17.0111 16.73L17.0778 17.0305C17.4714 18.8049 17.6683 19.692 17.3246 20.0747C17.1962 20.2177 17.0293 20.3206 16.8438 20.3712C16.3476 20.5066 15.6432 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8936 17.5355 11.6847 17.5689C11.1536 17.6537 10.691 18.0306 9.7658 18.7845C8.35684 19.9326 7.65237 20.5066 7.15617 20.3712C6.97075 20.3206 6.80384 20.2177 6.67542 20.0747C6.33174 19.692 6.52857 18.8049 6.92225 17.0305L6.98892 16.73C7.20313 15.7645 7.31024 15.2818 7.19818 14.8271C7.17728 14.7423 7.15084 14.659 7.11904 14.5776C6.94857 14.1415 6.58282 13.8087 5.85131 13.1432L5.36903 12.7044C3.92398 11.3898 3.20146 10.7324 3.40964 10.1134C3.61782 9.49445 4.59073 9.40732 6.53654 9.23305L6.75148 9.2138C7.94039 9.10733 8.53485 9.05409 8.9877 8.7174C9.44055 8.38071 9.66275 7.82678 10.1071 6.71891L10.1438 6.62759Z" stroke="#6F757C" stroke-width="2"/>
                                    </svg>
                                    )
                                
                                
                               }
                               <p className="text-white font-bold">{val.rating}</p> 
                               <p className="text-gray-500 font-bold"> ({val.votes} votes)</p>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProdutLists;
