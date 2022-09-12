import React from "react";

const Form = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="inputs">
				<input type="text" placeholder="Imię" />
				<input type="text" placeholder="Nazwisko" />
				<input type="text" placeholder="Szkoła" />
				<input type="text" placeholder="Adres szkoły" />
				<input type="text" placeholder="E-mail" />
				<input type="text" placeholder="Numer telefonu" />

				<input type="text" placeholder="Podaj numer telefonu" />
				<input type="submit" placeholder="Prześlij" />

				{/* rodzaj konkursu, dane uczniow(imie, nazwisko) */}
				{/* ilosc uczniow(max. 5) */}
			</div>
		</form>
	);
};

export default Form;
