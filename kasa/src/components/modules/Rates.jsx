//Rates for houses
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
    solid
} from '@fortawesome/fontawesome-svg-core/import.macro'

function Rates({
    rateNum
}) {
    const rates = Array(+rateNum)
        .fill(1)
        .concat(Array(5 - rateNum).fill(0));

    return (
        <div className="Rates">
			{rates.map((rate, i) => {
				return (
					<span key={`rate-${i}`}>
						{rate === 1 ? (
							<FontAwesomeIcon icon={solid('star')} className="full" />
						) : (
							<FontAwesomeIcon icon={solid('star')} className="empty" />
						)}
					</span>
				);
			})}
		</div>
    );
}

export default Rates;