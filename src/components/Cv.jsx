import { PersonalDetails } from './PersonalDetails';
import { WorkExp } from './WorkExp';
import { EducationExp } from './EducationExp';

export const Cv = () => {
	return (
		<>
			<main className="mx-auto max-w-5xl p-3">
				<div className="flex gap-3 mb-3">
					<button className="cursor-pointer border px-2">Edit</button>
					<button className="cursor-pointer border px-2">View</button>
				</div>
				<div className="border p-2 flex flex-col gap-3">
					{/*TODO: 
					- conditional rendering of Edit/View
					- add a prop for mode: then inside the component render edit(forms) or view(plain html) */}
					<PersonalDetails />
					<WorkExp />
					<EducationExp />
				</div>
			</main>
		</>
	);
};
