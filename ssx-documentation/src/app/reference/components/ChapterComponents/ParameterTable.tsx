import { linkData } from "@/app/_library/utils";
import { ParamData } from "./DataTypes";

export default function ParameterTable({
	data,
	config,
}: {
	data: ParamData[];
	config: any;
}) {
	return (
		<div>
			<p className="text-lg font-bold">Parameters</p>

			<div className=" mt-2 flex justify-center">
				<table className="w-1/1">
					<tr className="bg-gray-900">
						<th className="p-2 w-1/4 border-white border-r-2">Name</th>
						<th className="p-2 w-1/4 border-white border-r-2">Type</th>
						<th className="p-2">Description</th>
					</tr>
					{data.map(({ name, type, description }) => {
						return (
							<tr className="bg-gray-600">
								<td className="p-2 w-1/4 border-white border-r-2 border-t-2">
									{name}
								</td>
								<td className="p-2 w-1/4 border-white border-r-2 border-t-2">
									{linkData(type, config)}
								</td>
								<td className="p-2 border-white border-t-2">
									{linkData(description, config)}
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
}
