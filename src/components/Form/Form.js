import { render } from "react-dom";
import "./styles.css";
import { Form, Field } from "react-final-form";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const createEmailMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $postalCode: String!
    $priceRange: String!
    $ageGroup: String!
    $manyBedrooms: String!
    $hearAbout: String!
    $comments: String!
    $realtor: String!
    $recieveEmail: Boolean!
  ) {
    createEmail(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      postalCode: $postalCode
      priceRange: $priceRange
      ageGroup: $ageGroup
      manyBedrooms: $manyBedrooms
      hearAbout: $hearAbout
      comments: $comments
      realtor: $realtor
      recieveEmail: $recieveEmail
    ) {
      id
    }
  }
`;

class EmailForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    postalCode: "",
    priceRange: "",
    ageGroup: "",
    manyBedrooms: "",
    hearAbout: "",
    comments: "",
    realtor: "",
    recieveEmail: ""
  };
  render() {
    return (
      <Mutation mutation={createEmailMutation}>
        {(addEmail, { data }) => (
          <Form
            onSubmit={values => {
              const newEmail = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                postalCode: values.postalCode,
                priceRange: values.priceRange,
                ageGroup: values.ageGroup,
                manyBedrooms: values.manyBedrooms,
                hearAbout: values.hearAbout,
                comments: values.comments,
                realtor: values.realtor,
                recieveEmail: values.recieveEmail
              };
              addEmail({ variables: newEmail });
            }}
            render={({ handleSubmit, pristine, invalid, values }) => (
              <form onSubmit={handleSubmit} className="formContainer">
                <div className="inputField">
                  <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder={"first name".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="lastName"
                    component="input"
                    type="text"
                    placeholder={"last name".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder={"email".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="phoneNumber"
                    component="input"
                    type="text"
                    placeholder={"phone number".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="postalCode"
                    component="input"
                    type="text"
                    placeholder={"phone number".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="priceRange"
                    component="input"
                    type="text"
                    placeholder={"what is your price range".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="ageGroup"
                    component="input"
                    type="text"
                    placeholder={"what is your age group".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="manyBedrooms"
                    component="input"
                    type="text"
                    placeholder={"how many bedrooms do you prefer".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="hearAbout"
                    component="input"
                    type="text"
                    placeholder={"how did you hear about us".toUpperCase()}
                  />
                </div>
                <div className="inputField">
                  <Field
                    name="comments"
                    component="input"
                    type="text"
                    placeholder={"comments".toUpperCase()}
                  />
                </div>
                <div className="radioContainer">
                  <label>{"are you a realtor?".toUpperCase()}</label>
                  <div className="innerRadio">
                    <label>
                      <Field
                        name="realtor"
                        component="input"
                        type="radio"
                        value="yes"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        name="realtor"
                        component="input"
                        type="radio"
                        value="no"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="checkboxContainer">
                  <Field
                    name="recieveEmail"
                    component="input"
                    type="checkbox"
                  />
                  <label>
                    {"yes, i'd like to recieve emails from coco house and/or konnect developments. i understand i can unsubscribe".toUpperCase()}
                  </label>
                </div>
                <div className="buttons">
                  <button type="submit" disabled={invalid || pristine}>
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        )}
      </Mutation>
    );
  }
}

export default graphql(createEmailMutation, { name: "createEmailMutation" })(
  EmailForm
);
