 <template>
 	<div class="container-fluid bg-light py-5 text-dark">
			<!--Page Content-->
			<div class="row contact-content justify-content-center py-5">
				<div class="col-12 col-md-6 contact-detail py-lg-5">
					<div class="row py-xl-5">
						<!--Single Contact Info-->
						<div class="col-12 col-sm-6 single-contact-detail">
							<div class="header">
								<a href="mailto:kasiraj.adam@gmail.com"><i class="fa fa-envelope"></i></a>
								<h5>EMAIL</h5>
							</div>
							<p>kasiraj.adam@gmail.com</p>
						</div>
						<!--Single Contact Info-->
						<div class="col-12 col-sm-6 single-contact-detail">
							<div class="header">
								<i class="fa fa-globe"></i>
								<h5>WEBSITE</h5>
							</div>
							<p>adamkasiraj.com</p>
						</div>
						<!--Single Contact Info-->
						<div class="col-12 col-sm-6 single-contact-detail">
							<div class="header">
								<a href="https://codepen.io/adamkasiraj"><i class="fa fa-codepen"></i></a>
								<h5>CODEPEN</h5>
							</div>
							<p>codepen.io/adamkasiraj</p>
						</div>
						<!--Single Contact Info-->
						<div class="col-12 col-sm-6 single-contact-detail">
							<div class="header">
								<a href="https://github.com/adamkasiraj"><i class="fa fa-github"></i></a>
								<h5>GITHUB</h5>
							</div>
							<p>github.com/adamkasiraj</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	
</template>

<style lang="scss" scoped>
.single-contact-detail{
	margin-bottom:30px;
	text-align:center;
}
.single-contact-detail .header{
	cursor:pointer;
}
.single-contact-detail .header i{
	font-size:36px;
	transition:.4s;
	color: #343a40;
}
.single-contact-detail:hover .header i{
	transform: translate3d(0px,-20px,0);
	-moz-transform: translate3d(0px,-20px,0);
	-webkit-transform: translate3d(0px,-20px,0);
}
.single-contact-detail .header h5{
	letter-spacing: 1.4px;
}
.single-contact-detail p{
	color:#282528;
	font-weight:400;
	line-height:30px;
	margin-top:0px;
}
</style>