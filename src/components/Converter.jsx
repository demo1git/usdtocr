import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
	convertMillionToCroreByExchangeRate,
	convertBillionToCroreByExchangeRate,
} from "../utils/util";

const Converter = () => {
	const [value, setValue] = useState("");
	const [type, setType] = useState("Million");
	const [result, setResult] = useState("");
	const [exchangeRate, setExchangeRate] = useState("80");

	// Handler on USD Value change
	const handleUSDChange = (e) => {
		setValue(e.target.value);
	};

	// Handler on exchange rate change
	const handleExchangeRate = (e) => {
		setExchangeRate(e.target.value);
	};

	// Handler on Type change
	const handleType = (e) => {
		setType(e.target.value);
	};

	// Covert USD amount to Indian crore based on exchange rate

	const handleSubmit = () => {
		if (type === "Million") {
			setResult(convertMillionToCroreByExchangeRate(value, exchangeRate));
		}
		if (type === "Billion") {
			setResult(convertBillionToCroreByExchangeRate(value, exchangeRate));
		}
	};

	return (
		<div style={{ padding: "40px" }}>
			<Container>
				<Form>
					<Form.Group className='mb-3' controlId='formUsd'>
						<Form.Label>Enter USD</Form.Label>
						<Form.Control
							type='text'
							placeholder='USD amount'
							onChange={handleUSDChange}
						/>
						<Form.Select onChange={handleType}>
							<option value='Million'>Million</option>
							<option value='Billion'>Billion</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formRate'>
						<Form.Label>Exchange Rate</Form.Label>
						<Form.Control
							type='text'
							placeholder='Exchange rate'
							onChange={handleExchangeRate}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formInr'>
						<Form.Label>INR Value</Form.Label>
						<Form.Control type='text' disabled value={result} />
					</Form.Group>
					<Button variant='primary' onClick={handleSubmit}>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Converter;
