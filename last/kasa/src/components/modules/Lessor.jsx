//Lessor

function Lessor({ host }) {
	const { name, picture } = host;
	const [firstname, ...lastname] = name.split(" ");

	return (
		<div className="Lessor">
				<span className="name">
					{firstname}
					<br />
					{lastname}
				</span>
			<div className="picture">
				<img src={picture} alt="lessor" />
			</div>
		</div>
	);
}

export default Lessor;