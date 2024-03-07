<template>
    <div class="section pb-0">
        <div class="container">
            <div class=" col-md-12 col-xs-12 col-sm-12 col-xl-12">
                <div class="box1 col-md-12 col-xs-12 col-sm-12 col-xl-12 text-center">
                    <img src="../assets/images/mentor.png" alt="" class=" mb-5 ">
                    <p class="card-title h3">Devenir mentor ?</p>
                </div>
                <div class="box2 col-md-12 col-xs-12 col-sm-12 col-xl-12 text-center mt-5">
                    <p class="card-title h3 mt-5 p-5">Le mentorat n'est pas seulement une opportunité de donner, mais aussi de grandir. Devenez mentor et cultivez le leadership.</p>
                </div>
            </div>
            <div class="d-flex col-lg-6 col-md-6 col-sm-8 col-xs-2 col-xl-12 mt-5 text-center">
                <div class="b1 col-md-4 col-xs-4 col-sm-4 col-xl-4">
                    <img src="../assets/images/solidarity.svg" alt="" class=" mb-5 ">
                    <p class="card-title h3">Solidarité</p>
                </div>
                <div class="b2 col-md-4 col-xs-4 col-sm-4 col-xl-4">
                    <img src="../assets/images/transfert.svg" alt="" class=" mb-5 ">
                    <p class="card-title h3">Transmission de savoir</p>
                </div>
                <div class="b3 col-md-4 col-xs-4 col-sm-4 col-xl-4">
                    <img src="../assets/images/enrichment.svg" alt="" class=" mb-5 ">
                    <p class="card-title h3">Enrichissement</p>
                </div>
            </div>
        </div>
        <!-- multistep form -->
        <form id="msform" class="">
          <!-- progressbar -->
          <ul id="progressbar">
            <li class="active">Account Setup</li>
            <li>Social Profiles</li>
            <li>Personal Details</li>
          </ul>
          <!-- fieldsets -->
          <fieldset>
            <h2 class="fs-title">Avant de continuer veillez confirmer que</h2>
            <h3 class="fs-subtitle">Vous avez au moins 18 ans</h3>
            <h3 class="fs-subtitle">Vous avez au moins 18 ans</h3>
            <h3 class="fs-subtitle">Vous avez au moins 18 ans</h3>
            <input type="button" name="next" class="next action-button" value="Continuer" />
          </fieldset>
          <fieldset>
            <h2 class="fs-title">Vos conmpétences</h2>
            <h3 class="fs-subtitle">Your presence on the social network</h3>
            <input type="text" name="twitter" placeholder="Twitter" />
            <input type="text" name="facebook" placeholder="Facebook" />
            <input type="text" name="gplus" placeholder="Google Plus" />
            <input type="button" name="previous" class="previous action-button" value="Previous" />
            <input type="button" name="next" class="next action-button" value="Next" />
          </fieldset>
          <fieldset>
            <h2 class="fs-title">Description</h2>
            <h3 class="fs-subtitle">We will never sell it</h3>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea name="address" placeholder="Address"></textarea>
            <input type="button" name="previous" class="previous action-button" value="Previous" />
            <a href="https://twitter.com/GoktepeAtakan" class="submit action-button" target="_top">Submit</a>
          </fieldset>
        </form>
    </div>
</template>

<script>

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

.box2{
    background-color: #75ecac;
    border-radius: 6px;
}
/*basic reset*/
* {margin: 0; padding: 0;}

html {
	height: 100%;
	/*Image only BG fallback*/
	
	/*background = gradient + image pattern combo*/
	background: 
		linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
}

body {
	font-family: montserrat, arial, verdana;
}
/*form styles*/
#msform {
	width: 400px;
	margin: 50px auto;
	text-align: center;
	position: relative;
}
#msform fieldset {
	background: white;
	border: 0 none;
	border-radius: 3px;
	box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
	padding: 20px 30px;
	box-sizing: border-box;
	width: 80%;
	margin: 0 10%;
	
	/*stacking fieldsets above each other*/
	position: relative;
}
/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
	display: none;
}
/*inputs*/
#msform input, #msform textarea {
	padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
}
/*buttons*/
#msform .action-button {
	width: 100px;
	background: #27AE60;
	font-weight: bold;
	color: white;
	border: 0 none;
	border-radius: 1px;
	cursor: pointer;
	padding: 10px;
	margin: 10px 5px;
  text-decoration: none;
  font-size: 14px;
}
#msform .action-button:hover, #msform .action-button:focus {
	box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}
/*headings*/
.fs-title {
	font-size: 15px;
	text-transform: uppercase;
	color: #2C3E50;
	margin-bottom: 10px;
}
.fs-subtitle {
	font-weight: normal;
	font-size: 13px;
	color: #666;
	margin-bottom: 20px;
}
/*progressbar*/
#progressbar {
	margin-bottom: 30px;
	overflow: hidden;
	/*CSS counters to number the steps*/
	counter-reset: step;
}
#progressbar li {
	list-style-type: none;
	color: white;
	text-transform: uppercase;
	font-size: 9px;
	width: 33.33%;
	float: left;
	position: relative;
}
#progressbar li:before {
	content: counter(step);
	counter-increment: step;
	width: 20px;
	line-height: 20px;
	display: block;
	font-size: 10px;
	color: #333;
	background: white;
	border-radius: 3px;
	margin: 0 auto 5px auto;
}
/*progressbar connectors*/
#progressbar li:after {
	content: '';
	width: 100%;
	height: 2px;
	background: white;
	position: absolute;
	left: -50%;
	top: 9px;
	z-index: -1; /*put it behind the numbers*/
}
#progressbar li:first-child:after {
	/*connector not needed before the first step*/
	content: none; 
}
/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before,  #progressbar li.active:after{
	background: #27AE60;
	color: white;
}

</style>