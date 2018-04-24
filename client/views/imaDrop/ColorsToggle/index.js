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

export default class ColorsButton extends React.Component {
    render() {
        let ColorGroup = COLORS.map((color, i) => (
            <div key={ `color-${i}`}>
                {
                    CreateColorButton({
                        style: color.style,
                        children: (<span className={styleSpan.colorSpan} />),
                    })
                }
            </div>
        ));
        console.log(555, ColorGroup)
        return COLORS.map((color, i) => (
            <div key={ `color-${i}`}>
                {
                    CreateColorButton({
                        style: color.style,
                        children: (<span className={styleSpan.colorSpan} />),
                    })
                }
            </div>
        ))
    }
}