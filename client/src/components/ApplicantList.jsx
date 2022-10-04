import { useState, useEffect } from "react";

function ApplicantList() {
	const [list, setList] = useState([]);

	useEffect(() => {
		async function get() {
			const data = await fetch("/api/applicants").then((res) => res.json());
			setList(data);
		}
		get();
	}, []);

	// TODO: email may not be unique
	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Surname</th>
					<th>School</th>
					<th>School Address</th>
					<th>E-mail</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{list.map((entry, i) => (
					<tr key={entry.email}>
						<td>{i + 1}</td>
						<td>{entry.name}</td>
						<td>{entry.surname}</td>
						<td>{entry.school}</td>
						<td>{entry.schoolAddress}</td>
						<td>{entry.email}</td>
						<td>{entry.phone}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default ApplicantList;
