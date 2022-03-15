import React from 'react';
import { useField } from 'formik';
import { FormControl, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function Input(props) {
    const { label, ...attr } = props;
    const [field, form] = useField(props);

    return (
        <div className={'form-element'}>
            <FormControl fullWidth>
                {label && (
                    <label className={`label ${form.touched && form.error ? 'invalid' : ''}`}>
                        {label}
                    </label>
                )}
                <TextField
                    variant="outlined"
                    // autoComplete="off"
                    fullWidth
                    name={field.name}
                    value={form.value}
                    error={form.touched && Boolean(form.error)}
                    helperText={form.touched && form.error}
                    onChange={(e) => form.setFieldValue(field.name, e.target.value)}
                    onBlur={() => form.setFieldTouched(field.name, true)}
                    {...field}
                    {...attr}
                />
            </FormControl>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.string,
};

export default Input;
