import { ExperienceFormList } from './forms/ExperienceFormList';

export const EducationExp = () => {
	const listTitle = 'Education';
	const educationTitle = 'Education Title';
	const institution = 'Institution Name';

	return (
		<>
			<ExperienceFormList
				listTitle={listTitle}
				expType={educationTitle}
				organization={institution}
			/>
		</>
	);
};
