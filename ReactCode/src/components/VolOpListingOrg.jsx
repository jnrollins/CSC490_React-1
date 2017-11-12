import React from 'react'
import { CardPanel, Button, Icon } from 'react-materialize'
import { deleteVolOp, getVolOpById, editOrgInfo } from '../actions/org_actions'
import { withRouter } from 'react-router-dom'
import ReactToolTip from 'react-tooltip'
import gmappalceholder from '../assets/images/gmapplaceholder.jpg'

const VolOpListingOrg = (props) => {
    var icons = {
        animals:<Icon>pets</Icon>,
        community:<Icon>domain</Icon>,
        elderly:<Icon>accessible</Icon>,
        homeless:<Icon>wc</Icon>,
        kids:<Icon>face</Icon>
    }

    const handleEdit = () =>{
        getVolOpById(props._id).then(props.history.push('/editvolop')).catch(function(err){console.log(err)})
    }

    const handleDelete = () => {
        const orgObj = JSON.parse(localStorage.getItem('orgInfo'))
        deleteVolOp(props._id)
            .then(result => {orgObj.orgVolOps.splice(orgObj.orgVolOps.indexOf(result._id), 1);editOrgInfo(orgObj)
                .then(props.history.push('/'))
                .catch(function(err){console.log(err)})})
            .catch(function(err){console.log(err)})
    }

    return(
        <CardPanel className="white black-text">
            <div className='volop-listing-container'>
                <div className='volop-listing-header'>
                    <div className='volop-orgname'>
                        <b>{props.orgName}</b>
                    </div>
                    <div className='volop-name'>
                        {props.volOpName}
                    </div>
                    <div className='volop-numspots'>
                        <div data-tip='Spots Remaining' className='volop-numspots-icon'>
                            <Icon>account_box</Icon>
                        </div>
                        <ReactToolTip class='tooltip'/>
                        <div className='volop-numspots-num'>
                            <b>{props.volOpSpotsAvailable}</b>
                        </div>
                    </div>
                    <div className='volop-ongoing'>
                        {props.volOpOngoing ?
                            <b>Ongoing</b>:
                            <div>
                                {/*make a parseDate funciton for this*/}
                                <b data-tip={
                                    `${props.volOpStartDate == props.volOpEndDate ?
                                        props.volOpStartDate :
                                        `${props.volOpStartDate} to ${props.volOpEndDate}` } from ${props.volOpTod}`}>One-Time Event</b>
                                <ReactToolTip class='tooltip'/>
                            </div>
                        }
                        <hr/>
                    </div>
                </div>
                <div className='volop-description'>
                    {props.volOpDescription}
                </div>
                <div className='volop-map-container'>
                    <div className='volop-map'>
                        <img src={gmappalceholder}/>
                    </div>
                    <div className='volop-address'>
                        {/*`${props.volOpAddress.city}, ${props.volOpAddress.state}, ${props.volOpAddress.street}, ${props.volOpAddress.zip}`*/}
                    </div>
                </div>
                <div className='volop-footer'>
                    <div className='volop-categories'>
                        <ul>
                            {props.volOpCategories.map(cat => {
                                return(
                                    <li data-tip={cat}
                                        style={{display:'inline'}}>
                                        {icons[cat]}
                                        <ReactToolTip class='tooltip'/>
                                    </li>)
                            })
                            }
                        </ul>
                    </div>
                    <div className='volop-details'>
                        <ul>
                            {props.volOpDetails.map(detail => {
                                return(<li>{detail}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div><Button onClick={()=>handleEdit()}>Edit<Icon right>edit</Icon></Button>    <Button onClick={()=>handleDelete()}>Delete<Icon right>delete</Icon></Button></div>
        </CardPanel>
    )
}

export default withRouter(VolOpListingOrg)