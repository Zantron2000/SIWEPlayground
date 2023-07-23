import { linkData } from "@/app/_library/utils";
import { PrimitiveData } from "./DataTypes";

export default function PrimitiveTable({
	data,
	config,
}: {
	data: PrimitiveData;
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Properties</h2>

			<div className=" mt-2 flex justify-center">
				<table className="w-1/1">
					<tr className="bg-gray-900">
						<th className="p-2 border-white border-r-2">Type</th>
						<th className="p-2">Description</th>
					</tr>
					<tr className="bg-gray-800">
						<td className="px-3 py-2 w-1/4 border-white border-r-2 border-t-2">
							{linkData(data.type, config)}
						</td>
						<td className="px-3 py-2 w-1/2 border-white border-t-2">
							{linkData(data.description, config)}
						</td>
					</tr>
				</table>
			</div>
		</div>
	);
}
