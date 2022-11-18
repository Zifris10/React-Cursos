import PropTypes from 'prop-types'
import Button from './Button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber) => {
    const buttons = numbers.map(number => {
        return <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
    })
    return buttons
}

const Numbers = ({
    onClickNumber
}) => {
    return (
        <div className='numbers'>
            {renderButtons(onClickNumber)}
        </div>
    )
}

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers
