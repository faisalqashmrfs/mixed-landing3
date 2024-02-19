import  './CardSection1.css'

const CardSection1 = (props) => {
  return (
    <div className='CardSection1'>
        <img src={props.img} alt="" />
        <h5>{props.title}</h5>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default CardSection1