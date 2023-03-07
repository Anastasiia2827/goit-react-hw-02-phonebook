import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeInput  }) => {
    return (
        <label>
            Find contact by name
            <input type="text" value={value} onChange={onChangeInput} />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired
};