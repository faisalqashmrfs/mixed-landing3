import   './CardSection9.css'

const CardSection9 = (props) => {
  return (
    <>
   <div className="CardSection9">
   <img src={props.img} alt="" />
   <div className="head-CardSection9">
   <h5>{props.title}  </h5> 
        <p>{props.paragraph}</p>
   </div>
        
   </div>
   
    </>
  )
}

export default CardSection9