import React from 'react';


interface IProps {
    value: string,
    onFilter: (e: React.ChangeEvent<HTMLInputElement>)=> void
}
const Filter =({value, onFilter}: IProps) =>{
    return(
        <div>
            
            <input type="text" value={value} onChange={onFilter} placeholder='search'/>
        </div>
    )
};

export default Filter