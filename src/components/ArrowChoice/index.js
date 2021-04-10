import cn from 'classnames';

import s from './style.module.css';

const ArrowChoice = ({ hide = true, side = 0}) => {
    return hide&&<div className={cn(s.arrow, {
        [s.rightSide]: side === 2,
        [s.leftSide]: side === 1
    })} />;
};

export default ArrowChoice;
