
const Card=(props:any)=>{
    return(
        <center>
        <div className=" bg-red-300 m-13 w-27 h-47 ">
            <h1>Name:{props.Name}</h1>
            <h1>Age:{props.Age}</h1>
            <h1>Distance Learning:{props.DistanceLearning}</h1>
            <h1>Rollno:{props.Rollno}</h1>
            <h1>City:{props.City}</h1>
            <h1>Day:{props.Day}</h1>
            <h1>Center:{props.Center}</h1>
            <h1>Campus:{props.Campus}</h1>
            <h1>Batch:{props.Batch}</h1>
    
     </div>
     </center>
    )
}
export default Card