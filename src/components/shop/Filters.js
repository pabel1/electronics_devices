"use client"

import { filterData } from "@/assets/data/filtersData";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

const Filters = () => {
    const [selectedFilters, setSelectedFilters] = useState([])
    const handleCheckboxChange = (category, value) => {
        setSelectedFilters(prev => {
            const filterKey = `${category}:${value}`
            if(prev.includes(filterKey)){
                return prev.filter(item => item !== filterKey)
            }else {
                return [...prev, filterKey]
            }
        })
        
    }
  return (
    <div className="-mt-8 divide-y divide-dashed">
        {
            Object.entries(filterData).map(([category, items])=> (
                <div key={category} className="mb-5 ">
                    <h2 className="text-xl font-medium my-4">{category}</h2>
                    {
                        items.map((item,i)=> (
                            <div key={i} className="flex items-center gap-3 mb-2">
                                <Checkbox 
                                checked={selectedFilters.includes(`${category}:${item}`)}
                                onCheckedChange={() => handleCheckboxChange(category, item)}
                                id={`${category}-${item}`} />
                                <label htmlFor={`${category}-${item}`} className="cursor-pointer">{item}</label>
                            </div>
                        ))
                    }
                </div>
            ))
        }
    </div>
  );
};

export default Filters;
