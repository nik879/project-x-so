import React from 'react';

function Form(props){

    return (
        <div>
            {props.article ? (
                <div className="mb-3" >
                <label htmlForm = "title" className = "form-label"> Title </label>

                <input type="text" className="form-control" placeholder="Please Enter Title"/>

                <label htmlForm = "title" className = "form-label"> Title </label>
                <input type="text" className="form-control" placeholder="Please Enter Body"/>

                <textarea row = "5" className="form-control" placeholder="Please Enter Description" ></textarea>

                </div>
            ):null}

        </div>
    )

}

export default Form;