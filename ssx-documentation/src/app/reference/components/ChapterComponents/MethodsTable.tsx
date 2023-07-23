import ParameterTable from "./ParameterTable";
import { MethodData } from "./DataTypes";
import { linkData } from "@/app/_library/utils";

export default function MethodsTable({
	data,
	config,
}: {
	data: MethodData[];
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Methods</h2>
			{data.map(({ name, returnType, description, paramData }) => {
				return (
					<div className="bg-gray-800 px-4 pt-4 pb-6 rounded-xl my-2">
						<div className="flex justify-between">
							<h2 className="text-xl">Method: {name}</h2>
							<p className="text-lg">
								Return Type: {linkData(returnType, config)}
							</p>
						</div>
						<div className="my-1 py-2">{linkData(description, config)}</div>

						{paramData ? (
							<ParameterTable data={paramData} config={config} />
						) : (
							<p>No parameters</p>
						)}
					</div>
				);
			})}
		</div>
	);
}
