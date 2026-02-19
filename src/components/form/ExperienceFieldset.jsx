import { useState } from 'react';
import { ExperienceEntry } from './ExperienceEntry';

export const ExperienceFieldset = ({ type, entries, setEntries }) => {
	// state for entries lives in CvForm (parent)
	let [entriesIDs, setEntriesIDs] = useState([]); // just entries IDs
	let [singleEntry, setSingleEntry] = useState({}); // state for singleEntry inputs, used on ExperienceEntry child component

	function addEntry() {
		const newID = crypto.randomUUID();
		setEntriesIDs([...entriesIDs, newID]);
		setEntries([...entries, singleEntry]);
	}

	function deleteEntry(idToDelete) {
		const entriesIDsToKeep = entriesIDs.filter((id) => id !== idToDelete);
		const entriesToKeep = entries.filter((e) => e.id !== idToDelete);
		setEntriesIDs(entriesIDsToKeep);
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
			{entriesIDs.map((id) => (
				<ExperienceEntry
					key={id}
					entryId={id}
					type={type}
					entry={singleEntry}
					setEntry={setSingleEntry}
					onDelete={() => deleteEntry(id)}
				/>
			))}
		</fieldset>
	);
};
