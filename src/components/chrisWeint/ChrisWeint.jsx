import chris from '../../img/chris.png'
import './ChrisWeint.css'

const ChrisWeint = (props) => {
    return (props.trigger) ? (
        <>
            <div className="popup1">
                <p className='pAnimation1' onClick={() => props.setTrigger(false)}>X</p>
                <img src={chris} alt="" />
            </div>
        </>
    ) : '';
}
export default ChrisWeint