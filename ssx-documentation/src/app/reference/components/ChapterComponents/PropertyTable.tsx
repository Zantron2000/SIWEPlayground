import { linkData } from "@/app/_library/utils";
import { PropertyData } from "./DataTypes";

export default function PropertyTable({
	data = [],
	config,
}: {
	data: PropertyData[];
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Properties</h2>

			<div className=" mt-2 flex justify-center">
				<table className="w-1/1">
					<tr className="bg-gray-900">
						<th className="p-2 w-1/4 border-white border-r-2">Property</th>
						<th className="p-2 w-1/4 border-white border-r-2">Type</th>
						<th className="p-2">Description</th>
					</tr>
					{data.map((dataPoint) => (
						<tr className="bg-gray-800">
							<td className="px-3 py-2 w-1/4 border-white border-r-2 border-t-2">
								{dataPoint.property}
							</td>
							<td className="px-3 py-2 w-1/4 border-white border-r-2 border-t-2">
								{linkData(dataPoint.type, config)}
							</td>
							<td className="px-3 py-2 w-1/2 border-white border-t-2">
								{linkData(dataPoint.description, config)}
							</td>
						</tr>
					))}
				</table>
			</div>
		</div>
	);
}
