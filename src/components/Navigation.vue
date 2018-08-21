 <template>
 	<!--Site Navigation Start-->

	<nav class="navbar navbar-expand-lg fixed-top py-3" role="navigation">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggler text-white" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			<span class="sr-only">Toggle navigation</span>
			<i class="fa fa-bars"></i>
			</button>
			<!-- Your Logo Here-->
			<a href="" class="navbar-brand">
				<h1 class="title-brand"><span class="thin">Adam</span>Kasiraj</h1>
			</a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav ml-auto" id="nav">
				<li class="current d-none"><a href="#home" class="nav-link text-white">HOME</a></li>			
				<li style="display:none"><a href="#projects">PORTFOLIO</a></li>
				<li><a class="nav-link text-white d-none" href="#contact">CONTACT</a></li>
				<li><a class="nav-link text-white" href="https://www.linkedin.com/in/adamkasiraj/" title="Linked In" target="_blank"><i class="fa fa-linkedin"></i></a></li>
				<li><a class="nav-link text-white" href="https://codepen.io/adamkasiraj/" title="CodePen" target="_blank"><i class="fa fa-codepen"></i></a></li>
				<li><a class="nav-link text-white" href="https://github.com/adamkasiraj" title="Github" target="_blank"><i class="fa fa-github"></i></a></li>
			</ul>
		</div>
	</nav>


	<!--Site Navigation End-->
</template>	

<style lang="scss" scoped>
.navbar {
	transition:padding 0.6s ease;

	&.affix {
		padding-top: 0.2em !important;
		padding-bottom: 0.2em !important;
		background-color: #343a40;

		.title-brand {
			opacity: 1;
		}
	}
	
	.title-brand {
		color: #fff;
		font-size:30px;
		transition: opacity .4s ease;
		opacity: 0;
	}
}

</style>

<script>
export default {
	mounted: 
		function () {
	  		$(window).scroll(function() {
	  			$(".project-container").isotope({
						itemSelector: '.project-item'
					}); 
			  /* affix after scrolling 100px */
			  if ($(document).scrollTop() > 300) {
			    $('.navbar').addClass('affix');
			  } else {
			    $('.navbar').removeClass('affix');
			  }
			});
		} 
}
	
</script>