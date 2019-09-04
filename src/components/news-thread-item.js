import React from 'react';

const NewsThreadItem = props => {

    const getCurrentDate = () =>{
        const currendDate = new Date();
        return currendDate.getUTCDate() + '. ' + (currendDate.getUTCMonth() + 1) + '. ' + currendDate.getUTCFullYear();/*currendDate.getUTCDay() + '. ' + currendDate.getMonth() + '. ' + currendDate.getFullYear();*/
    }

    return(
        <article className="border my-4 shadow-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>CV</h2>
                    </div>
                    {/*<div className="col-md-3 bg-secondary text-center">
                        <p>
                            {getCurrentDate()}
                        </p>
                    </div>*/}
                </div>
            </div>
            <hr/>
            <p className="py-2">Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text. Post text.</p>
            
            <hr />
            <p className="text-right pr-2 "><i className="fa fa-angle-down" aria-hidden="true"></i> <a className="" href="#">Read more</a></p>
        </article>
    )
};

export default NewsThreadItem;