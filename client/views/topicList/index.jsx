import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './css/style.css'

export default class TopicList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLDrag: false,
            showRDrag: false,
            startDrag: false,
            startX: "",
            imgWidth: 600,
            imgCurrentWidth: 600,
            showOption: false,
        }
    }

    componentDidMount() {
        document.addEventListener("mouseup", (e) => {
            e.preventDefault()
            this.setState({
                startDrag: false,
                imgCurrentWidth: this.state.imgWidth
            })
        })
    }

    showRDrag = (e) => {
        e.preventDefault()
        this.setState({
            showRDrag: true
        })
    }

    startDrag = (e) => {
        e.preventDefault()
        this.setState({
            startDrag: true,
            startX: e.clientX,
        })
    }

    endDrag = () => {
        this.setState({
            startDrag: false,
            imgCurrentWidth: this.state.imgWidth
        })
    }

    move = (e) => {
        e.preventDefault()
        if(!this.state.startDrag) return
        const moveDis = this.state.startX - e.clientX
        this.setState({
            imgWidth: this.state.imgCurrentWidth - 2 * moveDis
        })
    }

    hideRDrag = (e) => {
        e.preventDefault()
        this.setState({
            startDrag: false,
            showRDrag: false,
        })
    }

    showOption = (e) => {
        e.preventDefault()
        this.setState({
            showOption: true,
        })
    }

    hideOption = (e) => {
        e.preventDefault()
        this.setState({
            showOption: false,
        })
    }

    remove = () => {
        console.log("remove this image")
    }

    render() {
        const rDragStyle = this.state.showRDrag ? null : {hide: true}

        return (
            <div
                className="wrap"
                style={{width: this.state.imgWidth}}
                onMouseEnter={this.showOption}
                onMouseLeave={this.hideOption}
            >
                <div className="img-wrap">
                    <img src="https://wscdn.ql1d.com/63176873725799917118.jpg" alt=""/>
                </div>
                <div
                    className={classNames("right", "drag")}
                    onMouseOver={this.showRDrag}
                    onMouseLeave={this.hideRDrag}
                    onMouseDown={this.startDrag}
                    onMouseUp={this.endDrag}
                    onMouseMove={this.move}
                >
                    <div
                        ref={this.dragRButtonRef}
                        className={classNames("drag-children", "drag-children-right", rDragStyle)}
                    />
                </div>
                <div className={classNames("img-remove", "img-option", {"show-option": this.state.showOption})}>
                    <span className="remove-option" onClick={this.remove}>remove</span>
                </div>
            </div>
        )
    }
}

TopicList.propTypes = {}