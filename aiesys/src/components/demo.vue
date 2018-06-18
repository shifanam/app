<template>
  <div class="home">
    <div class="row">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 fst">
          <div class="header">
            <img src="../assets/mainlogo.png">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">CAREERS</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 sec">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="card1"></div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="card2"></div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="card3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 third">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 fourth">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>DREAM</h3>
                <p>We envision ourself as one of the top web services firm that offers a wide range of services tailored to its diverse customer needs. From mobile apps to social media marketing to cyber security services, we have them all.</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>DESIGN</h3>
                <p>We design to attract and engage. Watch your business take a new turn as your brand stands out online and your customers happy with the unique state of the art interface that we design just for you.</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>DEVELOP</h3>
                <p>We at AIESYS have been developing unique, and functional custom web applications with the best of modern designs and technology.Now your business too will skyrocket on revenue, efficiency and branding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12 fifth">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>IT OUTSOURCING</h3>
                <p>Getting a headache expending all your precious time and resources on heavy paperwork and long calculations on repeat? Trust us, never again We at AIESYS enable and empower business all around the world with our IT solutions.</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>SUPPORT</h3>
                <p>We at AIESYS believe in long-term relationships. Though services can be delivered over as a one-time thing, we believe the best outcome is possible with continuous support and integration. We'll be here for you 24/7.</p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>SEO MARKETING</h3>
                <p>With so many companies out there, it's easy to get drowned by competition. But not with AIESYS. We provide the best SEO Marketing for you such that your brand will stand out amongst all others out there. Customers can now easily find you and you can grow your never before.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <p></p>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <p></p>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background-color:#fff;
  margin-top: -1px;
}
.header {
  background-color: #06819a;
  text-decoration: none;
  position:fixed;
  width:100%;
  height:80px;
  margin-top: -60px;
  padding-top: 20px;
  margin-left: 15px;
  background-attachment: fixed;
  background-size: cover;
  z-index: 40;
}
.fst {
  background-image: url('../assets/4.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
background-size: cover;
  text-decoration: none;
  width:100%;
  height:900px;
  margin-top: 0%;
}

.header img {
  float: left;
  padding-left: 10px;
}

ul, li, a{
  color:#fff;
  display: inline;
  margin: 0.5%;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: bold 20px;
  padding-top: 10px;
}

ul, li, a:hover{
  color:#000;
}

.sec {
  background-color: #fff;
  width: 100%;
  height: 320px;
}

.card1 {
  background-image: url('../assets/recent1.jpg');
  height:250px;
  width:350px;
  border: #000;
  border-radius: 1em;
  border:0px solid #000;
  border-radius: .1em;
  padding-right: 5%;
  padding-top: 10%;
  padding-left: 20%;
  padding-bottom: 3%;
  float: right;
  color: #000;
  font: 1em sans-serif;
  margin-right: 5%;
  margin-top: 3%;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.4);
  z-index: 40;
}

.card1:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.card2 {
  background-image: url('../assets/recent2.jpg');
  height:250px;
  width:350px;
  border: #000;
  border-radius: 1em;
  border:0px solid #000;
  border-radius: .1em;
  padding-right: 5%;
  padding-top: 10%;
  padding-left: 20%;
  padding-bottom: 3%;
  float: right;
  color: #000;
  font: 1em sans-serif;
  margin-right: 5%;
  margin-top: 3%;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.4);
  z-index: 40;
}

.card2:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.card3 {
  background-image: url('../assets/recent3.jpg');
  height:250px;
  width:350px;
  border: #000;
  border-radius: 1em;
  border:0px solid #000;
  border-radius: .1em;
  padding-right: 5%;
  padding-top: 10%;
  padding-left: 20%;
  padding-bottom: 3%;
  float: right;
  color: #000;
  font: 1em sans-serif;
  margin-right: 5%;
  margin-top: 3%;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.4);
  z-index: 40;
}

.card3:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.cards {
  background-color: #fff;
  text-align: center;
  height:300px;
  width:300px;
  border: #000;
  border-radius: 1em;
  border:0px solid #000;
  border-radius: .1em;
  padding-right: 5%;
  padding-top: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  float: right;
  color: #000;
  font: 1em sans-serif;
  margin-right: 5%;
  margin-top: 3%;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
  z-index: 40;
}

.cards:hover {
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.4);
}

.cards:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.sec img {
  background-color: none;
  width: 40%;
  height:40%;
  margin-left: 30%;
  opacity:0.5;
  filter: alpha(opacity=5);
}

img:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
}

.third {
  background-image: url('../assets/4.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
background-size: cover;
  text-decoration: none;
  width:100%;
  height:400px;
  margin-top: 0%;
}

.foot {
  background-color: #fff;
  width: 100px;
  height: 300px;
}

.trans {
  background: rgba(76, 175, 80, 0.3);
  width: 100%;
  height: 400px;
}
</style>
