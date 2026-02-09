import { useState } from 'react';
import { ExperienceForm } from './ExperienceForm';

export const ExperienceFormList = ({ listTitle, expType, organization }) => {
	// state: to count the forms, and to identify them (each entry is a unique ID)
	const [forms, setForms] = useState([]);

	function addForm() {
		setForms([...forms, Date.now()]); // Date.now() for the form's unique ID
	}

	function removeForm(idToRemove) {
		setForms(forms.filter((formId) => formId !== idToRemove));
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-between items-center">
				<h2>{listTitle}</h2>
				<button onClick={addForm} className="cursor-pointer border px-2 ">
					+ Add
				</button>
			</div>

			{forms.map((id) => (
				<ExperienceForm
					key={id}
					expType={expType}
					organization={organization}
					onRemoveForm={() => removeForm(id)}
				/>
			))}
		</div>
	);
};
