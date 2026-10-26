export default function FlexPage(){
    // return (
    //     <div>
    //       <div>
    //        Name : Tejasri Kommina
    //       </div>

    //        <div>
    //         Location: Hyderabad
    //        </div>

    //        <div>
    //         Role: Full Stack Developer.
    //        </div>
    //     </div>
       
    // )

    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(2,1fr)",
            gap:"10px",
            padding:"10px"
        }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
    )

    
}