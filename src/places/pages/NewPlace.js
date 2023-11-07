import './NewPlace.css'
import {useCallback, useReducer} from "react";
import Button from "../../shared/components/FormElements/Button";
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";

// 현재 상태와 액션 객체를 받아 새로운 상태를 반환한다.
const formReducer = (state, action) => {
    console.log("State", state)
    console.log("action", action)
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};


const NewPlace = () => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            isValid:isValid,
            inputId:id
        })
    }, [dispatch]);

    return (
        <form className="place-form">
            <Input element="input" id="title" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]}
                   errorText="please enter a valid title" onInput={inputHandler}/>
            <Input element="textarea" id="description" label="Description" validators={[VALIDATOR_MINLENGTH(5)]}
                   errorText="please enter a valid description (at least 5 characters"
                   onInput={inputHandler}/>
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    );
}
export default NewPlace;