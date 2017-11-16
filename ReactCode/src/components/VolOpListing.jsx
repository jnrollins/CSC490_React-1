import React from 'react'
import { CardPanel, Icon, Button } from 'react-materialize'
import ReactToolTip from 'react-tooltip'
import gmappalceholder from '../assets/images/gmapplaceholder.jpg'

const VolOpListing = (props) => {
  let volop = props.volop

  var icons = {
    animals:<Icon>pets</Icon>,
    community:<Icon>domain</Icon>,
    elderly:<Icon>accessible</Icon>,
    homeless:<Icon>wc</Icon>,
    kids:<Icon>face</Icon>
  }

  const handleClick = () => {
    localStorage.setItem('tempVolOp', JSON.stringify(volop))
    props.history.push('/register')
  }


  return(
    <CardPanel className="white black-text">
      <div className='volop-listing-container'>
        <div className='volop-orgname'>
          <b>{volop.orgName}</b>
        </div>
        <div className='volop-name'>
          {volop.volOpName}
        </div>
        <div className='volop-numspots-icon'>
          <div data-tip={`${volop.volOpSpotsAvailable} Spots Remaining`}>
            <Icon>account_box</Icon>
          </div>
        </div>
        <ReactToolTip class='tooltip'/>
        <div className='volop-numspots-num'>
            <div>{volop.volOpSpotsAvailable}</div>
        </div>
          <div className='volop-ongoing'>
            {volop.volOpOngoing ?
              <b>Ongoing</b>:
              <div>
              <b data-tip={
                `${volop.volOpStartDate == volop.volOpEndDate ?
                                volop.volOpStartDate :
                                `${volop.volOpStartDate} to ${volop.volOpEndDate}` } from ${volop.volOpTod}`}>One-Time Event</b>
              <ReactToolTip class='tooltip'/>
              </div>
            }
            <hr/>
          </div>
        <div className='volop-description'>
          {volop.volOpDescription}
        </div>
        <div className='volop-map'>
          <img src={gmappalceholder}/>
        </div>
        <div className='volop-address'>
          {/*`${volop.volOpAddress.city}, ${volop.volOpAddress.state}, ${volop.volOpAddress.street}, ${volop.volOpAddress.zip}`*/}
        </div>
        <div className='volop-categories'>
          <ul>
          {volop.volOpCategories.map(cat => {
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
          {volop.volOpDetails.map(detail => {
            return(<li>{detail}</li>)
          })}
          </ul>
        </div>
        <div className='volop-save-button'>
          <Button onClick={()=>handleClick()}>{props.userType == 'guest' ? 'Sign Up and Save' : 'Save'}</Button>
        </div>
      </div>
		</CardPanel>
  )
}

export default VolOpListing
