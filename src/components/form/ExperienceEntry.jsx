export const ExperienceEntry = ({ type, onDelete }) => {
	const isPracticalExp = type === 'practical';

	return (
		<section className="flex flex-col gap-2 border p-1.5">
			<div className="sm:flex sm:justify-between">
				{/* Name of exp */}
				<label htmlFor="exp-name">
					{isPracticalExp ? 'Position:' : 'Title:'}
					<input type="text" name="exp-name" />
				</label>

				{/* Dates */}
				<div className="sm:flex sm:gap-3">
					<label htmlFor="start-date" className="flex">
						Start:
						<input type="date" name="start-date" />
					</label>
					<label htmlFor="end-date" className="flex">
						End:
						<input type="date" name="end-date" />
					</label>
				</div>
			</div>

			{/* Exp place info */}
			<label htmlFor="exp-place">
				{isPracticalExp ? 'Company:' : 'Institution:'}
				<input type="text" name="exp-place" />
			</label>
			<div>
				<label htmlFor="exp-description" className="mb-2">
					Description
				</label>
				<textarea
					name="exp-description"
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
