import { ExampleData } from "./DataTypes";
import { linkData, renderCodeLines } from "@/app/_library/utils";

export default function ExamplesTable({
	data,
	config,
}: {
	data: ExampleData;
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Examples</h2>
			<p>{data.description}</p>
			{data.examples.map(({ title, description, example }) => {
				return (
					<div className="bg-gray-800 px-4 pt-4 pb-6 rounded-xl my-2">
						<div className="flex justify-between">
							<h2 className="text-xl">{title}</h2>
						</div>
						<div className="my-1 py-2">{linkData(description, config)}</div>

						{renderCodeLines(example)}
					</div>
				);
			})}
		</div>
	);
}
