const Input = novi.ui.input;
const React = novi.react.React;
const Component = novi.react.Component;
const Switcher = novi.ui.switcher;
const InputNumber = novi.ui.inputNumber;
const Editor = novi.editor;
const Language = novi.language;
export default class Body extends Component {
    constructor(props) {
        super(props);
        let autoplayTime = novi.element.getAttribute(props.element, 'data-autoplay-timeout') / 1000 || "";
        let autoplay = novi.element.getAttribute(props.element, 'data-autoplay') === "true";
        let loop = novi.element.getAttribute(props.element, 'data-loop') === "true";
        let margins = this.getMargins(props.element);
        let items = this.getItems(props.element);

        if (autoplay) Editor.setBodyHeight(220);
        this.state = {
            loop,
            autoplayTime,
            autoplay,
            items,
            margins,
            initValue: {
                loop,
                autoplayTime,
                autoplay,
                items,
                margins
            },
            element: props.element,
            childElement: props.childElement
        };
        this.style = `
        .owl-wrap{
            padding: 0 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            color: #6E778A;
        }
        .owl-switcher{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
            -webkit-transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);
            transition: 0.15s all cubic-bezier(0.4, 0, 1, 1);
            opacity: 1;
            visibility: visible;
        }
        .owl-switcher.disabled{
            opacity: 0;
            visibility: hidden;
            height: 0;
            margin-top: 0;
        }
      
        .owl-switcher .novi-input{
            width: 55px;
        }  
        .owl-wrap .Select-menu-outer, .owl-wrap .Select-menu{
            max-height: 85px;
        }
        .owl-group{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        `;
        this._handleItemChange = this._handleItemChange.bind(this);
        this._handleMarginChange = this._handleMarginChange.bind(this);
        this._handleAutoplayChange = this._handleAutoplayChange.bind(this);
        this._handleSwitcherChange = this._handleSwitcherChange.bind(this);
        this._handleLoopChange = this._handleLoopChange.bind(this);
        this._renderAutoPlaySeconds = this._renderAutoPlaySeconds.bind(this);
        this.messages = Language.getDataByKey("novi-plugin-owl-carousel");
    }


    render() {
        let activeItem = this.getActiveItemValue(this.state.items);
        let activeMargin = this.getActiveItemValue(this.state.margins);
        return (
            <div className="owl-wrap">
                <style>{this.style}</style>
                <div className="owl-group">
                    <div>
                        <p className="novi-label" style={{"marginTop": "0"}}>
                            {this.messages.editor.settings.body.visibleItems}
                        </p>
                        <InputNumber min={1} value={activeItem} onChange={this._handleItemChange}/>
                    </div>
                    <div style={{"marginLeft": "10px"}}>
                        <p className="novi-label" style={{"marginTop": "0"}}>
                            {this.messages.editor.settings.body.indent}
                        </p>
                        <InputNumber min={0} value={activeMargin} onChange={this._handleMarginChange}/>
                    </div>


                </div>

                <div className="owl-switcher">
                    <p className="novi-label" style={{"margin": 0}}>
                        {this.messages.editor.settings.body.loop}
                    </p>
                    <Switcher isActive={this.state.loop} onChange={this._handleLoopChange}/>
                </div>

                <div className="owl-switcher">
                    <p className="novi-label" style={{"margin": 0}}>
                        {this.messages.editor.settings.body.autoplay}
                    </p>
                    <Switcher isActive={this.state.autoplay} onChange={this._handleSwitcherChange}/>
                </div>

                {this._renderAutoPlaySeconds()}
            </div>

        )
    }

    _renderAutoPlaySeconds(){
        const switcherName = this.state.autoplay ? "owl-switcher": "owl-switcher disabled";
        return (
            <div className={switcherName}>
                <p className="novi-label" style={{"margin": 0}}>
                    {this.messages.editor.settings.body.autoplayDelay}
                </p>
                <div style={{"maxWidth": "56px"}}>
                    <InputNumber min={1} value={this.state.autoplayTime} onChange={this._handleAutoplayChange}/>
                </div>
            </div>
        )
    }

    _handleAutoplayChange(value) {
        this.setState({
            autoplayTime: value
        });
    }

    _handleSwitcherChange(isActive) {
        if (isActive) Editor.setBodyHeight(220);
        else Editor.setBodyHeight(170);
        this.setState({ 
            autoplay: isActive
        })
    }

    _handleLoopChange(isActive) {
        this.setState({
            loop: isActive
        })
    }

    _handleItemChange(value){
        let items = [];
        items = items.concat(this.state.items);
        let activeItem = this.getActiveItem(this.state.element);
        items[activeItem] = value.toString();
        this.setState({
            items
        });
    }
    _handleMarginChange(value){
        let margins = [];
        margins = margins.concat(this.state.margins);
        let activeItem = this.getActiveItem(this.state.element);
        margins[activeItem] = value.toString();
        this.setState({
            margins
        });
    }

    getItems(element){
        return [
            novi.element.getAttribute(element, 'data-items') || null,
            novi.element.getAttribute(element, 'data-xs-items') || null,
            novi.element.getAttribute(element, 'data-sm-items') || null,
            novi.element.getAttribute(element, 'data-md-items') || null,
            novi.element.getAttribute(element, 'data-lg-items') || null,
            novi.element.getAttribute(element, 'data-xl-items') || null,
        ]
    }

    getMargins(element){
        return [
            novi.element.getAttribute(element, 'data-margin')? novi.element.getAttribute(element, 'data-margin').replace("px", "") : null,
            novi.element.getAttribute(element, 'data-xs-margin') ? novi.element.getAttribute(element, 'data-xs-margin').replace("px", "") : null,
            novi.element.getAttribute(element, 'data-sm-margin') ? novi.element.getAttribute(element, 'data-sm-margin').replace("px", "") : null,
            novi.element.getAttribute(element, 'data-md-margin') ? novi.element.getAttribute(element, 'data-md-margin').replace("px", "") : null,
            novi.element.getAttribute(element, 'data-lg-margin') ? novi.element.getAttribute(element, 'data-lg-margin').replace("px", "") : null,
            novi.element.getAttribute(element, 'data-xl-margin') ? novi.element.getAttribute(element, 'data-xl-margin').replace("px", "") : null,

        ]
    }

    getActiveItem(element){
        let size = novi.viewport.getActiveSize();
        if (!size.width){
            size.width = element.ownerDocument.defaultView.innerWidth;
        }

        return size.width < 480 ? 0 : size.width <768 ? 1 : size.width < 992 ? 2 : size.width < 1200 ? 3 : size.width < 1600 ? 4: 5;
    }

    getActiveItemValue(items){
        let resolutionIndex = this.getActiveItem(this.state.element);
        if (items[resolutionIndex]) return items[resolutionIndex];

        for (let i=resolutionIndex; resolutionIndex >= 0; i--){
            if (items[i] !== null) return items[i];
        }
    }

}