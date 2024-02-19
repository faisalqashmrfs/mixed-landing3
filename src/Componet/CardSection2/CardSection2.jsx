import  './CardSection2.css'

const CardSection2 = (props) => {
  return (
    <div>
         <div className='CardSection2'>
        <img src={props.img} alt="" />
        <h6>{props.title}   <button>bro</button></h6>

        <p>{props.paragraph} <strong>{props.head}</strong></p>

    </div>
    </div>
  )
}

export default CardSection2