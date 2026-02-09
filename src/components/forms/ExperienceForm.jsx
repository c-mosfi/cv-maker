export const ExperienceForm = ({ expType, organization }) => {
	const description = `Write a few sentences about your experience at this organization...`;
	return (
		<form>
			<div>
				<input type="text" placeholder={expType} />
				<div className="sm:flex gap-3">
					<label htmlFor="start-date" className="flex">
						Start:
						<input type="date" name="start-date" id="start-date" />
					</label>

					<label htmlFor="end-date" className="flex">
						End:
						<input type="date" name="end-date" id="end-date" />
					</label>
				</div>
			</div>
			<input type="text" placeholder={organization} />
			<div>
				<label htmlFor="summary" className="block mb-2">
					Description
				</label>
				<textarea
					name="summary"
					id="summary"
					className="w-full placeholder:text-gray-500"
					placeholder={description}></textarea>
			</div>
		</form>
	);
};
