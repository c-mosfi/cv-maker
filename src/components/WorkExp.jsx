import { ExperienceFormList } from './forms/ExperienceFormList';

export const WorkExp = () => {
	const listTitle = 'Work Experience';
	const jobPosition = 'Job Position';
	const company = 'Company Name';

	return (
		<>
			<ExperienceFormList
				listTitle={listTitle}
				expType={jobPosition}
				organization={company}
			/>
		</>
	);
};
