import { linkData } from "@/app/_library/utils";
import { ConstructorData } from "./DataTypes";
import ParameterTable from "./ParameterTable";

export default function ConstructorTable({
	data,
	config,
}: {
	data: ConstructorData;
	config: any;
}) {
	return (
		<div className="m-2">
			<h2 className="text-xl font-bold">Constructor</h2>

			<div>
				<h2 className="text-xl">Call: {data.call}</h2>
			</div>
			<div className="my-1 py-2">{linkData(data.description, config)}</div>

			{data.parameters ? (
				<ParameterTable data={data.parameters} config={config} />
			) : (
				<p>No parameters</p>
			)}
		</div>
	);
}
