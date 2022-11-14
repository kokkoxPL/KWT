import React, { useState, useEffect } from "react";

const Participant = ({ participants, setParticipants, number }) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		setParticipants([
			...participants,
			{
				id: number,
				name,
				surname,
				email,
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
							name,
							surname,
							email,
					  }
					: oldData
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, surname, email]);

	return (
		<div className="uczestnik" key={number}>
			<h1>UCZEŃ {number}</h1>
			<input
				type="text"
				placeholder="Imię"
				onChange={(e) => setName(e.target.value)}
				value={name}
				autoFocus
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
		</div>
	);
};

export default Participant;
