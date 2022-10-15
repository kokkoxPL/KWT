import Participant from "./Participant";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
	const [name, setName] = useState("Marek");
	const [surname, setSurname] = useState("Kowal");
	const [school, setSchool] = useState("zstio");
	const [schoolAddress, setSchoolAddress] = useState("jarosław");
	const [email, setEmail] = useState("mark@gmail.com");
	const [phone, setPhone] = useState("987654321");
	const [type, setType] = useState("Modelarstwo");
	const [participants, setParticipants] = useState([]);
	const [participantsNumber, setParticipantsNumber] = useState(1);
	const [error, setError] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const reRef = useRef();

	const change = () => {
		console.log(reRef.current.getValue());
	};

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
		const api = "/api/form";
		const body = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		setIsSubmitting(true);
		const response = await fetch(api, body);
		const json = await response.json();

		console.log(json);
		if (!response.ok) {
			setError(json.error);
			console.log(error);
		} else {
			navigate("/");
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
							<select
								id="rodzaj"
								onChange={(e) => setType(e.target.value)}
								value={type}
							>
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
								key={index + 1}
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
			<ReCAPTCHA
				onChange={change}
				sitekey={process.env.REACT_APP_RECAPTCHA}
				ref={reRef}
			/>
		</div>
	);
};

export default Form;
