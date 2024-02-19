import "./CardSection5.css"

const CardSection5 = (props) => {
  return (
    <div>
         <div className='CardSection2'>
        <img src={props.img} alt="" />
        <h6>{props.title}  </h6> <span>$49.00</span>

        <p>{props.paragraph}</p>

    </div>
    </div>
  )
}

export default CardSection5