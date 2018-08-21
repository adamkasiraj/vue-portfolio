 <template>
 	<section id="hero" class="section intro-section">
		<div class="overlay"></div><!--Image Overlay-->
		<div class="intro-main">
			<div class="container">
				<div class="row">
					<div class="col-12 col-sm-8 col-md-6 col-lg-5 ml-auto text-center">

						<div class="intro-text">
							<!--Person Intro-->
							<h1 class="title-brand person-name"><span class="thin">Adam</span>Kasiraj</h1>
							<!--Person Job Title-->
							<h4 class="job-title thin">Web Developer</h4>
						</div>
					</div>
				</div>
			</div>
					
		</div>
	</section>
</template>	

<script>
export default {
	mounted: 
		function () {
	  		this.$nextTick(function () {
	  			document.addEventListener('DOMContentLoaded', function () {
				  particleground(document.getElementById('hero'), {
					dotColor: '#fff',
					lineColor: '#fff',
					density: 10000,
				  });
				}, false);
	  		});
		} 

}
	
</script>

<style lang="scss" scoped>

h1 {
	font-size:3.75rem;
}
.intro-section {
	height: 100vh;
	background-size:cover;
	background-position:center center;
	background-repeat:no-repeat;
	position:relative;
	background-image:url('/static/austin-xs.jpg');

	.intro-main {
		position: absolute;
		width: 100%;
		top: 60%;
		transform: translate3d(0,-60%,0);
		z-index:15;

		.intro-text {
			&:before {
				left:10px;
			}
			&:after {
				right: 10px;
			}
			&:before,
			&:after {
				content: "";
				height: 5px;
				width: 20px;
				position: absolute;
				background: #fff;
				top: 50%;
				transform: translate3d(0,-50%,0);
				-moz-transform: translate3d(0,-50%,0);
				-webkit-transform: translate3d(0,-50%,0);
			}
		}
	}
}

.overlay{
	position:absolute;
	height:100%;
	width:100%;
	background:rgba(0,0,0,.5);
	top:0;
}
@media (min-width:768px) {
	.intro-section {
		background-image:url('/static/austin.jpg');
	}
}


</style>