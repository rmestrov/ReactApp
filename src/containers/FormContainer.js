import React, { Component } from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import Select from '../components/Select';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioOptions: [],
            radioSelection: [],
            checkboxSelections: [],
            selectedCheckbox: [],
            dropdownOptions: [],
            dropdownSelected: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
        this.handleCheckboxSelection = this.handleCheckboxSelection.bind(this);
    }

    componentDidMount() {
        fetch('API')
        .then(res => res.json())
        .then(data => {
            this.setState({
                radioOptions: data.radioOptions,
                radioSelection: data.radioSelection,
                checkboxSelections: data.chekcboxSelections,
                selectedCheckbox: data.selectedCheckbox,
                dropdownOptions: data.dropdownOptions,
                dropdownSelected: data.dropdownSelected
            });
        });
    }

    handleFormSubmit(e) {
        e.preventDeafult();

        const formPayload = {
            radioSelection: this.state.radioSelection,
            selectedCheckbox: this.state.selectedCheckbox,
            dropdownSelected: this.state.dropdownSelected
        };

        console.log('Send this', formPayload);
        this.handleClearForm(e);
    }

    handleClearForm(e) {
        e.preventDeafult();
        this.setState({
            radioSelection: [],
            selectedCheckbox: [],
            dropdownSelected: ''
        });
    }

    handleDropdownSelect(e) {
        this.setState({ dropdownSelected: e.target.value }, () => console.log('range', this.state.dropdownSelected));
    }

    handleCheckboxSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.selectedCheckbox.indexOf(newSelection) > -1) {
            newSelectionArray =  this.state.selectedCheckbox.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedCheckbox, newSelection];
        }

        this.setState({selectedCheckbox: newSelectionArray}, () => console.log('selected checkbox', this.state.selectedCheckbox));
    }

    render() {
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h5>FORM</h5>
                <CheckboxOrRadioGroup />
                <CheckboxOrRadioGroup />
                <Select
                    name={'droprange'}
                    placeholder={'Choose'}
                    controlFunc={this.handleDropdownSelect}
                    options={this.state.dropdownOptions}
                    selectedOptions={this.state.dropdownSelected}
                />
                <input
                    type="submit"
                    className="btn btn-primary float right"
                    value="Submit" />
                <button
                    className="btn btn-link float-left"
                    onClick={this.handleClearForm}>Clear form</button>
            </form>
        );
    }
}

export default FormContainer;