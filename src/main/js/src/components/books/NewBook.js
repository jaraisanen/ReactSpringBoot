import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {addBook} from '../../actions/books/BookActions'
import {connect} from 'react-redux'

class NewBook extends Component {

    submit = (values) => {
        this.props.addBook(values, this.props.history);
    }

    errorMessage() {
        if (this.props.errorMessage) {
            return (
                <div className="error-message">
                    <p>{this.props.errorMessage}</p>
                </div>
            );
        }
    }

    render() {
        const {handleSubmit} = this.props;
        const {errorMessage, addLoading} = this.props;

        if (errorMessage) {
            return <div className="error-message">
                <p>Error! {errorMessage.message}</p>
            </div>;
        }

        if (addLoading) {
            return <div className="info-message">
                <p>Loading...</p>
            </div>;
        }
        return (
            <div className="centered-container">
                <h2>New Book</h2>
                <form onSubmit={handleSubmit(this.submit)}>
                    <div className="field-group">
                        <Field name="title" component="input" type="text" placeholder="Title"/>
                        <Field name="author" component="input" type="text" placeholder="Author"/>
                        <Field name="year" component="input" type="text" placeholder="Year"/>
                        <Field name="isbn" component="input" type="text" placeholder="ISBN"/>
                        <Field name="price" component="input" type="text" placeholder="Price"/>
                        <button type="submit" className="green-button">Save</button>
                        <button type="text" className="cancel-button" onClick={() => this.props.history.push("/books")}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.newBook.addError,
        addBook: state.newBook.addBook,
        addLoading: state.newBook.addLoading};
}

const reduxFormLogin = reduxForm({form: 'newBook'})(NewBook);

export default connect(mapStateToProps, {addBook})(reduxFormLogin);
