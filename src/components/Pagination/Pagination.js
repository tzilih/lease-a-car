import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    let paginationArray = [
        { text: 'First', disabled: true },
        { text: 'Previous', disabled: true}
    ];
    const totalPages = props.pageCount;
    const activePage = props.activePage;
    
    if (activePage === 1) {
        for (let i = 1; i <= (totalPages < 3 ? totalPages : 3); i++) {
            paginationArray.push({text: i, disabled: false});
        }
    } else if (activePage !== 1 && activePage !== totalPages) { // a middle page
        // intercept if activePage is greater than totalPages
        if (activePage > totalPages) {return}
        else {
            for (let i = activePage < 3 ? 1 : activePage - 2; i <= (activePage + 2 > totalPages ? totalPages : activePage + 2); i++) {
                paginationArray.push({ text: i, disabled: false });
            }
            paginationArray[0].disabled = false;
            paginationArray[1].disabled = false;
        }
    } else if (activePage === totalPages) {
        for (let i = totalPages === 2 ? 1 : totalPages - 2; i <= (totalPages === 2 ? 2 : totalPages); i++) {
            paginationArray.push({ text: i, disabled: false });
        }
    }

    paginationArray = [...paginationArray, {text: 'Next', disabled: false}, {text: 'Last', disabled: false}];

    if (activePage === totalPages) {
        paginationArray[paginationArray.length - 2].disabled = true;
        paginationArray[paginationArray.length - 1].disabled = true;
        paginationArray[0].disabled = false;
        paginationArray[1].disabled = false;
    }

    const pages = paginationArray.map((page, index) => 
        <li className={page.disabled? 'page-item disabled' : 'page-item'} data-key={page.text} onClick={() => props.clicked(page.text)} key={page.text}>
            <a className="page-link" href="" onClick={e => e.preventDefault()}>
                <span>{page.text}</span>
            </a>
        </li>
    )

    return (
        <ul className="pagination">
            {pages}
        </ul>
    )
}

export default Pagination;