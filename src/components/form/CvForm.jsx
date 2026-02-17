import { ExperienceFieldset } from './ExperienceFieldset';
import { GeneralInfoFieldset } from './GeneralInfoFieldset';

export const CvForm = ({ onSubmit }) => {
	return (
		<form className="flex flex-col gap-2" onSubmit={onSubmit}>
			<h1>CvForm</h1>

			<GeneralInfoFieldset />
			<ExperienceFieldset type={'practical'} />
			<ExperienceFieldset type={'education'} />
		</form>
	);
};
