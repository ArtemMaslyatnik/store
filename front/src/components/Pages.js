import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    console.log(device.totalCount)
    console.log(device.limit)
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
console.log(pages)
    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={(device.offset+device.limit)/device.limit === page}
                    onClick={() => device.setOffset(page * device.limit - device.limit)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;
