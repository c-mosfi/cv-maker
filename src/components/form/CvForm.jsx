import { useState } from 'react';
import { ExperienceFieldset } from './ExperienceFieldset';
import { GeneralInfoFieldset } from './GeneralInfoFieldset';

export const CvForm = ({ onSubmit }) => {
	const [generalData, setGeneralData] = useState({});
	const [practicalData, setPracticalData] = useState([]);
	const [educationalData, setEducationalData] = useState([]);

	return (
		<form className="flex flex-col gap-2" onSubmit={onSubmit}>
			<h1>CvForm</h1>

			<GeneralInfoFieldset data={generalData} setData={setGeneralData} />
			<ExperienceFieldset
				type={'practical'}
				entries={practicalData}
				setEntries={setPracticalData}
			/>
			<ExperienceFieldset
				type={'education'}
				entries={educationalData}
				setEntries={setEducationalData}
			/>
		</form>
	);
};
