import React, {Component} from 'react'
import styled from 'styled-components'
import {Card, CardHeader, CardBody, FormText, FormGroup, Label, Input, Col, Row, Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";

class InputPanel extends Component {

    constructor(props) {
        super(props)

        this.onRangeFirstValChange = this.onRangeFirstValChange.bind(this)
        this.onRangeLastValChange = this.onRangeLastValChange.bind(this)
        this.onListValChange = this.onListValChange.bind(this)
        this.onStartListSearch = this.onStartListSearch.bind(this)
        this.onStartRangeSearch = this.onStartRangeSearch.bind(this)

        this.state = {
            rangeFirstVal: undefined,
            rangeLastVal:  undefined,
            isRangeValid: true,
            listVal: props.demoMode ? '3151234567,3151234569,3151844577,56288592' : '',
            isListValid: true
        }
    }


    onRangeFirstValChange(e) {
        const firstVal = parseInt(e.target.value, 10)
        if (!isNaN(firstVal)) {
            this.setState({
                rangeFirstVal: firstVal,
                isRangeValid: this.isRangeValid(firstVal, this.state.rangeLastVal)
            })
        } else {
            this.setState({
                rangeFirstVal: firstVal,
                isRangeValid: false
            })
        }
    }

    onRangeLastValChange(e) {
        const lastVal = parseInt(e.target.value, 10)
        if (!isNaN(lastVal)) {
            this.setState({
                rangeLastVal: lastVal,
                isRangeValid: this.isRangeValid(this.state.rangeFirstVal, lastVal)
            })
        } else {
            this.setState({
                rangeLastVal: lastVal,
                isRangeValid: false
            })
        }

    }

    isRangeValid(first, last) {
        return last > first && (last - first) < 150
    }

    onListValChange(e) {
        this.setState({
            listVal: e.target.value,
            isListValid: this.isListValid(e.target.value)
        })

    }

    isListValid(val) {
        return val.split(',').length <= 150
    }

    onStartRangeSearch() {
        let numbers = []
        for(let i = this.state.rangeFirstVal; i <= this.state.rangeLastVal; i++) {
            numbers.push(i)
        }
        this.props.onSearch(numbers)
    }

    onStartListSearch() {
        const numbers = this.state.listVal.split(',').map((s) => {
            let i = parseInt(s, 10)
            return isNaN(i) ? undefined : i
        }).filter(i  => i).sort((x,y) => x-y)
        this.props.onSearch([...new Set(numbers)])

    }



    render() {
        return (
            <div>
                <Card>
                    <CardHeader><FontAwesomeIcon icon={faMobileAlt}/>&nbsp;Phone numbers</CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <h4>Range</h4>
                                <p>Search within a range of numbers</p>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>From</Label>
                                            <Input type="number" value={isNaN(this.state.rangeFirstVal) ? '' : this.state.rangeFirstVal}
                                                   placeholder="31612345670"
                                                   invalid={!this.state.isRangeValid}
                                                   onChange={this.onRangeFirstValChange}
                                                   className="selectable-text copyable-text" placeholder="31641857400"/>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>To</Label>
                                            <Input type="number" value={isNaN(this.state.rangeLastVal) ? '' : this.state.rangeLastVal}
                                                   placeholder="31612345679"
                                                   invalid={!this.state.isRangeValid}
                                                   onChange={this.onRangeLastValChange}
                                                   className="selectable-text copyable-text" placeholder="31641857499"/>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <FormText className="mb-2">Don't select more than 150 numbers and enter a valid
                                    range</FormText>
                                <Button color="primary" disabled={!this.state.isRangeValid}
                                        onClick={this.onStartRangeSearch}>Search in range</Button>
                            </Col>
                            <Col>
                                <h4>List</h4>
                                <p>Search in a comma separated list of numbers </p>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>List</Label>
                                            <Input className="selectable-text copyable-text" value={this.state.listVal}
                                                   onChange={this.onListValChange} invalid={!this.state.isListValid}
                                                   placeholder="31641857414,31625987416,31649281745"/>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormText className="mb-2">Don't make the list larger than 150 numbers</FormText>
                                <Button color="primary" disabled={!this.state.isListValid} onClick={this.onStartListSearch}>Search
                                    in list</Button>
                            </Col>
                        </Row>


                    </CardBody>
                </Card>
            </div>

        )
    }
}

export default InputPanel