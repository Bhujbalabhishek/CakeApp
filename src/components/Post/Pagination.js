import React, { Component } from 'react'


export class Pagination extends Component {
    render() {

        const {postsPerPage, totalPosts, paginate, nextPage, prevPage} = this.props;
        const pageNumbers = [];

        for(let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
            pageNumbers.push(i);
        }

        const previousPage = () => {
            if(paginate){
               return ()=>prevPage()
            }
            
        }

        const nextpage = () => {
            if(paginate){
                return ()=>nextPage()
            }
        }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    
                   
                        <li className="page-item">
                            <a href="#" className="page-link" onClick={previousPage}>Previous</a>
                        </li>  
                     
            {
                pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                       <a onClick={() =>paginate(num)} href="#" className="page-link">{num}</a>
                    </li>
                ))
            }

                         <li className="page-item">
                            <a href="#" className="page-link" onClick={nextpage}>Next</a>
                         </li>

                </ul>
            </nav>
            
        )
    }
}

export default Pagination
