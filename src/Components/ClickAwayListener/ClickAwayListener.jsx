import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

function ClickAwayListener({ children, onClickAway }) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway(event);
            }
        }
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [onClickAway]);

    return <div ref={ref}>{children}</div>;
}

ClickAwayListener.propTypes = {
    children: PropTypes.any,
    onClickAway: PropTypes.func
};

export default ClickAwayListener;