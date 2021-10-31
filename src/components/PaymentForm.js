import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Grid, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
const PaymentForm = () => {
	function onProcessing(e) {
		console.log('Processing', e);
	}
	function onSuccess(e) {
		console.log('Success', e);
	}
	function onError(e) {
		console.log('Error', e);
	}
	const [country, setCountry] = useState('United Kingdom');

	const handleChange = (event) => {
		setCountry(event.target.value);
	};
	const countryList = [
		'Afghanistan',
		'Åland Islands',
		'Albania',
		'Algeria',
		'American Samoa',
		'Andorra',
		'Angola',
		'Anguilla',
		'Antarctica',
		'Antigua and Barbuda',
		'Argentina',
		'Armenia',
		'Aruba',
		'Australia',
		'Austria',
		'Azerbaijan',
		'Bahamas (the)',
		'Bahrain',
		'Bangladesh',
		'Barbados',
		'Belarus',
		'Belgium',
		'Belize',
		'Benin',
		'Bermuda',
		'Bhutan',
		'Bolivia (Plurinational State of)',
		'Bonaire, Sint Eustatius and Saba',
		'Bosnia and Herzegovina',
		'Botswana',
		'Bouvet Island',
		'Brazil',
		'British Indian Ocean Territory (the)',
		'Brunei Darussalam',
		'Bulgaria',
		'Burkina Faso',
		'Burundi',
		'Cabo Verde',
		'Cambodia',
		'Cameroon',
		'Canada',
		'Cayman Islands (the)',
		'Central African Republic (the)',
		'Chad',
		'Chile',
		'China',
		'Christmas Island',
		'Cocos (Keeling) Islands (the)',
		'Colombia',
		'Comoros (the)',
		'Congo (the Democratic Republic of the)',
		'Congo (the)',
		'Cook Islands (the)',
		'Costa Rica',
		'Croatia',
		'Cuba',
		'Curaçao',
		'Cyprus',
		'Czechia',
		"Côte d'Ivoire",
		'Denmark',
		'Djibouti',
		'Dominica',
		'Dominican Republic (the)',
		'Ecuador',
		'Egypt',
		'El Salvador',
		'Equatorial Guinea',
		'Eritrea',
		'Estonia',
		'Eswatini',
		'Ethiopia',
		'Falkland Islands (the) [Malvinas]',
		'Faroe Islands (the)',
		'Fiji',
		'Finland',
		'France',
		'French Guiana',
		'French Polynesia',
		'French Southern Territories (the)',
		'Gabon',
		'Gambia (the)',
		'Georgia',
		'Germany',
		'Ghana',
		'Gibraltar',
		'Greece',
		'Greenland',
		'Grenada',
		'Guadeloupe',
		'Guam',
		'Guatemala',
		'Guernsey',
		'Guinea',
		'Guinea-Bissau',
		'Guyana',
		'Haiti',
		'Heard Island and McDonald Islands',
		'Holy See (the)',
		'Honduras',
		'Hong Kong',
		'Hungary',
		'Iceland',
		'India',
		'Indonesia',
		'Iran (Islamic Republic of)',
		'Iraq',
		'Ireland',
		'Isle of Man',
		'Israel',
		'Italy',
		'Jamaica',
		'Japan',
		'Jersey',
		'Jordan',
		'Kazakhstan',
		'Kenya',
		'Kiribati',
		"Korea (the Democratic People's Republic of)",
		'Korea (the Republic of)',
		'Kuwait',
		'Kyrgyzstan',
		"Lao People's Democratic Republic (the)",
		'Latvia',
		'Lebanon',
		'Lesotho',
		'Liberia',
		'Libya',
		'Liechtenstein',
		'Lithuania',
		'Luxembourg',
		'Macao',
		'Madagascar',
		'Malawi',
		'Malaysia',
		'Maldives',
		'Mali',
		'Malta',
		'Marshall Islands (the)',
		'Martinique',
		'Mauritania',
		'Mauritius',
		'Mayotte',
		'Mexico',
		'Micronesia (Federated States of)',
		'Moldova (the Republic of)',
		'Monaco',
		'Mongolia',
		'Montenegro',
		'Montserrat',
		'Morocco',
		'Mozambique',
		'Myanmar',
		'Namibia',
		'Nauru',
		'Nepal',
		'Netherlands (the)',
		'New Caledonia',
		'New Zealand',
		'Nicaragua',
		'Niger (the)',
		'Nigeria',
		'Niue',
		'Norfolk Island',
		'Northern Mariana Islands (the)',
		'Norway',
		'Oman',
		'Pakistan',
		'Palau',
		'Palestine, State of',
		'Panama',
		'Papua New Guinea',
		'Paraguay',
		'Peru',
		'Philippines (the)',
		'Pitcairn',
		'Poland',
		'Portugal',
		'Puerto Rico',
		'Qatar',
		'Republic of North Macedonia',
		'Romania',
		'Russian Federation (the)',
		'Rwanda',
		'Réunion',
		'Saint Barthélemy',
		'Saint Helena, Ascension and Tristan da Cunha',
		'Saint Kitts and Nevis',
		'Saint Lucia',
		'Saint Martin (French part)',
		'Saint Pierre and Miquelon',
		'Saint Vincent and the Grenadines',
		'Samoa',
		'San Marino',
		'Sao Tome and Principe',
		'Saudi Arabia',
		'Senegal',
		'Serbia',
		'Seychelles',
		'Sierra Leone',
		'Singapore',
		'Sint Maarten (Dutch part)',
		'Slovakia',
		'Slovenia',
		'Solomon Islands',
		'Somalia',
		'South Africa',
		'South Georgia and the South Sandwich Islands',
		'South Sudan',
		'Spain',
		'Sri Lanka',
		'Sudan (the)',
		'Suriname',
		'Svalbard and Jan Mayen',
		'Sweden',
		'Switzerland',
		'Syrian Arab Republic',
		'Taiwan (Province of China)',
		'Tajikistan',
		'Tanzania, United Republic of',
		'Thailand',
		'Timor-Leste',
		'Togo',
		'Tokelau',
		'Tonga',
		'Trinidad and Tobago',
		'Tunisia',
		'Turkey',
		'Turkmenistan',
		'Turks and Caicos Islands (the)',
		'Tuvalu',
		'Uganda',
		'Ukraine',
		'United Arab Emirates (the)',
		'United Kingdom of Great Britain and Northern Ireland (the)',
		'United States Minor Outlying Islands (the)',
		'United States of America (the)',
		'Uruguay',
		'Uzbekistan',
		'Vanuatu',
		'Venezuela (Bolivarian Republic of)',
		'Viet Nam',
		'Virgin Islands (British)',
		'Virgin Islands (U.S.)',
		'Wallis and Futuna',
		'Western Sahara',
		'Yemen',
		'Zambia',
		'Zimbabwe'
	];
	return (
		<Box
			sx={{
				padding: '20px',
				display: 'flex',
				flexDirection: 'column',
				/*! height: 100%; */ justifyContent: 'center',
				alignContent: 'space-evenly',
				gap: '20px'
			}}
		>
			{/* <CreditCard label="Card" /> */}

			<TextField
				size="small"
				label="Email"
				color="primary"
				autoFocusrequired
				required
			/>

			<TextField size="small" label="Credit card" color="primary" required />
			<Box display="flex" sx={{ gap: '20px' }}>
				<TextField
					size="small"
					// label="Email"
					color="primary"
					required
					autoFocus
					placeholder="MM/YY"
				/>
				<TextField
					size="small"
					// label="CVC"
					color="primary"
					required
					placeholder="CVC"
				/>
			</Box>

			<TextField
				size="small"
				label="Name on card"
				color="primary"
				autoFocus
				required
				placeholder="Name on card"
			/>
			<TextField
				size="small"
				label="Country or region"
				color="primary"
				autoFocus
				required
				select
				value={country}
				onChange={handleChange}
				placeholder="MM/YY"
			>
				{countryList.map((country) => (
					<MenuItem key={country} value={country}>
						{country}
					</MenuItem>
				))}
			</TextField>
			<TextField
				size="small"
				label="ZIP"
				color="primary"
				autoFocus
				required
				placeholder="ZIP"
			/>
			<Link to="/dashboard" style={{ textDecoration: 'none' }}>
				<Button variant="contained" fullWidth>
					Pay
				</Button>
			</Link>
		</Box>

		// 	{/* <Group>
		// 		<Input label="Email" id="email" placeholder="example@email.com" />
		// 		<Input label="Phone" id="phone" placeholder="(123) 456-7890" />
		// 		<Input
		// 			label="Street"
		// 			id="street"
		// 			placeholder="Card billing street"
		// 			required
		// 		/>
		// 		<Input
		// 			label="Zip"
		// 			id="zip"
		// 			placeholder="Card billing zip code"
		// 			required
		// 		/>
		// 		<Input label="Custom 1" id="custom_1" placeholder="Custom 1" />
		// 		<Input
		// 			label="Long Custom text example"
		// 			id="custom_2"
		// 			placeholder="Custom 2"
		// 		/>
		// 	</Group>
		// 	<Button label="PayScript $25" />
		// </Form> */}
	);
};

export default PaymentForm;
