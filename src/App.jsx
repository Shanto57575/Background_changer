import { useState } from "react";

const App = () => {
	const [color, setColor] = useState("bg-red-500");

	return (
		<div
			className={`${color} h-screen flex items-end justify-center flex-wrap pb-10`}
		>
			<h1 className="absolute top-0 p-10 text-3xl text-white font-serif font-bold">
				Background Changer!
			</h1>
			<div className="bg-white p-2 rounded-full">
				<button
					onClick={() => setColor("bg-red-500")}
					className="w-20 border px-3 py-2 bg-red-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					Red
				</button>
				<button
					onClick={() => setColor("bg-green-600")}
					className="w-20 border px-3 py-2 bg-green-600 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					green
				</button>
				<button
					onClick={() => setColor("bg-blue-500")}
					className="w-20 border px-3 py-2 bg-blue-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					blue
				</button>
				<button
					onClick={() => setColor("bg-yellow-400")}
					className="w-20 border px-3 py-2 bg-yellow-400 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					yellow
				</button>
				<button
					onClick={() => setColor("bg-slate-500")}
					className="w-20 border px-3 py-2 bg-slate-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					slate
				</button>
				<button
					onClick={() => setColor("bg-pink-300")}
					className="w-20 border px-3 py-2 bg-pink-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					pink
				</button>
				<button
					onClick={() => setColor("bg-lime-400")}
					className="w-20 border px-3 py-2 bg-lime-400 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					lime
				</button>
				<button
					onClick={() => setColor("bg-cyan-500")}
					className="w-20 border px-3 py-2 bg-cyan-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					cyan
				</button>
				<button
					onClick={() => setColor("bg-amber-500")}
					className="w-20 border px-3 py-2 bg-amber-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					amber
				</button>
				<button
					onClick={() => setColor("bg-purple-500")}
					className="w-20 border px-3 py-2 bg-purple-500 text-white rounded-3xl mr-3 font-semibold font-serif"
				>
					purple
				</button>
			</div>
		</div>
	);
};

export default App;
