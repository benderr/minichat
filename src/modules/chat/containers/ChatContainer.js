import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCurrencyRate} from "../actions";
import '../components/chat.css';
import {UserProfile} from "../components/UserProfile";
import {SearchPlace} from "../components/SearchPlace";
import {ContactProfile} from "../components/ContactProfile";
import {ContactList} from "../components/ContactList";
import {SettingsBar} from "../components/SettingsBar";
import {DialogView} from "../components/DialogView";
import {WriteMessageBlock} from "../components/WriteMessageBlock";

@connect(mapState, mapDispatch)
class ChatContainer extends React.Component {

    static propTypes = {test: PropTypes.string};

    render() {
        //const {rate, error, loading, pair} = this.props;
        return (
            <div id="frame">
                <div id="sidepanel">
                    <UserProfile/>
                    <SearchPlace/>
                    <ContactList/>
                    <SettingsBar/>
                </div>
                <div class="content">
                    <ContactProfile/>
                    <DialogView/>
                    <WriteMessageBlock/>
                </div>
            </div>
        );
    }

}

function mapState(state) {
    return {};
}

function mapDispatch(dispatch) {
    return {
        ...bindActionCreators({
            fetchRate: fetchCurrencyRate,
        }, dispatch),
    };
}


export {ChatContainer};