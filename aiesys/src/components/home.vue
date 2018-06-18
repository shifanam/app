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
      <div class="row sec">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4 card1">
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4 card2">
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4 card3">
            </div>
          </div>
        </div>
      </div>
      <div class="row third">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
        </div>
      </div>
      <div class="row fourth">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>D</h3>
                <p></p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3>D</h3>
                <p></p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row fifth">
        <div class="col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h5>s</h5>
                <p></p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h1>S</h1>
                <p></p>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div class="cards">
                <h1>I</h1>
                <p>ppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>
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
  background-color:#06819a;
  background-image: url('../assets/4.jpg');
  margin-top: -1px;
}
.header {
  background-color: #06819a;
  text-decoration: none;
  position:fixed;
  width:100%;
  height:70px;
  margin-top: -60px;
  padding-top: 20px;
  margin-left: 0px;
  background-attachment: fixed;
  background-size: cover;
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
  height:600px;
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
  height: 340px;
}

.card1 {
  background-image: url('../assets/5.jpg');
  height:100px;
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
}

.card1:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.card2 {
  background-image: url('../assets/mac.jpg');
  height:100px;
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
}

.card3 {
  background-image: url('../assets/5.jpg');
  height:100px;
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
}

.cards {
  background-color: #fff;
  text-align: center;
  height:100px;
  width:50px;
  border: #000;
  border-radius: 1em;
  border:0px solid #000;
  border-radius: .1em;
  padding-right: 5%;
  padding-top: 10%;
  padding-left: 19%;
  padding-bottom: 3%;
  float: right;
  color: #000;
  font: 1em sans-serif;
  margin-right: 5%;
  margin-top: 3%;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,0.2);
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
