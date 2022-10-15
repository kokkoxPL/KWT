import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function ApplicantList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const get = async () => {
			const response = await fetch("/api/admin").then((res) => res.json());
			setData(response);
			console.log(response);
		};
		get();
	}, []);

	// TODO: email may not be unique
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Surname</th>
						<th>School</th>
						<th>School Address</th>
						<th>Phone</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					{data.map((data, i) => (
						<tr key={data.id}>
							<td>{i + 1}</td>
							<td>{data.name}</td>
							<td>{data.surname}</td>
							<td>{data.school}</td>
							<td>{data.schoolAddress}</td>
							<td>{data.phone}</td>
							<td>{data.email}</td>
						</tr>
					))}
				</tbody>
			</table>
			<CSVLink data={data} filename={"Applicants.csv"}>
				Export to CSV
			</CSVLink>
			;
		</>
	);
}

export default ApplicantList;
