import PropTypes from 'prop-types';

const List = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                    return (
                        <li kye={id}>
                            <span>{name}</span>
                            <span>{number}</span>
                            <button type="button" onClick={() => onDelete(id)}>
                                Delete
                            </button>
                      </li>  
                    );
                })}
            </ul>
    );
};

export { List };
  
List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
};