var USER_COMPANY_INFO = 'company-info';

Template.profileCompanyEdit.onCreated(function() {
	if (Meteor.user()) {
		var userInfo = Meteor.user().profile.company
		console.log(userInfo)
		Session.setPersistent(USER_COMPANY_INFO, userInfo)
	}
})
Template.profileCompanyEdit.onDestroyed(function() {
	updateCompanyInfo()
    //save here
})

Template.profileCompanyEdit.events({
//behaviour
    'keydown #name, keydown #city, keydown #street, keydown #country': function(event) {
    if ((27 === event.which) || (13 === event.which)) {
        event.preventDefault();
        event.target.blur()
    }

  },
  'click #finsihedEditing': function(event) {
  	event.preventDefault();
  	updateCompanyInfo()
  }

})


function updateCompanyInfo() {
	 var name = document.getElementById('name').value;
  	var description = document.getElementById('description').value;
  	var city = document.getElementById('city').value;
  	var street = document.getElementById('street').value;
  	var countryName = Session.get('countryName')
  	var countryCode = Session.get('countryCode')

  	  	var companyObj = {
  	  		name: name,
  	  		description: description,
  	  		location: {
  	  			city: city,
  	  			countryName: countryName,
  	  			countryCode: countryCode,
  	  			street: street
  	  		}
  	  	}
  	  	console.log(companyObj)

  	  	Meteor.call('updateCompanyInformation', companyObj,
  	  		function(error, result) {
  	  			if(error) {
  	  				console.log(error)
  	  			}
  	  			else {
  	  				Router.go('profilePageCompany')
  	  			}
  	  		})
}

Template.profileCompanyEdit.onRendered(function(){
            /*countries*/
    var countries = [ 
        {value: "Afghanistan", data: "AF"}, 
        {value: "Åland Islands", data: "AX"}, 
        {value: "Albania", data: "AL"}, 
        {value: "Algeria", data: "DZ"}, 
        {value: "American Samoa", data: "AS"}, 
        {value: "AndorrA", data: "AD"}, 
        {value: "Angola", data: "AO"}, 
        {value: "Anguilla", data: "AI"}, 
        {value: "Antarctica", data: "AQ"}, 
        {value: "Antigua and Barbuda", data: "AG"}, 
        {value: "Argentina", data: "AR"}, 
        {value: "Armenia", data: "AM"}, 
        {value: "Aruba", data: "AW"}, 
        {value: "Australia", data: "AU"}, 
        {value: "Austria", data: "AT"}, 
        {value: "Azerbaijan", data: "AZ"}, 
        {value: "Bahamas", data: "BS"}, 
        {value: "Bahrain", data: "BH"}, 
        {value: "Bangladesh", data: "BD"}, 
        {value: "Barbados", data: "BB"}, 
        {value: "Belarus", data: "BY"}, 
        {value: "Belgium", data: "BE"}, 
        {value: "Belize", data: "BZ"}, 
        {value: "Benin", data: "BJ"}, 
        {value: "Bermuda", data: "BM"}, 
        {value: "Bhutan", data: "BT"}, 
        {value: "Bolivia", data: "BO"}, 
        {value: "Bosnia and Herzegovina", data: "BA"}, 
        {value: "Botswana", data: "BW"}, 
        {value: "Bouvet Island", data: "BV"}, 
        {value: "Brazil", data: "BR"}, 
        {value: "British Indian Ocean Territory", data: "IO"}, 
        {value: "Brunei Darussalam", data: "BN"}, 
        {value: "Bulgaria", data: "BG"}, 
        {value: "Burkina Faso", data: "BF"}, 
        {value: "Burundi", data: "BI"}, 
        {value: "Cambodia", data: "KH"}, 
        {value: "Cameroon", data: "CM"}, 
        {value: "Canada", data: "CA"}, 
        {value: "Cape Verde", data: "CV"}, 
        {value: "Cayman Islands", data: "KY"}, 
        {value: "Central African Republic", data: "CF"}, 
        {value: "Chad", data: "TD"}, 
        {value: "Chile", data: "CL"}, 
        {value: "China", data: "CN"}, 
        {value: "Christmas Island", data: "CX"}, 
        {value: "Cocos (Keeling) Islands", data: "CC"}, 
        {value: "Colombia", data: "CO"}, 
        {value: "Comoros", data: "KM"}, 
        {value: "Congo", data: "CG"}, 
        {value: "Congo, The Democratic Republic of the", data: "CD"}, 
        {value: "Cook Islands", data: "CK"}, 
        {value: "Costa Rica", data: "CR"}, 
        {value: "Cote D\"Ivoire", data: "CI"}, 
        {value: "Croatia", data: "HR"}, 
        {value: "Cuba", data: "CU"}, 
        {value: "Cyprus", data: "CY"}, 
        {value: "Czech Republic", data: "CZ"}, 
        {value: "Denmark", data: "DK"}, 
        {value: "Djibouti", data: "DJ"}, 
        {value: "Dominica", data: "DM"}, 
        {value: "Dominican Republic", data: "DO"}, 
        {value: "Ecuador", data: "EC"}, 
        {value: "Egypt", data: "EG"}, 
        {value: "El Salvador", data: "SV"}, 
        {value: "Equatorial Guinea", data: "GQ"}, 
        {value: "Eritrea", data: "ER"}, 
        {value: "Estonia", data: "EE"}, 
        {value: "Ethiopia", data: "ET"}, 
        {value: "Falkland Islands (Malvinas)", data: "FK"}, 
        {value: "Faroe Islands", data: "FO"}, 
        {value: "Fiji", data: "FJ"}, 
        {value: "Finland", data: "FI"}, 
        {value: "France", data: "FR"}, 
        {value: "French Guiana", data: "GF"}, 
        {value: "French Polynesia", data: "PF"}, 
        {value: "French Southern Territories", data: "TF"}, 
        {value: "Gabon", data: "GA"}, 
        {value: "Gambia", data: "GM"}, 
        {value: "Georgia", data: "GE"}, 
        {value: "Germany", data: "DE"}, 
        {value: "Ghana", data: "GH"}, 
        {value: "Gibraltar", data: "GI"}, 
        {value: "Greece", data: "GR"}, 
        {value: "Greenland", data: "GL"}, 
        {value: "Grenada", data: "GD"}, 
        {value: "Guadeloupe", data: "GP"}, 
        {value: "Guam", data: "GU"}, 
        {value: "Guatemala", data: "GT"}, 
        {value: "Guernsey", data: "GG"}, 
        {value: "Guinea", data: "GN"}, 
        {value: "Guinea-Bissau", data: "GW"}, 
        {value: "Guyana", data: "GY"}, 
        {value: "Haiti", data: "HT"}, 
        {value: "Heard Island and Mcdonald Islands", data: "HM"}, 
        {value: "Holy See (Vatican City State)", data: "VA"}, 
        {value: "Honduras", data: "HN"}, 
        {value: "Hong Kong", data: "HK"}, 
        {value: "Hungary", data: "HU"}, 
        {value: "Iceland", data: "IS"}, 
        {value: "India", data: "IN"}, 
        {value: "Indonesia", data: "ID"}, 
        {value: "Iran, Islamic Republic Of", data: "IR"}, 
        {value: "Iraq", data: "IQ"}, 
        {value: "Ireland", data: "IE"}, 
        {value: "Isle of Man", data: "IM"}, 
        {value: "Israel", data: "IL"}, 
        {value: "Italy", data: "IT"}, 
        {value: "Jamaica", data: "JM"}, 
        {value: "Japan", data: "JP"}, 
        {value: "Jersey", data: "JE"}, 
        {value: "Jordan", data: "JO"}, 
        {value: "Kazakhstan", data: "KZ"}, 
        {value: "Kenya", data: "KE"}, 
        {value: "Kiribati", data: "KI"}, 
        {value: "Korea, Democratic People\"S Republic of", data: "KP"}, 
        {value: "Korea, Republic of", data: "KR"}, 
        {value: "Kuwait", data: "KW"}, 
        {value: "Kyrgyzstan", data: "KG"}, 
        {value: "Lao People\"S Democratic Republic", data: "LA"}, 
        {value: "Latvia", data: "LV"}, 
        {value: "Lebanon", data: "LB"}, 
        {value: "Lesotho", data: "LS"}, 
        {value: "Liberia", data: "LR"}, 
        {value: "Libyan Arab Jamahiriya", data: "LY"}, 
        {value: "Liechtenstein", data: "LI"}, 
        {value: "Lithuania", data: "LT"}, 
        {value: "Luxembourg", data: "LU"}, 
        {value: "Macao", data: "MO"}, 
        {value: "Macedonia, The Former Yugoslav Republic of", data: "MK"}, 
        {value: "Madagascar", data: "MG"}, 
        {value: "Malawi", data: "MW"}, 
        {value: "Malaysia", data: "MY"}, 
        {value: "Maldives", data: "MV"}, 
        {value: "Mali", data: "ML"}, 
        {value: "Malta", data: "MT"}, 
        {value: "Marshall Islands", data: "MH"}, 
        {value: "Martinique", data: "MQ"}, 
        {value: "Mauritania", data: "MR"}, 
        {value: "Mauritius", data: "MU"}, 
        {value: "Mayotte", data: "YT"}, 
        {value: "Mexico", data: "MX"}, 
        {value: "Micronesia, Federated States of", data: "FM"}, 
        {value: "Moldova, Republic of", data: "MD"}, 
        {value: "Monaco", data: "MC"}, 
        {value: "Mongolia", data: "MN"}, 
        {value: "Montserrat", data: "MS"}, 
        {value: "Morocco", data: "MA"}, 
        {value: "Mozambique", data: "MZ"}, 
        {value: "Myanmar", data: "MM"}, 
        {value: "Namibia", data: "NA"}, 
        {value: "Nauru", data: "NR"}, 
        {value: "Nepal", data: "NP"}, 
        {value: "Netherlands", data: "NL"}, 
        {value: "Netherlands Antilles", data: "AN"}, 
        {value: "New Caledonia", data: "NC"}, 
        {value: "New Zealand", data: "NZ"}, 
        {value: "Nicaragua", data: "NI"}, 
        {value: "Niger", data: "NE"}, 
        {value: "Nigeria", data: "NG"}, 
        {value: "Niue", data: "NU"}, 
        {value: "Norfolk Island", data: "NF"}, 
        {value: "Northern Mariana Islands", data: "MP"}, 
        {value: "Norway", data: "NO"}, 
        {value: "Oman", data: "OM"}, 
        {value: "Pakistan", data: "PK"}, 
        {value: "Palau", data: "PW"}, 
        {value: "Palestinian Territory, Occupied", data: "PS"}, 
        {value: "Panama", data: "PA"}, 
        {value: "Papua New Guinea", data: "PG"}, 
        {value: "Paraguay", data: "PY"}, 
        {value: "Peru", data: "PE"}, 
        {value: "Philippines", data: "PH"}, 
        {value: "Pitcairn", data: "PN"}, 
        {value: "Poland", data: "PL"}, 
        {value: "Portugal", data: "PT"}, 
        {value: "Puerto Rico", data: "PR"}, 
        {value: "Qatar", data: "QA"}, 
        {value: "Reunion", data: "RE"}, 
        {value: "Romania", data: "RO"}, 
        {value: "Russian Federation", data: "RU"}, 
        {value: "RWANDA", data: "RW"}, 
        {value: "Saint Helena", data: "SH"}, 
        {value: "Saint Kitts and Nevis", data: "KN"}, 
        {value: "Saint Lucia", data: "LC"}, 
        {value: "Saint Pierre and Miquelon", data: "PM"}, 
        {value: "Saint Vincent and the Grenadines", data: "VC"}, 
        {value: "Samoa", data: "WS"}, 
        {value: "San Marino", data: "SM"}, 
        {value: "Sao Tome and Principe", data: "ST"}, 
        {value: "Saudi Arabia", data: "SA"}, 
        {value: "Senegal", data: "SN"}, 
        {value: "Serbia and Montenegro", data: "CS"}, 
        {value: "Seychelles", data: "SC"}, 
        {value: "Sierra Leone", data: "SL"}, 
        {value: "Singapore", data: "SG"}, 
        {value: "Slovakia", data: "SK"}, 
        {value: "Slovenia", data: "SI"}, 
        {value: "Solomon Islands", data: "SB"}, 
        {value: "Somalia", data: "SO"}, 
        {value: "South Africa", data: "ZA"}, 
        {value: "South Georgia and the South Sandwich Islands", data: "GS"}, 
        {value: "Spain", data: "ES"}, 
        {value: "Sri Lanka", data: "LK"}, 
        {value: "Sudan", data: "SD"}, 
        {value: "Surivalue", data: "SR"}, 
        {value: "Svalbard and Jan Mayen", data: "SJ"}, 
        {value: "Swaziland", data: "SZ"}, 
        {value: "Sweden", data: "SE"}, 
        {value: "Switzerland", data: "CH"}, 
        {value: "Syrian Arab Republic", data: "SY"}, 
        {value: "Taiwan, Province of China", data: "TW"}, 
        {value: "Tajikistan", data: "TJ"}, 
        {value: "Tanzania, United Republic of", data: "TZ"}, 
        {value: "Thailand", data: "TH"}, 
        {value: "Timor-Leste", data: "TL"}, 
        {value: "Togo", data: "TG"}, 
        {value: "Tokelau", data: "TK"}, 
        {value: "Tonga", data: "TO"}, 
        {value: "Trinidad and Tobago", data: "TT"}, 
        {value: "Tunisia", data: "TN"}, 
        {value: "Turkey", data: "TR"}, 
        {value: "Turkmenistan", data: "TM"}, 
        {value: "Turks and Caicos Islands", data: "TC"}, 
        {value: "Tuvalu", data: "TV"}, 
        {value: "Uganda", data: "UG"}, 
        {value: "Ukraine", data: "UA"}, 
        {value: "United Arab Emirates", data: "AE"}, 
        {value: "United Kingdom", data: "GB"}, 
        {value: "United States", data: "US"}, 
        {value: "United States Minor Outlying Islands", data: "UM"}, 
        {value: "Uruguay", data: "UY"}, 
        {value: "Uzbekistan", data: "UZ"}, 
        {value: "Vanuatu", data: "VU"}, 
        {value: "Venezuela", data: "VE"}, 
        {value: "Viet Nam", data: "VN"}, 
        {value: "Virgin Islands, British", data: "VG"}, 
        {value: "Virgin Islands, U.S.", data: "VI"}, 
        {value: "Wallis and Futuna", data: "WF"}, 
        {value: "Western Sahara", data: "EH"}, 
        {value: "Yemen", data: "YE"}, 
        {value: "Zambia", data: "ZM"},
        {value: "Zimbabwe", data: "ZW"}];
  $('#country').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {

    	Session.set('countryName', suggestion.value)
        Session.set('countryCode', suggestion.data)
        event.target.blur()


    }
  });
  /*/ countries*/
})
