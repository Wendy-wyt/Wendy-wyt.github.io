import { ProjectType } from "@/interfaces/project";
import { filtersAtom } from "@/recoil/atoms/atoms";
import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil";


export function FilterButton() {
    const [open, setOpen] = useState(false);
    const [filters, setFilters] = useRecoilState(filtersAtom);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (event: MouseEvent) => {
            if (
                open &&
                ref.current &&
                !ref.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside);

        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        }
    });

    const handleAdd = (value: ProjectType) => {
        const newFilter = value;
        setOpen(false);
        setFilters((prev) => {
            if (!filters.includes(newFilter)) {
                return [...prev, newFilter];
            } else {
                return filters;
            }
        })
    }

    const handleDelete = (value: ProjectType) => {
        const filter = value;
        setOpen(false);
        setFilters((prev) => prev.filter((prevFilter) => prevFilter !== filter));
    }

    return (
        <div className="z-[1] relative py-5 text-black" ref={ref}>
            <div className="px-1 pb-2 flex flex-row flex-wrap text-sm">
                {
                    filters.map((filter, index) => <button className="bg-layer2 m-1 py-1 px-2 rounded-full inline-flex"
                        key={index}
                        value={filter}
                        onClick={() => handleDelete(filter)}
                    >
                        {filter}
                        <span className="ml-1 h-4 w-4 bg-cancel_light bg-cover bg-center"
                        ></span>
                    </button>)
                }
            </div>
            <input
                type="button"
                value="Filter By Project Type"
                onClick={() => setOpen(!open)}
                className={`px-3 py-1 bg-layer2 ${open ? 'rounded-t-lg' : 'rounded-lg'} w-full text-left cursor-pointer`} />
            {
                open && <div className="absolute rounded-sm bg-layer2 w-full py-3 flex flex-col items-start rounded-b-lg border-t-2	border-black">
                    {(Object.values(ProjectType) as Array<ProjectType>).map((type, index) => <input
                        type="button"
                        key={index}
                        onClick={() => handleAdd(type)}
                        value={type}
                        className="cursor-pointer w-full px-3 py-1 text-start hover:bg-neutral-500" />)}
                </div>
            }
        </div>
    )
}