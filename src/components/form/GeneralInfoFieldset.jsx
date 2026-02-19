export const GeneralInfoFieldset = ({ data, setData }) => {
	// state lives in CvForm (parent)
	function handleChange(e) {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	}

	return (
		<fieldset>
			<h2 className="mb-2">General Info</h2>
			<div className="flex flex-col gap-2 p-1.5 border">
				<label>
					Full name
					<input type="text" name="fullName" onChange={handleChange} />
				</label>
				<label>
					Email address
					<input type="email" name="emailAddress" onChange={handleChange} />
				</label>
				<label>
					Phone number
					<input type="text" name="phoneNumber" onChange={handleChange} />
				</label>
				<label>
					City
					<input type="text" name="city" onChange={handleChange} />
				</label>
				<label>
					Country
					<input type="text" name="country" onChange={handleChange} />
				</label>
				<label htmlFor="summary" className="mb-2">
					Professional Summary
					<textarea
						name="summary"
						onChange={handleChange}
						className="w-full placeholder:text-gray-500"
						placeholder="Write a few sentences about yourself..."></textarea>
				</label>
			</div>
		</fieldset>
	);
};
