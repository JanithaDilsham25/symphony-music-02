    import vector2 from "../../assets/curves/vector2.png";
import vector1 from "../../assets/curves/vector1.png";
    
    function Curves(){
        return(
            <>
             {/* Absolute Section */}
      <div className="
        absolute 
        -z-1
        top-20 
        w-full h-[3000px]
        border-2 border-blue-500
        flex
      ">
        
        {/* Left box */}
        <div className="w-1/2 flex-1 border-2 border-green-400 bg-no-repeat" style={{
            backgroundImage: `url(${vector2})`,
            backgroundSize: "100% auto",
            }}/>

        {/* Right box */}
        <div className="flex-1 border-2 border-b-yellow-500 mt-140 bg-no-repeat" style={{
            backgroundImage: `url(${vector1})`,
            backgroundSize: "100% auto",
            }} />

      </div>
            </>
        )
    }

    export default Curves;