import _ from "lodash";
const Navigation = (props) => {
    const { allDataCount, pagination, onPaginate } = props;
    const { perPageSize, pageIdx: curPageIdx } = pagination;
    const pagesCount = Math.ceil(allDataCount / perPageSize);

    const pagesArr = _.range(1, pagesCount + 1);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                {pagesArr.map((page_flag, page_idx) => (
                    <li
                        className={
                            page_idx === curPageIdx
                                ? "page-item active"
                                : "page-item"
                        }
                        key={page_idx}
                        onClick={() => onPaginate(page_idx)}
                    >
                        <a className="page-link" href="#">
                            {page_flag}
                        </a>
                    </li>
                ))}

                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
