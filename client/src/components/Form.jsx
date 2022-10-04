import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Participant = ({ participants, setParticipants, number }) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setParticipants([
			...participants,
			{
				id: number,
				name: { name },
				surname: { surname },
				email: { email },
			},
		]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setParticipants((obj) =>
			obj.map((oldData) =>
				oldData.id === number
					? {
							id: number,
							name: { name },
							surname: { surname },
							email: { email },
					  }
					: oldData
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, surname, email]);

	return (
		<>
			<input
				type="text"
				placeholder="Imię"
				onChange={(e) => setName(e.target.value)}
				value={name}
				required
			/>
			<input
				type="text"
				placeholder="Nazwisko"
				onChange={(e) => setSurname(e.target.value)}
				value={surname}
				required
			/>
			<input
				type="email"
				placeholder="E-mail"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				required
			/>
		</>
	);
};

const Form = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [school, setSchool] = useState("");
	const [schoolAddress, setSchoolAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [participants, setParticipants] = useState([]);
	const [participantsNumber, setParticipantsNumber] = useState(1);
	const [error, setError] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			name,
			surname,
			school,
			schoolAddress,
			email,
			phone,
			participants,
		};
		setIsSubmitting(true);
		const response = await fetch("/api/form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.status !== 200) {
			setError("An unexpected error occured :(");
		}

		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			console.log(error);
		} else {
			console.log(json);
			navigate("/submitted");
		}

		setIsSubmitting(false);
	};

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<h1>Zarejestruj się</h1>
				<div className="inputs">
					<div className="school">
						<input
							type="text"
							placeholder="Szkoła"
							onChange={(e) => setSchool(e.target.value)}
							value={school}
						/>
						<input
							type="text"
							placeholder="Adres szkoły"
							onChange={(e) => setSchoolAddress(e.target.value)}
							value={schoolAddress}
						/>
						<div className="label">
							<label htmlFor="rodzaj">Rodzaj konkursu:</label>
							<select id="rodzaj">
								<option value="Modelarstwo">Modelarstwo</option>
								<option value="Interdyscypliny">Interdyscypliny</option>
								<option value="Praca_własna">Praca własna</option>
							</select>
						</div>
					</div>
					<div className="personal">
						<input
							type="text"
							placeholder="Imię opiekuna"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<input
							type="text"
							placeholder="Nazwisko opiekuna"
							onChange={(e) => setSurname(e.target.value)}
							value={surname}
						/>
						<input
							type="email"
							placeholder="E-mail"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							type="tel"
							placeholder="Numer telefonu"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
						/>
					</div>

					<h1>UCZNIOWIE</h1>
					<br />
					<div className="uczestnicy">
						{[...Array(participantsNumber)].map((item, index) => (
							<Participant
								participants={participants}
								setParticipants={setParticipants}
								number={index + 1}
							/>
						))}
						{participantsNumber < 5 && (
							<div
								onClick={() => setParticipantsNumber(participantsNumber + 1)}
							>
								+
							</div>
						)}
					</div>
				</div>
				<input type="submit" value="Zarejestruj" disabled={isSubmitting} />
			</form>
		</div>
	);
};

export default Form;
