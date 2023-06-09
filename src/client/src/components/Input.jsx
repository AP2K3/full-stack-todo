import TodoApp from "./TodoApp";

export default function Input({ change, click }) {
    return (
        <div className="inputSection bg-zinc-800 text-white p-4 flex fixed bottom-0 place-content-center w-full">
            <div className="inputText drop-shadow-xl pr-2 w-2/3">
                <input
                    className="textInput bg-zinc-600 text-white font-semibold w-full rounded-xl p-6"
                    onChange={change}
                    type="text"
                    placeholder="Walk the dog..."
                />
            </div>
            <div className="inputButton w-1/3 text-center">
                <button
                    onClick={click}
                    className="addItemButton w-full drop-shadow-xl bg-green-600 text-white font-black rounded-xl py-6"
                >
                    Add
                </button>
            </div>
        </div>
    );
}
