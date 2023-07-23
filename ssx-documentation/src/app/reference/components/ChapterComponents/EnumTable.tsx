import { linkData } from "@/app/_library/utils";
import { EnumData } from "./DataTypes";

export default function EnumTable({
	data = [],
	config,
}: {
	data: EnumData[];
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Enum Values</h2>

			<div className=" mt-2 flex justify-center">
				<table className="w-1/1">
					<tr className="bg-gray-900">
						<th className="p-2 w-1/4 border-white border-r-2">Member</th>
						<th className="p-2 w-1/4 border-white border-r-2">Value</th>
						<th className="p-2">Description</th>
					</tr>
					{data.map((dataPoint) => (
						<tr className="bg-gray-800">
							<td className="px-3 py-2 w-1/4 border-white border-r-2 border-t-2">
								{dataPoint.member}
							</td>
							<td className="px-3 py-2 w-1/4 border-white border-r-2 border-t-2">
								{dataPoint.value}
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
