 <template>
 	<div class="container-fluid bg-dark py-5">
		
		<ul class="filter-list mb-3 justify-content-center">
					<li data-filter="*" class="menu-item active"><a href="#" class="menu-link">All</a></li>
					<li class="menu-item" data-filter=".webdev"><a href="#" class="menu-link">Web Dev</a></li>
					<li class="menu-item" data-filter=".websites"><a href="#" class="menu-link"> Websites</a></li>
					<li class="menu-item" data-filter=".apps"><a href="#" class="menu-link"> Apps & Plug-ins</a></li>
					<li class="menu-item" data-filter=".wordpress"><a href="#" class="menu-link"> Wordpress</a></li>
					<li class="menu-item" data-filter=".graphics"><a href="#" class="menu-link"> Graphics</a></li>
				</ul>
			
	 			<div class="project-container">
	 				<div v-for="project in projects" :key="project.id"  :class="project.category" v-on:click="modal(project, $event)" >
	 					<img class="card-img-top rounded-0" :src="project.image" />
					</div>
				</div>

		<div id="myNav" class="modalOverlay text-dark">

			<!-- Button to close the overlay navigation -->
  			<div class="closebtn" v-on:click="closeModal">&times;</div>

  			<div class="container-fluid pt-5">
  				<div class="container pt-xl-5">
  					<div class="row">
  						<div class="col-12 col-lg-8 mb-3"> 
  							<img class="img-fluid mb-3 border" :src="image" />
						</div>		
  						<div class="col-12 col-lg-4"> 
  							<div class="bg-dark text-white p-3">
  								<p>{{ title }}</p>
					          	<p> <p class="mb-0">Tech Stack:</p> <div class="border p-1 mr-2 d-inline-block small mb-2" v-for="tech in techstack"> {{ tech }}</div> </p>
					          	<p>{{ description }}</p>
					          	<a v-if="demo" :href="demo" target="_blank" class="btn btn-primary btn-small btn-block"> See Demo </a>
  							</div>
						</div>	
					</div>
				</div>
			</div>			

		</div>
	</div>
	
</template>



<script>
export default {
	name: 'SectionPortfolio',
	data () {
		return {
			title: '',
			description: '',
			price: '',
			image: '',
			techstack: '',
			demo: '',
				projects: [
					{ 	
					id: 0,
					title: 'Vue.js Bill Murray Random Image Generator',
					techstack: ['Vue.js', 'Bootstrap', 'Javascript', 'HTML', 'SCSS', 'CSS'],
					description: 'Developed this widget using Vue.js that generates a random Bill Murray photo based on user input.',
					category: ['project-item', 'apps', 'webdev'],
					image: '/static/slide-bill-murray.jpg',
					demo: 'http://adamkasiraj.com/vuejs-bill-murray/'

				},
				{
					id: 1, 
					title: 'ReactJS - Generic Calculator',
					techstack: ['React.js', 'Bootstrap 4', 'Javascript', 'HTML', 'CSS'],
					description: 'This basic application will make mathmatical calculations based on user input.',
					category: ['project-item', 'apps', 'webdev'],
					image: '/static/slide-react-calculator.jpg',
					demo: 'http://adamkasiraj.com/react-calculator/'
				},
				{ 
					id: 2,	
					title: 'AngularJS - To Do App',
					techstack: ['Angular.js 6', 'Bootstrap 4', 'Javascript', 'Typescript', 'HTML', 'SCSS', 'CSS'],
					description: 'Using the newest version of Angular, developed this prototype to-do app.',
					category: ['project-item', 'apps', 'webdev'],
					image: '/static/slide-to-do.jpg',
					demo: 'http://adamkasiraj.com/to-do-app/'

				},
				{ 	
					title: 'adamkasiraj.com',
					techstack: ['Vue.js', 'Bootstrap 4', 'Javascript', 'Isotope', 'ParticleJS', 'HTML', 'SCSS', 'CSS'],
					description: 'This portfolio site was built using Vue.JS. ParticleJS was used for the hero image, and isotope.js for the filtering and sorting.',
					category: ['project-item', 'websites', 'webdev'],
					image: '/static/slide-adamkasiraj.jpg',
					demo: 'http://adamkasiraj.com/'

				},
				{ 
					title: 'Bitcoin Tracker',
					techstack: ['Vue.js', 'Bootstrap 3', 'Javascript', 'HTML', 'SCSS', 'CSS'],
					description: 'Using the blockchain.info web service, this app shows updated bitcoin prices in a variety of currencies.',
					category: ['project-item', 'apps', 'webdev'],
					image: '/static/slide-bitcoin.jpg',
					demo: 'http://adamkasiraj.com/vue-bitcoin/'

				},
				{
					id: 3, 
					title: 'Hostway - Registration Tracker',
					techstack: ['Javascript', 'PHP', 'Wordpress', 'Pardot', 'Bootstrap 4', 'HTML', 'SCSS', 'CSS'],
					description: 'A customer will register for one of our upcoming events using a Pardot (marketing automation tool) web form. This application is used as in internal resource and tracks event registrations in realtime utilizing the Pardot API. This was developed as wordpress plug-in so that our campaigns team could update upcoming events in the tracker using the Wordpress CMS. Note - Names in the screenshot have been intentionally blurred.' ,
					category: ['project-item', 'wordpress', 'webdev', 'apps'],
					image: '/static/slide-hw-tracker.jpg',

				},
				{
					id: 4, 
					title: 'AngularJS Front End, Wordpress Back End',
					techstack: ['Angular.js 1', 'PHP', 'Wordpress', 'HTML', 'CSS'],
					description: 'This is a Wordpress headless CMS demo. It utilizes Wordpress as a CMS and displays posts utilizing the Wordpress API and an AngularJS front-end' ,
					category: ['project-item', 'wordpress', 'webdev', 'apps', ],
					image: '/static/slide-angular.jpg',
					demo: 'http://adamkasiraj.com/angular-wordpress/'

				},
				{
					id: 5, 
					title: 'Packery Builder',
					techstack: ['Javascript', 'Wordpress', 'jQuery', 'PackeryJS', 'HTML', 'SCSS', 'CSS'],
					description: 'A wordpress page template that allows articles to be featured in a responsive packery layout.' ,
					category: ['project-item', 'wordpress', 'webdev', 'apps', ],
					image: '/static/slide-packery.jpg',

				},
				{
					id: 6, 
					title: 'Product Compare',
					techstack: ['Javascript', 'jQuery', 'Demandware', 'HTML', 'SCSS', 'CSS'],
					description: 'A responsive widget to quickly compare product specs in an e-commerce store.',
					category: ['project-item', 'webdev', 'apps'],
					image: '/static/slide-compare.jpg',

				},
				{
					id: 7, 
					title: 'Recent Orders Map',
					techstack: ['Javascript', 'jQuery', 'Google Maps API', 'Demandware'],
					description: 'A realtime map that tracks the most recent orders in realtime for 5 different e-commerce sites',
					category: ['project-item', 'apps', 'webdev',],
					image: '/static/slide-recent-orders.jpg'
				},
				{
					id: 8, 
					title: 'hostway.com',
					techstack: ['Wordpress', 'PHP', 'Javascript', 'Bootstrap 4', 'HTML', 'SCSS', 'CSS'],
					description: 'Re-developed and re-architechted the corporate website for Hostway Services Inc. with a custom Wordpress theme',
					category: ['project-item', 'webdev', 'websites'],
					image: '/static/slide-hostway.jpg'
				},
				{
					id: 9, 
					title: 'Commission Calculator',
					techstack: ['Javascript', 'HTML', 'SCSS', 'CSS'],
					description: 'This is a tool developed with javascript as a lead gen tool which allows potential partners to calculate potential commission.',
					category: ['project-item', 'webdev', 'apps'],
					image: '/static/slide-partner-calculator.jpg',
					demo: 'https://codepen.io/adamkasiraj/full/NBPogO/'
				},
				{
					id: 10, 
					title: 'Wordpress Layout Builder',
					techstack: ['Wordpress', 'PHP', 'mySQL', 'Javascript', 'HTML', 'SCSS', 'CSS'],
					description: 'Created a templatized, but agile layout builder for Wordpress so that our content teams could scale new content quickly and efficiently. The inspiration for the layouts come from the material design "card" concept.',
					category: ['project-item', 'webdev', 'wordpress', 'apps'],
					image: '/static/slide-layout-builder.jpg'
				},
				{
					id: 11, 
					title: 'Recommended Products Plug-in',
					techstack: ['Wordpress', 'PHP', 'Javascript', 'Demandware API', 'Bootstrap 3', 'HTML', 'SCSS', 'CSS'],
					description: 'A wordpress plug-in that displays recommended products based on the content of currently viewed article',
					category: ['project-item', 'webdev', 'wordpress', 'apps'],
					image: '/static/slide-rec-products.jpg'
				},
				{
					id: 12, 
					title: 'Coupon Generator Plug-in',
					techstack: ['Wordpress', 'PHP', 'Bootstrap 3', 'HTML', 'SCSS', 'CSS'],
					description: 'A Wordpress plug-in that allows front end users to generate a coupon via a shortcode in the CMS.',
					category: ['project-item', 'webdev', 'wordpress', 'apps'],
					image: '/static/slide-coupons.jpg'
				},
				{
					id: 13, 
					title: 'Mega Nav',
					techstack: ['Demandware', 'Bootstrap 3', 'HTML', 'SCSS', 'CSS'],
					description: 'A fully responsive mega navigational menu',
					category: ['project-item', 'webdev', 'apps'],
					image: '/static/slide-mega-nav.jpg'
				},
				{
					id: 14, 
					title: 'rackexpress.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Rack Express corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-rack-express.jpg'
				},
				{
					id: 15, 
					title: 'bayouops.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed this prototype website - presented at re-design pitch but was not chosen',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-bayou-ops1.jpg'
				},
				{
					id: 16, 
					title: 'bayouops.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Bayou Procesing & Storage LP corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-bayou-ops2.jpg'
				},
				{
					id: 17, 
					title: 'webuyrack.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the We Buy Rack corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-we-buy.jpg'
				},
				{
					id: 18, 
					title: 'littleeinsteinslearningacademy.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Little Einsteins Montessori Daycare wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-little-einsteins.jpg'
				},
				{
					id: 19, 
					title: 'nawlusa.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the North American Wholesale Logistics corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-nawl.jpg'
				},
				{
					id: 20, 
					title: 'gbpipemill.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Greens Bayou Pipe Mill LP corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-greens-bayou.jpg'
				},
				{
					id: 21, 
					title: 'aceforklift.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Ace Forklift corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-ace-forklift.jpg'
				},
				{
					id: 22, 
					title: 'dallaspalletrack.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Dallas Pallet Rack corporate wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-dallas-rack.jpg'
				},
				{
					id: 23, 
					title: 'katymontessori.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Katy Montessori School wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-katy-montessori.jpg'
				},
				{
					id: 24, 
					title: 'warehouseservices-usa.com',
					techstack: ['Wordpress', 'PHP', 'Javascript',  'HTML', 'CSS'],
					description: 'Designed and developed the Warehouse Services wordpress website with a custom theme',
					category: ['project-item', 'webdev', 'wordpress', 'websites'],
					image: '/static/slide-warehouse-services.jpg'
				},
				{
					id: 25, 
					title: 'Graphic Design - Promo Flyer',
					techstack: ['Photoshop', 'InDesign'],
					description: 'A custom promotional flyer',
					category: ['project-item', 'graphics'],
					image: '/static/slide-warehouse-services.jpg'
				},
				{
					id: 26, 
					title: 'Graphic Design - Logo Design',
					techstack: ['Photoshop', 'Illustrator'],
					description: 'A custom logo for openboxdirect.com',
					category: ['project-item', 'graphics'],
					image: '/static/slide-obd-logo.jpg'
				},
				{
					id: 27, 
					title: 'Graphic Design - Promo Flyer',
					techstack: ['Photoshop', 'InDesign'],
					description: 'A custom promotional flyer',
					category: ['project-item', 'graphics'],
					image: '/static/slide-rack-flyer.jpg'
				},
				{
					id: 28, 
					title: 'Graphic Design - Logo Design',
					techstack: ['Photoshop'],
					description: 'A custom logo for Big State Realty',
					category: ['project-item', 'graphics'],
					image: '/static/slide-realty-logo.jpg'
				},
				{ 
					id: 29,
					title: 'Graphic Design - Bi-Fold Folder',
					techstack: ['Illustrator',],
					description: 'A custom folder design',
					category: ['project-item', 'graphics'],
					image: '/static/slide-rack-folder.jpg'
				},
		    ],
		    selectedCategory: 'all'
		}
	},
	mounted:
		function() {
			this.$nextTick(function () {
  					
					var filterlistli = $(".filter-list li");
					filterlistli.on( 'click', function() { 
						filterlistli.removeClass("active");
						$(this).addClass("active");        

							var selector = $(this).attr('data-filter'); 
							$(".project-container").isotope({ 
								filter: selector, 
								animationOptions: { 
									duration: 750, 
									easing: 'linear', 
									queue: false, 
								} 
							}); 
							return false; 
					}); 
				  
	  		});
			
			
		},
	methods: {
		modal: function (project, event) {
			event.preventDefault();
			this.title = project.title;
          	this.description = project.description;
          	this.techstack = project.techstack;
          	this.image = project.image;
          	this.demo = project.demo;
          	document.getElementById("myNav").style.display = "block";
          	//document.getElementById("myNav").style.height = "auto";
		},
		closeModal: function () {
			document.getElementById("myNav").style.display = "none";
			//document.getElementById("myNav").style.minHeight = "0";
		}

	}
}
</script>

<style lang="scss" scoped>

/* The Overlay (background) */
.modalOverlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */    
    min-height: 100%;
    width: 100%;
    display:none;
    position: fixed; /* Stay in place */
    z-index: 1021; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(255,255,255); /* Black fallback color */
    background-color: rgba(255,255,255, 0.9); /* Black w/opacity */
    overflow-x: hidden; /* Disable horizontal scroll */
    transition: .5s /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.modalOverlay-content {
    position: relative;
    top: 25%; /* 25% from the top */
    width: 100%; /* 100% width */
    text-align: center; /* Centered text/links */
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
    cursor: pointer;
}



/* Position the close button (top right corner) */
.modalOverlay .closebtn {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 60px;
    padding:4rem;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 600px) {
	.modalOverlay {
		 overflow-y:auto;
      -webkit-overflow-scrolling:touch;
      max-height:500px;
	}
    .modalOverlay .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}

.projects{
	background:#f8f7f5;
}
.project-content {
    padding-top: 60px;
}
.filter-list{
	position: relative;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	list-style: none;
	li {
		position: relative;
		margin: 0 1em;
		.menu-link {
			position: relative;
			display: block;
			text-align: center;
			color: #929292;
			padding:1rem;
			-webkit-transition: color 0.4s;
			transition: color 0.4s;

			&:hover {
				text-decoration: none;
			}

			&:before,
			&:after {
				left: 0;
				width: 100%;
				height: 2px;
				-webkit-transform: scale3d(0, 1, 1);
				transform: scale3d(0, 1, 1);
			}

			&:before {
				top: 0;
				-webkit-transform-origin: 0 50%;
				transform-origin: 0 50%;
			}
			&:after {
				bottom: 0;
				-webkit-transform-origin: 100% 50%;
				transform-origin: 100% 50%;
			}



		}
		&:before,
		&:after,
		.menu-link:before,
		.menu-link:after
		 {
			content: '';
			position: absolute;
			background: #d94f5c;
			-webkit-transition: -webkit-transform 0.2s;
			transition: transform 0.2s;
		}
		&:before,
		&:after {
			top: 0;
			width: 2px;
			height: 100%;
			-webkit-transform: scale3d(1, 0, 1);
			transform: scale3d(1, 0, 1);
		}

		&:before {
			left: 0;
			-webkit-transform-origin: 50% 100%;
			transform-origin: 50% 100%;
		}

		&:after {
			right: 0;
			-webkit-transform-origin: 50% 0%;
			transform-origin: 50% 0%;
		}
		&.active {
			&:before,
			&:after,
			.menu-link:before,
			.menu-link:after {
				-webkit-transform: scale3d(1, 1, 1);
				transform: scale3d(1, 1, 1);
				-webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				-webkit-transition-duration: 0.4s;
				transition-duration: 0.4s;
			}
			.menu-link {
				color: #d94f5c;
			}
		}
	}
}
.project-item{
	width:100%;
	float:left;
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	cursor: pointer;

	@media (min-width:576px) {
		width: 50%;
	}
	@media (min-width:768px) {
		width: 33%;
	}
	@media (min-width:992px) {
		width: 25%;
	}
	@media (min-width:1200px) {
		width: 16.6667%;
	}

	&:hover {
		-webkit-filter: grayscale(0%);
		filter: grayscale(0%);
	}

	img {
		width:100%;
		overflow:hidden;
	}

}

</style>