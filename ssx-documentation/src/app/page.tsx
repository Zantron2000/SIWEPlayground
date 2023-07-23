import Link from "next/link";
import HeaderNav from "./_components/HeaderNav";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<HeaderNav />
			<div className="z-10 w-full h-56 p-8 max-w-5xl font-mono text-sm lg:flex flex-col items-center justify-between bg-violet-400 rounded-3xl">
				<div>
					<p className="text-center text-black text-lg">
						{
							"Learning is hard, especially when it comes to new technologies coming out, such as SpruceID's SSX. There isn't a lot of documentation and I struggled a lot with trying to learn it. Here are all my compiled notes to hopefully make it a little easier to learn for others."
						}
					</p>
				</div>
				<div>
					<Link
						href="/reference"
						className="p-4 bg-violet-800 rounded-md hover:bg-[#4c1d95]"
					>
						{"Let's Go"}
					</Link>
				</div>
			</div>

			<div className="px-8 w-full grid text-center lg:grid-cols-4 lg:text-left bg-zinc-900 border-t-2 border-white">
				<Link
					href="/reference/ssx"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						API{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						The parts of SSX that go in the front end of an application with a
						backend
					</p>
				</Link>

				<Link
					href="/reference/ssx-core"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Core API{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						The parts of SSX that make up the core of the application
					</p>
				</Link>

				<Link
					href="/reference/server"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Server{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						The parts of SSX for the backend of your application
					</p>
				</Link>

				<Link
					href="/reference/serverless"
					className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
					target="_blank"
					rel="noopener noreferrer"
				>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Serverless{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
						For when you only have a front end
					</p>
				</Link>
			</div>
		</main>
	);
}
