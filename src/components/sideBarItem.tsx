export function SideBarItem({ text, icon }) {
    return (
        <div className="flex items-center p-3 hover:bg-gray-100 rounded-md transition duration-300 cursor-pointer group">
            <div className="text-xl mr-3 text-gray-600 group-hover:text-gray-600">
                {icon}
            </div>
            <span className="text-lg font-medium text-gray-600 group-hover:text-gray-600">
                {text}
            </span>
        </div>
    );
}
