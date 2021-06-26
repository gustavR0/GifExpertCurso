import React, {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExportApps = () => {
    const [categories, setCategories] = useState(['One Punch']);

    return(
        <div>
            <h2>GifExportApp</h2>
            <AddCategory setCategories ={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </div>
    );
}