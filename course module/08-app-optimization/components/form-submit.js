"use client"
import React from 'react';
import {useFormStatus} from "react-dom";

function FormSubmit(props) {
    const status = useFormStatus()
    if (status.pending) {
        return <p>Creating Post.....</p>
    }
    return (
        <p className="form-actions">
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </p>
    );
}

export default FormSubmit;