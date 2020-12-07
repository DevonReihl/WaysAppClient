import React from 'react';
export default class SelectCountries extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="country">Country:*</label>
        <select
          className="country-menu"
          onChange={(e) => this.props.handleSelectCountries(e)}
          name="country"
          id="country"
        >
          <option>United States, us</option>
          <option>Afghanistan, af</option>
          <option>Albania, al</option>
          <option>Algeria, dz</option>
          <option>American Samoa, as</option>
          <option>Andorra, ad</option>
          <option>Angola, ao</option>
          <option>Anguilla, ai</option>
          <option>Antarctica, aq</option>
          <option>Antigua and Barbuda, ag</option>
          <option>Argentina, ar</option>
          <option>Armenia, am</option>
          <option>Aruba, aw</option>
          <option>Ausoptionalia, au</option>
          <option>Ausoptionia, at</option>
          <option>Azerbaijan, az</option>
          <option>Bahamas, bs</option>
          <option>Bahrain, bh</option>
          <option>Bangladesh, bd</option>
          <option>Barbados, bb</option>
          <option>Belarus, by</option>
          <option>Belgium, be</option>
          <option>Belize, bz</option>
          <option>Benin, bj</option>
          <option>Bermuda, bm</option>
          <option>Bhutan, bt</option>
          <option>Bolivia, bo</option>
          <option>Bosnia and Herzegovina, ba</option>
          <option>Botswana, bw</option>
          <option>Bouvet Island, bv</option>
          <option>Brazil, br</option>
          <option>British Indian Ocean Territory, io</option>
          <option>Brunei Darussalam, bn</option>
          <option>Bulgaria, bg</option>
          <option>Burkina Faso, bf</option>
          <option>Burundi, bi</option>
          <option>Cambodia, kh</option>
          <option>Cameroon, cm</option>
          <option>Canada, ca</option>
          <option>Cape Verde, cv</option>
          <option>Cayman Islands, ky</option>
          <option>Cenoptional African Republic, cf</option>
          <option>Chad s,pan</option>
          <option>Chile, cl</option>
          <option>China, cn</option>
          <option>Christmas Island, cx</option>
          <option>Cocos (Keeling) Islands, cc</option>
          <option>Colombia, co</option>
          <option>Comoros, km</option>
          <option>Congo, cg</option>
          <option>Congo, the Democratic Republic of the, cd</option>
          <option>Cook Islands, ck</option>
          <option>Costa Rica, cr</option>
          <option>Cote D'ivoire, ci</option>
          <option>Croatia, hr</option>
          <option>Cuba, cu</option>
          <option>Cyprus, cy</option>
          <option>Czech Republic, cz</option>
          <option>Denmark, dk</option>
          <option>Djibouti, dj</option>
          <option>Dominica, dm</option>
          <option>Dominican Republic, do</option>
          <option>Ecuador, ec</option>
          <option>Egypt, eg</option>
          <option>El Salvador, sv</option>
          <option>Equatorial Guinea, gq</option>
          <option>Erioptionea, er</option>
          <option>Estonia, ee</option>
          <option>Ethiopia, et</option>
          <option>Falkland Islands (Malvinas), fk</option>
          <option>Faroe Islands, fo</option>
          <option>Fiji, fj</option>
          <option>Finland, fi</option>
          <option>France, fr</option>
          <option>French Guiana, gf</option>
          <option>French Polynesia, pf</option>
          <option>French Southern Territories, tf</option>
          <option>Gabon, ga</option>
          <option>Gambia, gm</option>
          <option>Georgia, ge</option>
          <option>Germany, de</option>
          <option>Ghana, gh</option>
          <option>Gibraltar, gi</option>
          <option>Greece, gr</option>
          <option>Greenland, gl</option>
          <option>Grenada, gd</option>
          <option>Guadeloupe, gp</option>
          <option>Guam, gu</option>
          <option>Guatemala, gt</option>
          <option>Guinea, gn</option>
          <option>Guinea-Bissau, gw</option>
          <option>Guyana, gy</option>
          <option>Haiti, ht</option>
          <option>Heard Island and Mcdonald Islands, hm</option>
          <option>Holy See (Vatican City State), va</option>
          <option>Honduras, hn</option>
          <option>Hong Kong, hk</option>
          <option>Hungary, hu</option>
          <option>Iceland, is</option>
          <option>India, in</option>
          <option>Indonesia, id</option>
          <option>Iran, Islamic Republic of, ir</option>
          <option>Iraq, iq</option>
          <option>Ireland, ie</option>
          <option>Israel, il</option>
          <option>Italy, it</option>
          <option>Jamaica, jm</option>
          <option>Japan, jp</option>
          <option>Jordan, jo</option>
          <option>Kazakhstan, kz</option>
          <option>Kenya, ke</option>
          <option>Kiribati, ki</option>
          <option>Korea, Democratic People's Republic of, kp</option>
          <option>Korea, Republic of, kr</option>
          <option>Kuwait, kw</option>
          <option>Kyrgyzstan, kg</option>
          <option>"Lao People's Democratic Republic", la</option>
          <option>Latvia, lv</option>
          <option>Lebanon, lb</option>
          <option>Lesotho, ls</option>
          <option>Liberia, lr</option>
          <option>Libyan Arab Jamahiriya, ly</option>
          <option>Liechtenstein, li</option>
          <option>Lithuania, lt</option>
          <option>Luxembourg, lu</option>
          <option>Macao, mo</option>
          <option>Macedonia, the Former Yugosalv Republic of, mk</option>
          <option>Madagascar, mg</option>
          <option>Malawi, mw</option>
          <option>Malaysia, my</option>
          <option>Maldives, mv</option>
          <option>Mali, ml</option>
          <option>Malta, mt</option>
          <option>Marshall Islands, mh</option>
          <option>Martinique, mq</option>
          <option>Mauritania, mr</option>
          <option>Mauritius, mu</option>
          <option>Mayotte, yt</option>
          <option>Mexico, mx</option>
          <option>Micronesia, Federated States of, fm</option>
          <option>Moldova, Republic of, md</option>
          <option>Monaco, mc</option>
          <option>Mongolia, mn</option>
          <option>Montserrat, ms</option>
          <option>Morocco, ma</option>
          <option>Mozambique, mz</option>
          <option>Myanmar, mm</option>
          <option>Namibia, na</option>
          <option>Nauru, nr</option>
          <option>Nepal, np</option>
          <option>Netherlands, nl</option>
          <option>Netherlands Antilles, an</option>
          <option>New Caledonia, nc</option>
          <option>New Zealand, nz</option>
          <option>Nicaragua, ni</option>
          <option>Niger, ne</option>
          <option>Nigeria, ng</option>
          <option>Niue, nu</option>
          <option>Norfolk Island, nf</option>
          <option>Northern Mariana Islands, mp</option>
          <option>Norway, no</option>
          <option>Oman, om</option>
          <option>Pakistan, pk</option>
          <option>Palau, pw</option>
          <option>Palestinian Territory, Occupied, ps</option>
          <option>Panama, pa</option>
          <option>Papua New Guinea, pg</option>
          <option>Paraguay, py</option>
          <option>Peru, pe</option>
          <option>Philippines, ph</option>
          <option>Pitcairn, pn</option>
          <option>Poland, pl</option>
          <option>Portugal, pt</option>
          <option>Puerto Rico, pr</option>
          <option>Qatar, qa</option>
          <option>Reunion, re</option>
          <option>Romania, ro</option>
          <option>Russian Federation, ru</option>
          <option>Rwanda, rw</option>
          <option>Saint Helena, sh</option>
          <option>Saint Kitts and Nevis, kn</option>
          <option>Saint Lucia, lc</option>
          <option>Saint Pierre and Miquelon, pm</option>
          <option>Saint Vincent and the Grenadines, vc</option>
          <option>Samoa, ws</option>
          <option>San Marino, sm</option>
          <option>Sao Tome and Principe, st</option>
          <option>Saudi Arabia, sa</option>
          <option>Senegal, sn</option>
          <option>Serbia and Montenegro, cs</option>
          <option>Seychelles, sc</option>
          <option>Sierra Leone, sl</option>
          <option>Singapore, sg</option>
          <option>Slovakia, sk</option>
          <option>Slovenia, si</option>
          <option>Solomon Islands, sb</option>
          <option>Somalia, so</option>
          <option>South Africa, za</option>
          <option>South Georgia and the South Sandwich Islands, gs</option>
          <option>Spain, es</option>
          <option>Sri Lanka, lk</option>
          <option>Sudan, sd</option>
          <option>Suriname, sr</option>
          <option>Svalbard and Jan Mayen, sj</option>
          <option>Swaziland, sz</option>
          <option>Sweden, se</option>
          <option>Switzerland, ch</option>
          <option>Syrian Arab Republic, sy</option>
          <option>Taiwan, Province of China, tw</option>
          <option>Tajikistan, tj</option>
          <option>Tanzania, United Republic of, tz</option>
          <option>Thailand, th</option>
          <option>Timor-Leste, tl</option>
          <option>Togo, tg</option>
          <option>Tokelau, tk</option>
          <option>Tonga, to</option>
          <option>optioninidad and Tobago, tt</option>
          <option>Tunisia, tn</option>
          <option>Turkey opt,ion</option>
          <option>Turkmenistan, tm</option>
          <option>Turks and Caicos Islands, tc</option>
          <option>Tuvalu, tv</option>
          <option>Uganda, ug</option>
          <option>Ukraine, ua</option>
          <option>United Arab Emirates, ae</option>
          <option>United Kingdom, uk</option>
          <option>United States Minor Outlying Islands, um</option>
          <option>Uruguay, uy</option>
          <option>Uzbekistan, uz</option>
          <option>Vanuatu, vu</option>
          <option>Venezuela, ve</option>
          <option>Viet Nam, vn</option>
          <option>Virgin Islands, British, vg</option>
          <option>Virgin Islands, U.S., vi</option>
          <option>Wallis and Futuna, wf</option>
          <option>Western Sahara, eh</option>
          <option>Yemen, ye</option>
          <option>Zambia, zm</option>
          <option>Zimbabwe, zw</option>
        </select>
      </>
    );
  }
}
