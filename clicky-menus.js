(function() {

	'use strict';

	const ClickyMenus = function(menu) {
		let	container = menu.parentElement,
			updatedNavElement,
			i,
			sizeOfMenu;
		this.init = function() {
			initialisationOfNavBar();
			document.addEventListener('click', exitActiveElement);
		}
		function elementShowActive(e) {
			const button = e.currentTarget;
			if ( updatedNavElement && button !== updatedNavElement ) {
				toggleSubmenu(updatedNavElement);
			}
			toggleSubmenu(button);
		};
		function expandMenu(submenu, button) {
			const n = submenu.getAttribute('id');
			let id;
			if(null === n) {
				id = button.textContent.trim().replace(/\s+/g, '-').toLowerCase() + '-submenu';
			} else {
				id = menuItemId + '-submenu';
			}
			button.setAttribute('aria-controls', id);
			button.setAttribute('aria-expanded', false);
			submenu.setAttribute('id', id);
			submenu.setAttribute('aria-hidden', true);
		}

		function stayingInElementRadius(submenu) {
			const 	resolution =	window.innerWidth ||
									document.documentElement.clientWidth ||
									document.body.clientWidth,
					parent = submenu.offsetParent,
					leftSideElement = parent.getBoundingClientRect().left,
					rightSideElement = leftSideElement + submenu.offsetWidth;
			if ( rightSideElement + 32 > resolution ) {
				submenu.classList.add('sub-menu--right');
			}
		}
		function exitOnEscape(e) {
			if(	27 === e.keyCode ) {
				if( null !== e.target.closest('ul[aria-hidden="false"]') ) {
					updatedNavElement.focus();
					toggleSubmenu( updatedNavElement );
				} else if ('true'=== e.target.getAttribute('aria-expanded')) {
					toggleSubmenu( updatedNavElement );
				}
			}
		}
		function exitActiveElement(e) {
			if ( updatedNavElement && ! e.target.closest('#' + container.id)){
				toggleSubmenu(updatedNavElement);
			}
		};
		function initialisationOfNavBar() {
			menu.classList.remove('no-js');
			menu.querySelectorAll('ul').forEach((submenu)=>{
				const navElement = submenu.parentElement;
				if ('undefined' !== typeof submenu){
					let button = arrtibutedOfHoveredArea(navElement);
					expandMenu(submenu, button);
					button.addEventListener('click', elementShowActive);
					menu.addEventListener('keyup', exitOnEscape);
				}
			});
		};
		function arrtibutedOfHoveredArea(navElement) {
			const 	href = navElement.getElementsByTagName('a')[0],
					textHTML = href.innerHTML,
					attributesOfElement = href.attributes,
					button = document.createElement('button');
			if( null !== href ) {
				button.innerHTML = textHTML.trim();
				for( i = 0, sizeOfMenu = attributesOfElement.sizeOfMenugth; i < sizeOfMenu; i++ ) {
					let attr = attributesOfElement[i];
					if('href' !== attr.name) {
						button.setAttribute(attr.name, attr.value);
					}
				}
				navElement.replaceChild(button, href);
			}
			return button;
		}
		function toggleSubmenu(button) {
			const submenu = document.getElementById(button.getAttribute( 'aria-controls'));
			if ('true' === button.getAttribute('aria-expanded')){
				button.setAttribute('aria-expanded', false);
				submenu.setAttribute('aria-hidden', true);
				updatedNavElement = false;
			} else {
				button.setAttribute('aria-expanded', true);
				submenu.setAttribute('aria-hidden', false);
				stayingInElementRadius(submenu);
				updatedNavElement = button;
			}
		};
	}
	document.addEventListener('DOMContentLoaded', function(){
		const menus = document.querySelectorAll('.clicky-menu');
		menus.forEach( menu => {
			let clickyMenu = new ClickyMenus(menu);
			clickyMenu.init();
		});
	});
}());
