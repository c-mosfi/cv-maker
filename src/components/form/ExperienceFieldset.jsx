import { useState } from 'react';
import { ExperienceEntry } from './ExperienceEntry';

export const ExperienceFieldset = ({ type }) => {
	let [entries, setEntries] = useState([]); // to keep count and map them with uniqueID

	function addEntry() {
		const uniqueID = crypto.randomUUID();
		setEntries([...entries, uniqueID]);
	}

	function removeEntry(idToRemove) {
		const entriesToKeep = entries.filter((id) => id !== idToRemove);
		setEntries(entriesToKeep);
	}

	return (
		<fieldset className="flex flex-col gap-2">
			<section className="flex justify-between">
				<h2>
					{type === 'practical'
						? 'Practical Experience'
						: 'Educational Experience'}
				</h2>
				<button
					type="button"
					className="cursor-pointer border px-2 hover:bg-blue-300/50"
					onClick={addEntry}>
					+ Add
				</button>
			</section>

			{/* Return entries */}
			{entries.map((id) => (
				<ExperienceEntry
					key={id}
					type={type}
					onDelete={() => removeEntry(id)}
				/>
			))}
		</fieldset>
	);
};
