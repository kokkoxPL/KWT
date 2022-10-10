import Participant from "./Participant";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
	console.log(process.env.REACT_APP_RECAPTCHA);
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

	// const reRef = useRef();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// const token = await reRef.current.executeAsync();
		// console.log(token);

		const data = {
			name,
			surname,
			school,
			schoolAddress,
			email,
			phone,
			participants,
			// token,
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
								key={index}
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
			{/* <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA} ref={reRef} /> */}
		</div>
	);
};

export default Form;
