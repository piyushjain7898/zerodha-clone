import React from 'react'
function CreateTicket() {
    return ( 
       <div className="container">
        <div className="row p-5  mt-5 mb-5">
            <h1 className='fs-2 mb-5'>To Create a ticket , select a relevant topic</h1>
            <div className="col-4   mt-2 mb-5">
                <h4 className='text-muted pb-3'><i class="fa fa-plus-circle   fa-1x" aria-hidden="true"></i> &nbsp;Account Opening</h4>
                <a style={{lineHeight:"2.5"}} href=""  >Online Account Opening</a>
                <a style={{lineHeight:"2.5"}} href=""  >Offline Account Opening</a>
                <a style={{lineHeight:"2.5"}} href=""  >Company, partnership and HUF Account Opening</a>
                <a style={{lineHeight:"2.5"}} href=""  >NRI Account Opening</a>
                <a style={{lineHeight:"2.5"}} href=""  >Charges at zerodha</a>
                <a style={{lineHeight:"2.5"}} href=""  >Online Account Opening</a>
                <a style={{lineHeight:"2.5"}} href=""  >Getting started  </a>
            </div>
             <div className="col-4 mt-2 mb-5">
                <h4 className='text-muted pb-3'><i class="fa-solid fa-1x fa-circle-user"></i>&nbsp;Login</h4>
                <a style={{lineHeight:"2.5"}} href=""  >Login credentials</a>
                <a style={{lineHeight:"2.5"}} href=""  >Account Modification and segment addition</a>
                <a style={{lineHeight:"2.5"}} href=""  >DP ID and bank details</a>
                <a style={{lineHeight:"2.5"}} href=""  >Your profile</a>
                <a style={{lineHeight:"2.5"}} href=""  >Transfer and conversion of shares</a>
            </div>
              <div className="col-4 mt-2 mb-5">
                <h4 className='text-muted pb-3'><i class="fa-solid  fa-1x fa-list"></i>&nbsp;Zerodha Account</h4>
                <a style={{lineHeight:"2.5"}} href=""  >Margin/Leverage, Product and Order types</a>
                <a style={{lineHeight:"2.5"}} href=""  >Kite Web and Mobile</a>
                <a style={{lineHeight:"2.5"}} href=""  >Trading FAQs</a>
                <a style={{lineHeight:"2.5"}} href=""  >Corporate Actions</a>
                <a style={{lineHeight:"2.5"}} href=""  >Sentinel</a>
                <a style={{lineHeight:"2.5"}} href=""  >Kite API</a>
                <a style={{lineHeight:"2.5"}} href=""  >Stockreports</a>
                <a style={{lineHeight:"2.5"}} href=""  >GTT</a>
            </div>
             <div className="col-4 mt-2 mb-5">
                <h4 className='text-muted pb-3' ><i class="fa fa-plus-circle  fa-1x" aria-hidden="true"></i> &nbsp;Funds</h4>
                <a style={{lineHeight:"2.5"}} href=""  >Adding Funds</a>
                <a style={{lineHeight:"2.5"}} href=""  >Fund Withdrawal</a>
                <a style={{lineHeight:"2.5"}} href=""  >EMandates</a>
                <a style={{lineHeight:"2.5"}} href=""  >Adding Bank Accounts</a>
            
            </div>
             <div className="col-4 mt-2 mb-5">
                <h4 className='text-muted pb-3'><i class="fa-solid  fa-1x fa-terminal"></i>&nbsp;Console</h4>
                <a style={{lineHeight:"2.5"}} href=""  > Reports</a><br />
                <a style={{lineHeight:"2.5"}} href=""  >Ledger</a><br />
                <a style={{lineHeight:"2.5"}} href=""  >Portfolio</a><br />
                <a style={{lineHeight:"2.5"}} href=""  >60 days challenge</a><br />
                <a style={{lineHeight:"2.5"}} href=""  >IPO</a><br />
                <a style={{lineHeight:"2.5"}} href=""  >Referral Program </a>
            </div>
             <div className="col-4 mt-2 mb-5">
                <h4 className='text-muted pb-3'><i class="fa-solid fa-1x fa-coins"></i> &nbsp;Coin</h4>
                <a style={{lineHeight:"2.5"}} href=""  >Understanding Mutual Funds</a>
                <a style={{lineHeight:"2.5"}} href=""  >About Coin</a>
                <a style={{lineHeight:"2.5"}} href=""  >Buying and Selling through Coin</a>
                <a style={{lineHeight:"2.5"}} href=""  >Starting a SIP</a>
                <a style={{lineHeight:"2.5"}} href=""  >Managing your Portfolio</a>
                <a style={{lineHeight:"2.5"}} href=""  >Coin App</a>
                <a style={{lineHeight:"2.5"}} href=""  >Government Securities </a>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;