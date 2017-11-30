const React = novi.react.React;
const Component = novi.react.Component;
const Input = novi.ui.input;
const Button = novi.ui.button;
const Language = novi.language;
export default class Settings extends Component {
    constructor(props) {
        super();
        this.state = {
            settings: {
                querySelector: props.settings.querySelector,
            }
        };
        this.saveSettings = this.saveSettings.bind(this);
        this.onChange = this.onChange.bind(this);
        this.messages = Language.getDataByKey("novi-plugin-owl-carousel");
    }

    componentWillReceiveProps(props){
        this.setState({
            settings: {
                querySelector: props.settings.querySelector,
            }
        });
    }

    render() {
        return (
            <div>
                <span style={{letterSpacing: "0,0462em"}}>Owl Carousel Plugin</span>
                <div style={{fontSize: 13, color: "#6E778A", marginTop: 21}}>{this.messages.settings.inputPlaceholder}</div>
                    <Input style={{marginTop: 10, width: 340}} value={this.state.settings.querySelector} onChange={this.onChange}/>
                <div style={{marginTop: 30}}>
                <Button type="primary"  messages={{textContent: this.messages.settings.submitButton}} onClick={this.saveSettings} />
                </div>
            </div>
        );
    }

    onChange(e){
        const value = e.target.value;
        this.setState({
            settings: {
                querySelector: value
            }
        })
    }

    saveSettings(){
        novi.plugins.settings.update("novi-plugin-owl-carousel", this.state.settings);
    }
}