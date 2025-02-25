"use client";
import {useFormStatus} from 'react-dom';
function MealFormSubmit(props) {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending}>
            {pending ? "Submitting..." : "Share Meal"}
        </button>
    );
}

export default MealFormSubmit;