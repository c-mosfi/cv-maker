export const ExperienceEntry = ({
	type,
	entryID,
	entry,
	setEntry,
	onDelete,
}) => {
	const isPracticalExp = type === 'practical';

	function handleChange(e) {
		setEntry({
			id: entryID,
			...entry,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<section className="flex flex-col gap-2 border p-1.5">
			<div className="sm:flex sm:justify-between">
				{/* Name of exp */}
				<label htmlFor="experienceName">
					{isPracticalExp ? 'Position:' : 'Title:'}
					<input type="text" name="experienceName" onChange={handleChange} />
				</label>

				{/* Dates */}
				<div className="sm:flex sm:gap-3">
					<label htmlFor="startDate" className="flex">
						Start:
						<input type="date" name="startDate" onChange={handleChange} />
					</label>
					<label htmlFor="endDate" className="flex">
						End:
						<input type="date" name="endDate" onChange={handleChange} />
					</label>
				</div>
			</div>

			{/* Exp place info */}
			<label htmlFor="experiencePlace">
				{isPracticalExp ? 'Company:' : 'Institution:'}
				<input type="text" name="experiencePlace" onChange={handleChange} />
			</label>
			<div>
				<label htmlFor="experienceDescription" className="mb-2">
					Description
				</label>
				<textarea
					name="experienceDescription"
					onChange={handleChange}
					className="w-full placeholder:text-gray-500"
					placeholder="Write a few sentences about your experience.."></textarea>
			</div>

			{/* Delete btn for exp entry */}
			<div className="flex">
				<button
					type="button"
					className="cursor-pointer border px-2 ml-auto hover:bg-blue-300/50"
					onClick={onDelete}>
					- Delete
				</button>
			</div>
		</section>
	);
};
