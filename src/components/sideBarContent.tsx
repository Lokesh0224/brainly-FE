import { TwitterIcon } from "./icons/tweets";
import { YoutubeIcon } from "./icons/youtube";
import { DocumentIcon } from "./icons/document";
import { LinkIcon } from "./icons/link";
import { TagIcon } from "./icons/tag";
import { SideBarItem } from "./sideBarItem";
import { Logo } from "./icons/logo";

export function Sidebar() {
    return (
        <div className="h-screen w-72 fixed left-0 top-0 bg-white shadow-md border-r border-gray-200">
            <div className="pt-6 px-4 space-y-6">
                <h1 className="text-2xl font-bold text-purple-600 flex items-center space-x-3">
                    <Logo/>
                    <span className="text-gray-600">Brainly</span>
                </h1>

                <SideBarItem text="Twitter" icon={<TwitterIcon />} />
                <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
                <SideBarItem text="Documents" icon={<DocumentIcon />} />
                <SideBarItem text="Links" icon={<LinkIcon />} />
                <SideBarItem text="Tags" icon={<TagIcon />} />
            </div>
        </div>
    );
}
