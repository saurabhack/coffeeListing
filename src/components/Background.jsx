import backImage from "../assets/bg-cafe.jpg"
import ProdutLists from "./ProductLists"

function Background(){
    return(
        <>
        <div className="w-[100vw] h-[50vh]">
            <img src={backImage} className="w-[100%] h-[100%]" alt="" />
        </div>
        <div className="w-[100vw] bg-black h-[100vh]">
            <div>
        <ProdutLists/>
            </div>
        </div>
        </>
    )
}
export default Background