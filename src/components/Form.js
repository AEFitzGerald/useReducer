import React, { useReducer } from 'react';

    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };


    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

    export default () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        function handleChange(e) {
            const { name, value } = e.target;
            dispatch({
                type: name,
                payload: value
            });
        }

        return (
            <div className="container-sm mt-5">
                {JSON.stringify(state)}
                <form id ="validateForm" className="form-control col-sm-6" >
                    <div className="form-group mb-3">
                        <label>
                            <span>First Name:</span>{' '}
                            <input
                                name="firstName"
                                value={state.firstName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                        {
                            state.firstName.length < 3 || state.firstName.length > 20 ?
                                <p className="text-primary">First Name must be between 3-20 characters</p> :
                                ""
                        }
                    </div>
                    <div className="form-group mb-3">
                        <label>
                            <span>Last Name:</span>{' '}
                            <input
                                name="lastName"
                                value={state.lastName}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                        {
                            state.lastName.length < 3 || state.lastName.length > 20 ?
                            <p className="text-primary">Last Name must be between 3-20 characters</p> :
                            ""
                        }
                    </div>
                    <div className="form-group mb-3">
                        <label>
                            <span>Email:</span>{' '}
                            <input
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </label>
                        {
                            state.email.length < 2 || state.email.length > 200?
                            <p className="text-primary">Email must be between 2 and 200 characters</p> :
                            ""
                        }
                        {
                            !validateEmail(state.email)?
                            <p className="text-primary">Email is not valid.</p>:
                            ""
                        }
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" value="Submit" className="btn btn-primary mt-3" />
                    </div>
                </form>
            </div>
        );
    }

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
