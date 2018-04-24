import React from 'react';
import CreateColorButton from './creatColorsButton';
import styleSpan from './StyleSpan.css';

const COLORS = [
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
];

// export default () =>  COLORS.map((color, i) => (
//             <div key={ `color-${i}`}>
//                 {
//                     CreateColorButton({
//                         style: color.style,
//                         children: <span className={styleSpan.colorSpan} />,
//                     })
//                 }
//                 {color.style}
//             </div>
//         ))

export default class ColorsButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Buttons = COLORS.map((color, i) => {
            let Btns = CreateColorButton({
                style: color.style,
                children: <span className={styleSpan.colorSpan} />,
            });
            return <Btns key={i}/>
        })
        console.log(888, Buttons)

        // Buttons =
        return <div>{Buttons}</div>
    }
}