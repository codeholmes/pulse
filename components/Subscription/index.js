import React from 'react';
import styles from './styles.module.css'

class BillingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            userSelectedPlan1:true,
            userSelectedPlan1_:false,
        }
    }
    
    userSelectedPlan1() {
        this.setState({ 
            userSelectedPlan1:!this.state.userSelectedPlan1,
            userSelectedPlan1_:!this.state.userSelectedPlan1_,
        })
      }

    BackToSubPage() {
        this.setState({
            userSelectedPlan1:!this.state.userSelectedPlan1,
            userSelectedPlan1_:!this.state.userSelectedPlan1_,
        })
    }

    render(){
    return (
        <div className="d-flex justify-content-center text-center">
            {this.state.userSelectedPlan1?<div className={styles.mainContainer}>
            <div className={styles.planHeadline}><div className={styles.TitleBox}>Make the most of these productivity tools. <br/> Subscribe today, to get full access. </div> </div>
                <div className="row d-flex justify-content-center">
                <div className={styles.planWrapper}>
                    <div className="row d-flex justify-content-around">
                        <div className="col-xs">
                            <div className={styles.shadow1}><div className={styles.plan1}>Monthly<hr/>
                            <div className={styles.priceStyle}>99 INR<span className={styles.priceDur}> /month</span></div>
                            <div d-flex justify-content-center text-center><div onClick={()=> this.userSelectedPlan1()} className={styles.subsBtn}>Subscribe now</div></div>
                            </div>
                            </div>  
                        </div>
                        <div className="col-xs">
                        <div className={styles.shadow2}><div className={styles.plan2}>
                            Annual<hr/>
                            <div className={styles.priceStyle1}> <strike className={styles.strikeStyles}> 1,188 INR</strike> <br/> 499 INR<span className={styles.priceDur}> /year</span></div>
                            <div className={styles.subsBtn1}>Subscribe now</div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                    <div className="d-flex justify-content-center text-center">
                    <div className={styles.planSubHeadline}>We are offering two plan at the moment, select the one which suits you best. </div>
                    </div>
            </div>:null}
            {this.state.userSelectedPlan1_?<div className={styles.plan1Styles}>
                <div className={styles.plan1Title}>Plan Selected</div>
                <div className="d-flex justify-content-center text-center">
                <div className={styles.plan1PriceOuterBox}>
                <div className="d-flex justify-content-center text-center">
                    <div className={styles.plan1PriceInnerBox}>99 INR</div>
                    </div><div className={styles.plan1CheckOut}>per month</div>
                    <div className="d-flex justify-content-center text-center">
                    <div className={styles.planConfirmPageBtnBox}>
                        <button onClick={()=> this.BackToSubPage()} className={styles.Cancel}>Cancel</button>
                        <button className={styles.Confirm}> Proceed to checkout</button>
                    
                    </div></div>
                    </div
                    ></div>
            </div>:null}
        </div>
        
    );
}
}

export default BillingPage;