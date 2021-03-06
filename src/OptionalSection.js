import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import Button from '@material-ui/core/Button';
import MoneyTextQuestion from './MoneyTextQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import NumberQuestion from './NumberQuestion';

class OptionalSection extends Component {

    constructor(props) {
        super(props);
    } 

    marriedReliefIcons = (
        <div className="questionIcon">
        <img className="headerIcons" src="assets/tax.svg"></img>
        <img className="headerIcons" src="assets/married.svg"></img>
        </div>
    )

    childrenReliefIcons = (
        <div className="questionIcon">
        <img className="headerIcons" src="assets/tax.svg"></img>
        <img className="headerIcons" src="assets/family.svg"></img>
        </div>
    )

    marriedReliefQuestions = (
        <div>
        <CheckboxQuestion
        id = "disabledSpouse" 
        questionTitle="Is your spouse disabled?" 
        questionSubtitle=""
        capText="(fixed at RM 3500)"
        cap={3500}
        label="Disabled spouse"
        icons={this.marriedReliefIcons}
        total={this.props.getTotalRelief}
        />


        </div>
    )

    childrenReliefQuestions(childrenAmount, childrenAmountToShow, hasDisabledChildren)  {
            return (

            <div>
            <NumberQuestion 
            id = "childrenAmount" 
            questionTitle="How many children do you have?" 
            questionSubtitle="of any age"
            cap={0}
            total={this.props.getTotalRelief}
            label="Amount of children"
            childrenAmountToDisplay={childrenAmountToShow}
            childrenAmount={childrenAmount}
            baseQuestion={true}
            />

            {childrenAmount > 0 ?
                <div>
                <NumberQuestion 
                id = "schoolChildren" 
                questionTitle="How many are under 18 years of age" 
                questionSubtitle="unmarried children"
                capText="(RM 2,000 per child)"
                cap={0}
                total={this.props.getTotalRelief}
                label="Amount of children"
                childrenAmount={childrenAmount}
                baseQuestion={false}
                amountToDisplay={this.props.schoolChildrenToDisplay}
                />
    
                <NumberQuestion 
                id = "collegeChildren" 
                questionTitle="How many are above 18 years of age and are undergoing pre-university education" 
                questionSubtitle="A-Levels, STPM, Matriculation"
                capText="(RM 2,000 per child)"
                cap={0}
                total={this.props.getTotalRelief}
                label="Amount of children"
                childrenAmount={childrenAmount}
                baseQuestion={false}
                amountToDisplay={this.props.collegeChildrenToDisplay}
                />
    
                <NumberQuestion 
                id = "uniChildren" 
                questionTitle="How many are above 18 years of age and are undergoing university education" 
                questionSubtitle="Diploma, Degree, Masters, Doctorate"
                capText="(RM 8,000 per child)"
                cap={0}
                total={this.props.getTotalRelief}
                label="Amount of children"
                childrenAmount={childrenAmount}
                baseQuestion={false}
                amountToDisplay={this.props.uniChildrenToDisplay}
                />
                
                <MoneyTextQuestion 
                id = "sspnRelief" 
                questionTitle="Net saving in SSPN's scheme" 
                questionSubtitle="total deposit for last year MINUS total withdrawal in the last year"
                label="SSPN Deposits"
                cap={6000}
                capText="(capped at RM 6,000)"
                total={this.props.getTotalRelief}                
                />

                <MoneyTextQuestion 
                id = "childcareRelief" 
                questionTitle="Amount spent for childcare" 
                questionSubtitle="total spent in kindergarten or child care centre"
                label="Childcare Cost"
                cap={1000}
                capText="(capped at RM 1,000)"
                total={this.props.getTotalRelief}                
                />

                <CheckboxQuestion 
                id = "hasDisabledChildren" 
                questionTitle="Do you have any disabled children?" 
                questionSubtitle=""
                capText=""
                cap={0}
                total={null}
                hasDisabledChildrenFunc={this.props.hasDisabledChildrenFunc}
                />               

                {hasDisabledChildren ?
                    <div>
                    
                    <NumberQuestion 
                    id = "disabledChildren" 
                    questionTitle="How many are disabled?"
                    questionSubtitle=""
                    capText="(RM 6,000 per child)"
                    cap={6000}
                    total={this.props.getTotalRelief}
                    label="Amount of children"
                    childrenAmount={childrenAmount}
                    baseQuestion={false}
                    amountToDisplay={childrenAmount}
                    />

                    <NumberQuestion 
                    id = "disabledUniChildren" 
                    questionTitle="How many are currently undergoing higher education?"
                    questionSubtitle=""
                    capText="(RM 8,000 per child)"
                    cap={8000}
                    total={this.props.getTotalRelief}
                    label="Amount of children"
                    childrenAmount={childrenAmount}
                    baseQuestion={false}
                    amountToDisplay={this.props.disabledChildren}
                    />

                    </div>
                :
                    null
                }

                </div>
                :
                null
            }                            
           
            </div>   
            )
    }
        
    

    getQuestions(title, childrenAmount, childrenAmountToShow, hasDisabledChildren) {
        if (title === "Married Tax Relief") {
            return this.marriedReliefQuestions
        } else if (title === "Children Tax Relief") {
            return this.childrenReliefQuestions(childrenAmount, childrenAmountToShow, hasDisabledChildren) 
        }
    }

    render() {
        return (
            <div className="optionalSectionHeader">
                <span >
                    <h5 className={(this.props.answer ? 'bottom-padding-20 b-border-black' : '')}>
                        {this.props.questionTitle}
                        <span className="optionalSectionButtons">
                        {this.props.answer ?
                            <div className="optionalSectionButtons margin-right-20">
                            <Button className="optionalButton" variant="contained" color="primary" size="large" onClick={this.props.handleOnYesClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="outlined" color="secondary" size="large" onClick={this.props.handleOnNoClicked}>
                            No
                            </Button>  
                            </div>
                            : 
                            <div className="optionalSectionButtons">
                            <Button className="optionalButton" variant="outlined" color="primary" size="large" onClick={this.props.handleOnYesClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="contained" color="secondary" size="large" onClick={this.props.handleOnNoClicked}>
                            No
                            </Button>  
                            </div>
                        }    
                       
                    </span>
                    </h5>
                </span>

                {this.props.answer ?
                <div className="optionalSectionContainer">
                    <HeaderSection
                    title={this.props.title}
                    icons={this.props.title}
                    total={this.props.totalRelief}
                    childrenAmount={this.props.childrenAmount}
                    />

                    {this.getQuestions(this.props.title, this.props.childrenAmount, this.props.childrenAmountToShow, this.props.hasDisabledChildren)}
                 </div>   
                    :
                    null
                }

            
            </div>
        );
    }

}

export default OptionalSection;