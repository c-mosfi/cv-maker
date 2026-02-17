import { useState } from 'react';
import { CvForm } from './form/CvForm';
import { CvView } from './CvView';

export const Cv = () => {
	let [isEditing, setIsEditing] = useState(true);
	let [formData, setFormData] = useState({
		generalData: {}, // single
		practicalData: [], // multiple object entries [{exp1},{exp2}]
		educationalData: [], // multiple object entries [{exp1},{exp2}]
	});

	function handleSubmit(e) {
		e.preventDefault();

		// TODO: Get form values with some function
		const formValues = null;
		setFormData(formValues);

		setIsEditing(false);
	}

	return (
		<>
			<nav className="mx-auto max-w-5xl p-3 flex justify-center gap-3">
				{isEditing ? (
					<button
						className="cursor-pointer border px-2 hover:bg-blue-300/50"
						onClick={handleSubmit}>
						Submit & View
					</button>
				) : (
					<button
						className="cursor-pointer border px-2 hover:bg-blue-300/50"
						onClick={() => setIsEditing(true)}>
						Edit
					</button>
				)}
			</nav>

			<main className="mx-auto max-w-5xl p-3">
				{isEditing ? (
					<CvForm currentData={formData} onSubmit={handleSubmit} />
				) : (
					<CvView currentData={formData} />
				)}
			</main>
		</>
	);
};
