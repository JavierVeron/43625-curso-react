import React, {memo} from "react";

const Memo = memo(({item}) => {
    console.log("Item Renderizado!");

    return (
        <h3 className="text-center">{item.nombre}</h3>
    )
}, (oldProps, newProps) => oldProps.modifyDate === newProps.modifyDate);

export default Memo;