export const GeneralInfoFieldset = () => {
	return (
		<fieldset>
			<h2 className="mb-2">General Info</h2>
			<div className="flex flex-col gap-2 p-1.5 border">
				<label>
					Full name
					<input type="text" name="full-name" />
				</label>
				<label>
					Email address
					<input type="email" name="email-address" />
				</label>
				<label>
					Phone number
					<input type="text" name="phone-number" />
				</label>
				<label>
					City
					<input type="text" name="city-country" />
				</label>
				<label htmlFor="summary" className="mb-2">
					Professional Summary
					<textarea
						name="summary"
						className="w-full placeholder:text-gray-500"
						placeholder="Write a few sentences about yourself..."></textarea>
				</label>
			</div>
		</fieldset>
	);
};
