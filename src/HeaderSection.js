import React, { Component, PropTypes } from 'react';
import NumberFormat from 'react-number-format';

function returnIcon(title) {
    if (title === "Income") {
        return (
            <img className="headerIcons" src="assets/dollar.svg"></img>
        )
    } else if (title === "Individual Tax Relief") {
        return (
            <div className="inline-block">
                <img className="headerIcons" src="assets/tax.svg"></img>
                <img className="headerIcons" src="assets/one.svg"></img>
            </div>
        )
    }
}

function getSectionType(title) {
    if (title === "Income") {
        return "Total Income : "
    } else if (title === "Individual Tax Relief") {
        return "Total Relief : "
    }
}

export default function IncomeSection(props) {

        return (
            <div className="headerSection b-border">
                <h3>{props.title}
                {returnIcon(props.title)}
                <div className="total">
                        <h6>
                            {getSectionType(props.title)}
                            <NumberFormat value={props.total} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                        </h6>
                    </div>
                </h3>

                

            </div>
          
        );
  
  }