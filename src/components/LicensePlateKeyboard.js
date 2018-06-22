import React, { Component, Fragment } from 'react';

export default class LicensePlateKeyboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            switching: false,
            licenseLen: 7,
            notNew: true,
            license: ['川','-', '-', '-', '-', '-', '-', '+新'],
            position: 1,
            isHide: false,
        }
    }

    handleClick = (e, m) => {
        if(this.state.position + 1 <= this.state.licenseLen){
            let forms = this.state.license;
            forms.splice(this.state.position, 1, m)
            let setNew = {
                license: forms,
                position: this.state.position + 1,
            };
            if(this.state.position >= 0){
                setNew = {
                    ...setNew,
                    switching: false,
                }
            }
            this.setState({...setNew})
        }
        console.log(this.state.position);
    }

    switch = () => {
        this.setState({
            switching: !this.state.switching
        })
    }

    setLicenseLen = (index) => {
        let forms = this.state.license;
        if(forms[7] != '+新'){
            this.setState({position: index});
            return false
        }
        forms.splice(7, 1, '-')
        let setNew = {
            licenseLen: 8,
            notNew: false,
            license: forms,
        };
        if(this.state.licenseLen === 8){
            setNew = {
                ...setNew,
                position: index,
            }
        }
        this.setState({...setNew})
    }

    switchChinese = () => {
        this.setState({
            switching: true
        })
    }

    handleMap = (source, type) => {
        return <ul className={type ? 'province' : 'alphanumeric'}>
            {
                source.map(item => (
                    item.map(m => (
                        <li key={m.toString()} onClick={(e) => this.handleClick(e, m.toString())}>
                            <span>{m}</span>
                            {/* <div class="popout">
                                <div class="head">{m}</div>
                                <div class="neck"></div>
                            </div> */}
                        </li>
                    ))
                ))
            }
        </ul>
    }

    enterFormMap = (license) => {
        return <ul className="enterform">
            {
                license.map((n, index) => (
                    <li key={index} onClick={(e) => this.handleLicenseForm(e, index)}><span className={`${index == this.state.position ? 'blue' : ''} ${this.state.notNew && n == '+新' ? 'new' : ''}`}>{n}</span></li>
                ))
            }
        </ul>
    }

    handleLicenseForm = (e, index) => {
        if(this.state.isHide)
            this.setState({isHide: false});
        switch(index)
        {
            case 0:
                this.setState({switching: true, position: index});
                break;
            case 7:
                this.setLicenseLen(index);
                break;
            default:
                this.setState({switching: false, position: index}) 
        }
    }

    deleteEnterForm = () => {
        if(this.state.position === 0){
            this.setState({
                switching: true,
            })
            return false
        }

        let forms = this.state.license;
        this.state.position == 8 && this.state.licenseLen == 7
            ? forms.splice(this.state.position, 1, '-')
            : forms.splice(this.state.position - 1, 1, '-')
        let enter = {
            license: forms,
            position: this.state.position - 1,
        };
        if(this.state.position === 1){
            enter = {
                ...enter,
                switching: true
            }
        }
        this.setState({...enter})
    }

    hideKeyboard = () => {
        this.setState({isHide: true})
    }

    render(){
        const province = [
            ['京','津','渝','沪','冀','晋','辽','吉','黑','苏'],
            ['浙','皖','闽','赣','鲁','豫','鄂','湘','奥','琼'],
            ['川','贵','云','陕','甘','青','蒙','桂','宁','新'],
            ['藏','使','领','警','学','港','澳'],
        ];

        const alphanumeric = [
            ['1','2','3','4','5','6','7','8','9','0'],
            ['Q','W','E','R','T','Y','U','I','O','P'],
            ['A','S','D','F','G','H','J','K','L'],
            ['Z','X','C','V','B','N','M'],
        ];
        
        return(
            <Fragment>
                {this.enterFormMap(this.state.license)}
                <div className={`${'keyboard'} ${this.state.isHide ? 'hide' : ''}`}>
                    <p className="complete" onClick={this.hideKeyboard}><span>完成</span></p>
                    {this.state.switching ? this.handleMap(province, 1) : this.handleMap(alphanumeric, 0)}
                    <div className="hidebox" onClick={this.switch}>{this.state.switching ? 'ABC' : '中文'}</div>
                    <div className="clearbox" onClick={this.deleteEnterForm}>Del</div>
                </div>
            </Fragment>
        )
    }
}