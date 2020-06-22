import React, { useState } from 'react';
import './historyLogItem.css';
import WhiteBackgroundShadow from '../whiteBackgroundShadow';
import { isValidDate, isValidPulse, isValidPressure, isValidHemoglobin } from '../../../utils/validator'



const HistoryLogItem = (props) => {
    const [icon, setIcon] = useState("/img/icon-edit-log.svg");
    const [readOnly, setReadOnly] = useState(true);

    const [inputs, setInputs] = useState({
        date: {
            value: props.date,
            style: "historyLogItemDateInputNotEditable",
            validate: isValidDate
        },
        pulse: {
            value: props.pulse,
            style: "historyLogItemDateInputNotEditable",
            validate: isValidPulse
        },
        pressure: {
            value: props.pressure,
            style: "historyLogItemDateInputNotEditable",
            validate: isValidPressure
        },
        hemoglobin: {
            value: props.hemoglobin,
            style: "historyLogItemDateInputNotEditable",
            validate: isValidHemoglobin
        }
    });

    const changeAllStyles = (style) => {
        let editInputs = Object.assign({}, inputs);
        for (let key of Object.keys(editInputs)) {
            editInputs[`${key}`].style = style
        }
        setInputs(editInputs);
    }

    const editClick = () => {
        if (icon === "/img/icon-edit-log.svg") {
            setIcon("/img/icon-save.svg")
            changeAllStyles("historyLogItemDateInputEditable");
            setReadOnly(false);
        } else {
            setIcon("/img/icon-edit-log.svg")
            changeAllStyles("historyLogItemDateInputNotEditable");
            setReadOnly(true);
        }
        props.onClick();
    }

    const change = ({ target }) => {
        if (!inputs[target.id].validate(target.value)) {
            setInputs(
                {
                    ...inputs,
                    [target.id]: {
                        value: target.value, style: "historyLogItemRedBorder",
                        validate: inputs[target.id].validate
                    }
                });
        } else {
            setInputs({
                ...inputs,
                [target.id]: {
                    value: target.value, style: "historyLogItemDateInputEditable",
                    validate: inputs[target.id].validate
                }
            });
        }
    }

    return (
        <WhiteBackgroundShadow className='historyLogItemContanier'>
            <div className='historyLogItemRow'>
                <input
                    id="date"
                    value={inputs.date.value}
                    className={inputs.date.style}
                    onChange={change}
                    readOnly={readOnly}
                />
                <input
                    id="pulse"
                    value={inputs.pulse.value}
                    className={inputs.pulse.style}
                    onChange={change}
                    readOnly={readOnly}
                />
                <input
                    id="pressure"
                    value={inputs.pressure.value}
                    className={inputs.pressure.style}
                    onChange={change}
                    readOnly={readOnly}
                />
                <input
                    id="hemoglobin"
                    value={inputs.hemoglobin.value}
                    className={inputs.hemoglobin.style}
                    onChange={change}
                    readOnly={readOnly}
                />
                <img className='historyLogItemEditIcon' src={icon} alt="" onClick={editClick} />
            </div>
        </WhiteBackgroundShadow >

    );
}

export default HistoryLogItem;